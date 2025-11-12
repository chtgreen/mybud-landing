import { useCallback, useEffect, useMemo, useState } from 'react';

const modalQueryParam = 'modal';

export function useUrlModalState(modalKey: string, defaultOpen = false) {
  const normalizedKey = useMemo(() => modalKey.trim().toLowerCase(), [modalKey]);
  const canUseDom = typeof window !== 'undefined';

  const [isOpen, setIsOpen] = useState(() => {
    if (!canUseDom) {
      return defaultOpen;
    }
    const params = new URLSearchParams(window.location.search);
    const current = params.get(modalQueryParam);
    if (!current) {
      return defaultOpen;
    }
    return current.toLowerCase() === normalizedKey;
  });

  useEffect(() => {
    if (!canUseDom) {
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const current = params.get(modalQueryParam);
    if (current && current.toLowerCase() === normalizedKey) {
      setIsOpen(true);
    }
  }, [canUseDom, normalizedKey]);

  const syncUrl = useCallback(
    (params: URLSearchParams) => {
      if (!canUseDom) {
        return;
      }
      const query = params.toString();
      const prefix = query ? `?${query}` : '';
      const suffix = window.location.hash || '';
      const nextUrl = `${window.location.pathname}${prefix}${suffix}`;
      window.history.replaceState(null, '', nextUrl);
    },
    [canUseDom]
  );

  const open = useCallback(() => {
    if (!canUseDom) {
      setIsOpen(true);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    params.set(modalQueryParam, normalizedKey);
    syncUrl(params);
    setIsOpen(true);
  }, [canUseDom, normalizedKey, syncUrl]);

  const close = useCallback(() => {
    if (!canUseDom) {
      setIsOpen(false);
      return;
    }
    const params = new URLSearchParams(window.location.search);
    params.delete(modalQueryParam);
    syncUrl(params);
    setIsOpen(false);
  }, [canUseDom, syncUrl]);

  return { isOpen, open, close };
}


