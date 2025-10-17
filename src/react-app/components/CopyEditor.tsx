import React, { useEffect, useMemo, useState } from 'react';
import {
  getLoadedTranslations,
  getCurrentNamespace,
  getCurrentLanguage,
  type Language,
  applyNamespaceEdits,
  subscribeI18n,
  type TranslationTree
} from '../lib/i18n';

type FlatMap = Record<string, string>;
type NestedTranslations = TranslationTree;

const isRecord = (value: unknown): value is NestedTranslations =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const flatten = (source: NestedTranslations | undefined, prefix = ''): FlatMap => {
  const out: FlatMap = {};
  if (!isRecord(source)) return out;
  for (const [key, value] of Object.entries(source)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      out[path] = value;
    } else if (isRecord(value)) {
      Object.assign(out, flatten(value, path));
    }
  }
  return out;
};

const setByPath = (target: NestedTranslations, path: string[], value: string) => {
  let ref: NestedTranslations = target;
  for (let i = 0; i < path.length; i++) {
    const k = path[i];
    const isLeaf = i === path.length - 1;
    if (isLeaf) {
      ref[k] = value;
    } else {
      const child = ref[k];
      if (!isRecord(child)) {
        ref[k] = {} as TranslationTree;
      }
      ref = ref[k] as NestedTranslations;
    }
  }
};

const buildNested = (flat: FlatMap): NestedTranslations => {
  const root: NestedTranslations = {} as TranslationTree;
  for (const [path, value] of Object.entries(flat)) {
    const parts = path.split('.');
    setByPath(root, parts, value);
  }
  return root;
};

const downloadJson = (filename: string, data: unknown) => {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
};

interface CopyEditorProps {
  onClose?: () => void;
}

const CopyEditor: React.FC<CopyEditorProps> = ({ onClose }) => {
  const lang = getCurrentLanguage() as Language;
  const ns = getCurrentNamespace();
  const translations = getLoadedTranslations();

  const currentNamespaceTranslations = useMemo(() => {
    const candidate = translations?.[ns];
    return isRecord(candidate) ? candidate : {};
  }, [translations, ns]);

  const initialFlat = useMemo(
    () => flatten(currentNamespaceTranslations),
    [currentNamespaceTranslations]
  );
  const [filter, setFilter] = useState('');
  const [flatEdits, setFlatEdits] = useState<FlatMap>(initialFlat);

  useEffect(() => {
    setFlatEdits(initialFlat);
  }, [initialFlat]);

  useEffect(() => {
    const unsubscribe = subscribeI18n(() => {
      const namespaceData = getLoadedTranslations()?.[getCurrentNamespace()];
      const flattened = flatten(isRecord(namespaceData) ? namespaceData : {});
      setFlatEdits(flattened);
    });
    return unsubscribe;
  }, []);

  const filteredEntries = useMemo(() => {
    const q = filter.trim().toLowerCase();
    const entries = Object.entries(flatEdits);
    if (!q) return entries;
    return entries.filter(([k, v]) => k.toLowerCase().includes(q) || v.toLowerCase().includes(q));
  }, [flatEdits, filter]);

  const handleChange = (k: string, v: string) => {
    setFlatEdits((prev) => {
      const next = { ...prev, [k]: v };
      // apply live updates to in-memory i18n
      const nested = buildNested(next);
      applyNamespaceEdits(nested);
      return next;
    });
  };

  const handleDownloadNs = () => {
    const nested = buildNested(flatEdits);
    downloadJson(`${lang}-${ns}.json`, nested);
  };

  const handleDownloadFullLang = () => {
    const nested = buildNested(flatEdits);
    const full = { ...translations, [ns]: nested };
    downloadJson(`${lang}.json`, full);
  };

  return (
    <div style={{ position: 'fixed', top: 16, right: 16, zIndex: 99999, width: 420 }}>
      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12, borderBottom: '1px solid #f0f2f5' }}>
          <div style={{ fontWeight: 700, color: '#0f172a' }}>Copy Editor</div>
          <div style={{ fontSize: 12, color: '#64748b' }}>{lang} · {ns}</div>
        </div>
        <div style={{ padding: 12, display: 'flex', gap: 8 }}>
          <input
            value={filter}
            onChange={e => setFilter(e.target.value)}
            placeholder="Search key or text"
            style={{ flex: 1, padding: '8px 10px', border: '1px solid #e5e7eb', borderRadius: 8 }}
          />
          <button onClick={handleDownloadNs} style={{ padding: '8px 10px', background: '#10b981', color: 'white', borderRadius: 8, border: 0 }}>Download {ns}.json</button>
        </div>
        <div style={{ padding: 12, display: 'flex', gap: 8 }}>
          <button onClick={handleDownloadFullLang} style={{ padding: '8px 10px', background: '#059669', color: 'white', borderRadius: 8, border: 0, width: '100%' }}>Download full {lang}.json</button>
          {onClose && (
            <button onClick={onClose} style={{ padding: '8px 10px', background: '#e5e7eb', color: '#0f172a', borderRadius: 8, border: 0 }}>Close</button>
          )}
        </div>
        <div style={{ maxHeight: '60vh', overflow: 'auto', padding: 12, borderTop: '1px solid #f0f2f5' }}>
          {filteredEntries.map(([k, v]) => (
            <div key={k} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>{k}</div>
              <textarea
                value={v}
                onChange={e => handleChange(k, e.target.value)}
                style={{ width: '100%', minHeight: 56, padding: 8, border: '1px solid #e5e7eb', borderRadius: 8 }}
              />
            </div>
          ))}
          {filteredEntries.length === 0 && (
            <div style={{ fontSize: 12, color: '#64748b' }}>No matches</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CopyEditor; 
