import React, { useState, useRef } from 'react';
import Draggable from 'react-draggable';
import { toPng } from 'html-to-image';
import { Download, Minus, Plus, RefreshCcw, Image as ImageIcon, X, ArrowLeftRight, Eye, EyeOff, Trash2, Layout, Check, AlignCenter, AlignJustify, Sparkles, Wand2 } from 'lucide-react';

const COLORS = {
    emerald: '#288664',
    lime: '#AAD268',
    softBlue: '#EFF2FE',
    purple: '#D5C0FD',
    pink: '#EB4C80',
    softPink: '#F9C9DE',
    offWhite: '#E6E7E8',
    white: '#FFFFFF',
    black: '#000000',
};

const THEMES = {
    '6167': { bg: '#288664', title: '#FFFFFF', text: '#E6E7E8', accent: '#AAD268', logo: '/mybud-logo-white.svg', name: 'Pantone 6167 U' },
    '2299': { bg: '#AAD268', title: '#288664', text: '#000000', accent: '#FFFFFF', logo: '/mybud-logo-green.svg', name: 'Pantone 2299 U' },
    '656': { bg: '#EFF2FE', title: '#288664', text: '#000000', accent: '#AAD268', logo: '/mybud-logo-green.svg', name: 'Pantone 656 U' },
    '2635': { bg: '#D5C0FD', title: '#288664', text: '#000000', accent: '#FFFFFF', logo: '/mybud-logo-green.svg', name: 'Pantone 2635 U' },
    '213': { bg: '#EB4C80', title: '#FFFFFF', text: '#FFFFFF', accent: '#AAD268', logo: '/mybud-logo-white.svg', name: 'Pantone 213 U' },
    '517': { bg: '#F9C9DE', title: '#EB4C80', text: '#000000', accent: '#288664', logo: '/mybud-logo-green.svg', name: 'Pantone 517 U' },
    '7541': { bg: '#E6E7E8', title: '#288664', text: '#000000', accent: '#AAD268', logo: '/mybud-logo-green.svg', name: 'Pantone 7541 U' },
    'white': { bg: '#FFFFFF', title: '#288664', text: '#121212', accent: '#AAD268', logo: '/mybud-logo-green.svg', name: 'Brand White' },
    'black': { bg: '#000000', title: '#AAD268', text: '#FFFFFF', accent: '#288664', logo: '/mybud-logo-white.svg', name: 'Brand Black' }
};


const SHAPES = [
    { id: 'shape-1', type: 'gradient', className: 'bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl' },
    { id: 'shape-2', type: 'gradient', className: 'bg-gradient-to-tr from-black/20 to-transparent rounded-[40%] blur-3xl' },
    { id: 'shape-3', type: 'border', className: 'border border-white/20 rounded-full' },
    { id: 'shape-4', type: 'line', className: 'h-px w-full bg-white/20' },
    { id: 'shape-5', type: 'glass', className: 'bg-white/5 backdrop-blur-md rounded-2xl border border-white/10' },
    { id: 'shape-6', type: 'blob', className: 'bg-[#AAD268]/20 rounded-full blur-2xl' },
    { id: 'shape-7', type: 'scanline', className: 'bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,.25)_50%),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))] bg-[length:100%_2px,3px_100%] absolute inset-0 pointer-events-none' },
    { id: 'shape-8', type: 'noise', className: 'bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20 absolute inset-0 pointer-events-none' },
    { id: 'shape-9', type: 'outline-title', className: 'border-2 border-white/10 rounded-xl px-4 py-2 flex items-center justify-center' },
];

const BUDZINHOS = [
    { id: 'bud-1', src: '/assets/budzinho/MyBud - Budzinho Contorno Verde 4.svg' },
    { id: 'bud-2', src: '/assets/budzinho/MyBud - Budzinho Contorno Verde 5.svg' },
    { id: 'bud-3', src: '/assets/budzinho/MyBud - Budzinho Contorno Verde 6.svg' },
    { id: 'bud-4', src: '/assets/budzinho/MyBud - Budzinho Contorno Preto 7.svg' },
    { id: 'bud-5', src: '/assets/budzinho/MyBud - Budzinho Contorno Preto 9.svg' },
    { id: 'bud-6', src: '/assets/budzinho/MyBud - Budzinho Contorno Preto.svg' }
];

interface StoryItem {
    id: string;
    type: 'image' | 'shape';
    src?: string;
    className?: string;
    size: number;
    color?: string | null;
    position: { x: number; y: number };
}

interface Preset {
    id: string;
    name: string;
    theme: keyof typeof THEMES;
    title: string;
    content: string;
    titleSize: number;
    contentSize: number;
    titlePos: { x: number; y: number };
    contentPos: { x: number; y: number };
    items: StoryItem[];
}

const PRESETS: Preset[] = [
    {
        id: 'editorial-vogue',
        name: 'Editorial Luxe',
        theme: 'white',
        title: 'CRAFTING\nELITE\nGENETICS',
        content: 'Experience the new standard of cultivation. Where every detail matters.',
        titleSize: 48, contentSize: 18, titlePos: { x: 0, y: 20 }, contentPos: { x: 0, y: 160 },
        items: [
            { id: 'ed-1', type: 'shape', className: 'border-l-2 border-zinc-950/20', size: 100, position: { x: -140, y: 160 } },
            { id: 'ed-2', type: 'shape', className: 'bg-zinc-950/5 blur-3xl rounded-full', size: 300, position: { x: 100, y: -100 } }
        ]
    },
    {
        id: 'cyber-noise',
        name: 'Digital Noise',
        theme: 'black',
        title: 'BETA ACCESS\nLIVE NOW',
        content: 'Data-driven growth for the next generation of professional growers.',
        titleSize: 52, contentSize: 16, titlePos: { x: 0, y: 40 }, contentPos: { x: 0, y: 140 },
        items: [
            { id: 'cy-1', type: 'shape', className: SHAPES[6].className, size: 640, position: { x: 0, y: 0 } },
            { id: 'cy-2', type: 'shape', className: SHAPES[7].className, size: 640, position: { x: 0, y: 0 } },
            { id: 'cy-3', type: 'shape', className: 'border border-emerald-500/30', size: 320, position: { x: 0, y: 50 } }
        ]
    },
    {
        id: 'brand-pulse',
        name: 'Brand Pulse',
        theme: '213',
        title: 'VIBRANT\nENERGY',
        content: 'Unleash the full potential of your brand with our premium tools.',
        titleSize: 56, contentSize: 20, titlePos: { x: 0, y: 40 }, contentPos: { x: 0, y: 180 },
        items: [
            { id: 'bp-1', type: 'shape', className: SHAPES[5].className, size: 300, position: { x: -100, y: 200 } },
            { id: 'bp-2', type: 'shape', className: 'bg-white/10 blur-2xl rounded-full', size: 200, position: { x: 120, y: -200 } }
        ]
    },
    {
        id: 'industry-clinical',
        name: 'Clinical Pro',
        theme: 'black',
        title: 'PRECISION\nCANNABIS',
        content: 'Data-driven insights for professional brands. Elevate your prescription game.',
        titleSize: 52, contentSize: 20, titlePos: { x: 0, y: 20 }, contentPos: { x: 0, y: 140 },
        items: [{ id: 'p1-1', type: 'shape', className: SHAPES[0].className, size: 280, position: { x: 0, y: 160 } }]
    },
    {
        id: 'nature-minimal',
        name: 'Eco Minimal',
        theme: '6167',
        title: 'ROOTED IN\nSCIENCE',
        content: 'Where biology meets technology. The most advanced grow tracker in Brazil.',
        titleSize: 48, contentSize: 18, titlePos: { x: 0, y: 20 }, contentPos: { x: 0, y: 140 },
        items: [{ id: 'p2-1', type: 'shape', className: SHAPES[5].className, size: 160, position: { x: 0, y: 180 } }]
    },
    {
        id: 'royal-insight',
        name: 'Royal Insight',
        theme: '2635',
        title: 'PREMIUM\nDATA',
        content: 'The most sophisticated analytics platform for the modern cannabis industry.',
        titleSize: 64, contentSize: 22, titlePos: { x: 0, y: 80 }, contentPos: { x: 0, y: 200 },
        items: [{ id: 'ri-1', type: 'shape', className: SHAPES[2].className, size: 200, position: { x: 0, y: -100 } }]
    },
    {
        id: 'clinical-white',
        name: 'Clinical White',
        theme: 'white',
        title: 'MEDICAL\nGRADE',
        content: 'Strict adherence to global standards for professional cultivation.',
        titleSize: 52, contentSize: 18, titlePos: { x: 0, y: 20 }, contentPos: { x: 0, y: 140 },
        items: [{ id: 'cw-1', type: 'shape', className: SHAPES[4].className, size: 320, position: { x: 0, y: 80 } }]
    },
    {
        id: 'emerald-dark',
        name: 'Emerald Deep',
        theme: '6167',
        title: 'GROWER\nEXCELLENCE',
        content: 'Mastering the art and science of premium botanical growth.',
        titleSize: 48, contentSize: 20, titlePos: { x: 0, y: 0 }, contentPos: { x: 0, y: 120 },
        items: [{ id: 'ed-1', type: 'shape', className: SHAPES[0].className, size: 400, position: { x: 0, y: 0 } }]
    },
    {
        id: 'lime-neon',
        name: 'Lime Energy',
        theme: '2299',
        title: 'NEXT GEN\nTRACKER',
        content: 'Reimagining how professionals interact with their crops.',
        titleSize: 56, contentSize: 18, titlePos: { x: 0, y: 40 }, contentPos: { x: 0, y: 160 },
        items: [{ id: 'ln-1', type: 'shape', className: SHAPES[3].className, size: 300, position: { x: 0, y: 100 } }]
    },
];


const StoriesPage: React.FC = () => {
    const [theme, setTheme] = useState<keyof typeof THEMES>('6167');
    const [title, setTitle] = useState('DIGITE SEU TÍTULO');
    const [content, setContent] = useState('Imagine you are the designer u did the 3 pages...');
    const [showTitle, setShowTitle] = useState(true);
    const [showContent, setShowContent] = useState(true);
    const [showGuides, setShowGuides] = useState(true);
    const [titleSize, setTitleSize] = useState(48);
    const [contentSize, setContentSize] = useState(24);
    const [titleWidth, setTitleWidth] = useState(300);
    const [contentWidth, setContentWidth] = useState(280);
    const [items, setItems] = useState<StoryItem[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
    const [titlePos, setTitlePos] = useState({ x: 0, y: 0 });
    const [contentPos, setContentPos] = useState({ x: 0, y: 0 });

    const [activeX, setActiveX] = useState<boolean>(false);
    const [activeY, setActiveY] = useState<boolean>(false);

    const storyRef = useRef<HTMLDivElement>(null);
    const STAGE_WIDTH = 360;
    const STAGE_HEIGHT = 640;

    const downloadImage = async () => {
        if (storyRef.current === null) return;
        setSelectedItemId(null);
        const prevGuides = showGuides;
        setShowGuides(false);
        setActiveX(false);
        setActiveY(false);

        try {
            const dataUrl = await toPng(storyRef.current, {
                cacheBust: true,
                pixelRatio: 3,
                backgroundColor: THEMES[theme].bg,
                style: { borderRadius: '0px' }
            });
            const link = document.createElement('a');
            link.download = `mybud-story-${theme}-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error('oops, something went wrong!', err);
        } finally {
            setShowGuides(prevGuides);
        }
    };

    const addShape = (shape: any) => {
        const newItem: StoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            type: 'shape',
            className: shape.className,
            size: shape.id.includes('line') ? 300 : 120,
            color: null,
            position: { x: 0, y: 0 }
        };
        setItems([...items, newItem]);
        setSelectedItemId(newItem.id);
    };

    const addBudzinho = (src: string) => {
        const newItem: StoryItem = {
            id: Math.random().toString(36).substr(2, 9),
            type: 'image',
            src,
            size: 150,
            color: COLORS.emerald, // Default color for recoloring
            position: { x: 0, y: 0 }
        };
        setItems([...items, newItem]);
        setSelectedItemId(newItem.id);
    };

    const applyPreset = (p: Preset) => {
        setTheme(p.theme);
        setTitle(p.title);
        setContent(p.content);
        setTitleSize(p.titleSize);
        setContentSize(p.contentSize);
        setTitlePos(p.titlePos);
        setContentPos(p.contentPos);
        setItems(JSON.parse(JSON.stringify(p.items))); // Deep copy
        setSelectedItemId(null);
        setTitleWidth(300);
        setContentWidth(280);
    };

    const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
        if (selectedItemId === id) setSelectedItemId(null);
    };

    const updateItemSize = (id: string, delta: number) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, size: Math.max(20, item.size + delta) } : item
        ));
    };

    const updateItemColor = (id: string, color: string | null) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, color } : item
        ));
    };

    const centerItem = (id: string) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, position: { x: 0, y: 0 } } : item
        ));
    };

    const currentTheme = THEMES[theme];

    // Snapping logic with visual feedback
    const handleDrag = (_e: any, data: any, _width: number, _height: number, _elementId: string) => {
        const parent = data.node.parentElement;
        if (!parent) return;

        const rect = data.node.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const elementCenterX = rect.left - parentRect.left + rect.width / 2;
        const elementCenterY = rect.top - parentRect.top + rect.height / 2;

        const threshold = 6;
        const isCenteredX = Math.abs(elementCenterX - STAGE_WIDTH / 2) < threshold;
        const isCenteredY = Math.abs(elementCenterY - STAGE_HEIGHT / 2) < threshold;

        setActiveX(isCenteredX);
        setActiveY(isCenteredY);
    };

    const handleStop = () => {
        setActiveX(false);
        setActiveY(false);
    };

    const selectedItem = items.find(i => i.id === selectedItemId);

    return (
        <div className="min-h-screen bg-[#090909] flex flex-col items-center justify-center p-8 font-sans text-white overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 items-start justify-center">

                {/* Previews Sidebar (The 20 Presets) */}
                <div className="hidden xl:flex flex-col gap-3 w-56 max-h-[85vh] overflow-y-auto pr-3 custom-scrollbar">
                    <div className="flex items-center justify-between mb-4 px-1 sticky top-0 bg-[#090909] z-10 py-2">
                        <div className="flex items-center gap-2">
                            <Sparkles size={16} className="text-emerald-400" />
                            <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">2025 Presets</span>
                        </div>
                        <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">{PRESETS.length} TOTAL</span>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        {PRESETS.map((p) => (
                            <button
                                key={p.id}
                                onClick={() => applyPreset(p)}
                                className="group relative flex flex-col gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all text-left overflow-hidden"
                            >
                                <div className="w-full h-28 rounded-lg bg-zinc-800 relative overflow-hidden flex items-center justify-center border border-white/5">
                                    <div className="absolute inset-0" style={{ backgroundColor: THEMES[p.theme].bg }}></div>
                                    {/* Mini Preview Logo */}
                                    <img src={THEMES[p.theme].logo} className="absolute top-2 left-2 h-2 opacity-50" alt="" />
                                    <span className="relative z-10 text-[8px] font-bold text-center leading-tight uppercase opacity-80 px-2" style={{ color: THEMES[p.theme].title, fontFamily: '"Schabo Condensed", sans-serif' }}>{p.title.slice(0, 15)}...</span>
                                </div>
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[10px] font-bold uppercase tracking-tighter truncate group-hover:text-emerald-400 transition-colors">{p.name}</span>
                                    <Wand2 size={10} className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Story Preview Container */}
                <div className="flex-shrink-0 relative group">
                    <div
                        id="story-preview"
                        ref={storyRef}
                        className="w-[360px] h-[640px] relative shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] flex flex-col transition-all duration-500 overflow-hidden hover:scale-[1.01] hover:shadow-[0_48px_80px_-24px_rgba(0,0,0,0.6)]"
                        style={{ backgroundColor: currentTheme.bg, borderRadius: '24px', cursor: 'default' }}
                        onClick={() => setSelectedItemId(null)}
                    >
                        {/* THE GUIDELINES */}
                        {showGuides && (
                            <div className="absolute inset-0 pointer-events-none z-50">
                                <div className={`absolute left-1/2 top-0 bottom-0 border-l transition-opacity duration-200 ${activeX ? 'border-emerald-400 opacity-100 shadow-[0_0_15px_rgba(52,211,153,0.8)]' : 'border-white/5 opacity-40'}`}></div>
                                <div className={`absolute top-1/2 left-0 right-0 border-t transition-opacity duration-200 ${activeY ? 'border-emerald-400 opacity-100 shadow-[0_0_15px_rgba(52,211,153,0.8)]' : 'border-white/5 opacity-40'}`}></div>

                                <div className="absolute top-0 left-0 right-0 h-[80px] border-b border-dashed border-white/10 bg-white/5 flex items-end justify-center pb-1 text-[7px] uppercase tracking-widest opacity-20">Safe Top</div>
                                <div className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-dashed border-white/10 bg-white/5 flex items-start justify-center pt-1 text-[7px] uppercase tracking-widest opacity-20">Safe Bottom</div>
                                <div className="absolute top-0 bottom-0 left-0 w-[24px] border-r border-dashed border-white/10 bg-white/5 flex items-center justify-center text-[7px] uppercase tracking-widest opacity-10 [writing-mode:vertical-lr] rotate-180">Safe Left</div>
                                <div className="absolute top-0 bottom-0 right-0 w-[24px] border-l border-dashed border-white/10 bg-white/5 flex items-center justify-center text-[7px] uppercase tracking-widest opacity-10 [writing-mode:vertical-lr]">Safe Right</div>
                            </div>
                        )}

                        <div className="flex flex-col h-full relative p-10">
                            {/* Logo */}
                            <div className="mb-12 flex justify-center">
                                <img src={currentTheme.logo} alt="MyBud Logo" className="h-8 w-auto object-contain" />
                            </div>

                            <div className="flex flex-col h-full relative">
                                {showTitle && (
                                    <Draggable
                                        position={titlePos}
                                        onDrag={(_e, data) => {
                                            setTitlePos({ x: data.x, y: data.y });
                                            handleDrag(_e, data, titleWidth, titleSize, 'title');
                                        }}
                                        onStop={handleStop}
                                    >
                                        <div className="cursor-move inline-block active:scale-105 transition-all group/item relative z-10">
                                            <div className="absolute -top-6 left-0 flex gap-2 items-center bg-black/50 text-[8px] text-white px-2 py-0.5 rounded opacity-0 group-hover/item:opacity-100 uppercase tracking-tighter">
                                                Title
                                                <button onClick={() => setShowTitle(false)} className="hover:text-red-400 p-0.5"><Trash2 size={10} /></button>
                                            </div>
                                            <h1
                                                className="text-display leading-[0.9] break-words uppercase font-bold"
                                                style={{
                                                    fontSize: `${titleSize}px`,
                                                    color: currentTheme.title,
                                                    width: `${titleWidth}px`,
                                                    fontFamily: '"Schabo Condensed", sans-serif'
                                                }}
                                            >
                                                {title}
                                            </h1>
                                        </div>
                                    </Draggable>
                                )}

                                {showContent && (
                                    <Draggable
                                        position={contentPos}
                                        onDrag={(_e, data) => {
                                            setContentPos({ x: data.x, y: data.y });
                                            handleDrag(_e, data, contentWidth, contentSize * 2, 'content');
                                        }}
                                        onStop={handleStop}
                                    >
                                        <div className="cursor-move mt-10 inline-block active:scale-105 transition-all group/item relative z-10">
                                            <div className="absolute -top-6 left-0 flex gap-2 items-center bg-black/50 text-[8px] text-white px-2 py-0.5 rounded opacity-0 group-hover/item:opacity-100 uppercase tracking-tighter">
                                                Content
                                                <button onClick={() => setShowContent(false)} className="hover:text-red-400 p-0.5"><Trash2 size={10} /></button>
                                            </div>
                                            <p
                                                className="leading-relaxed break-words font-medium"
                                                style={{
                                                    fontSize: `${contentSize}px`,
                                                    color: currentTheme.text,
                                                    width: `${contentWidth}px`,
                                                    fontFamily: '"Uncut Sans", sans-serif'
                                                }}
                                            >
                                                {content}
                                            </p>
                                        </div>
                                    </Draggable>
                                )}

                                {/* Dynamic Items */}
                                {items.map(item => (
                                    <Draggable
                                        key={item.id}
                                        position={item.position}
                                        onDrag={(_e, data) => {
                                            setItems(prev => prev.map(i => i.id === item.id ? { ...i, position: { x: data.x, y: data.y } } : i));
                                            handleDrag(_e, data, item.size, item.size, item.id);
                                        }}
                                        onStop={handleStop}
                                        onStart={() => setSelectedItemId(item.id)}
                                    >
                                        <div
                                            className={`absolute cursor-move inline-block group/asset scale-100 hover:scale-105 transition-transform ${selectedItemId === item.id ? 'ring-2 ring-emerald-400 ring-offset-4 ring-offset-transparent rounded-lg' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedItemId(item.id);
                                            }}
                                        >
                                            <div className="absolute -top-8 right-0 flex gap-1 opacity-0 group-hover/asset:opacity-100 bg-black/80 p-1 rounded-lg transition-opacity pointer-events-auto z-20">
                                                <button onClick={() => updateItemSize(item.id, -10)} className="p-1 hover:bg-white/20 rounded text-white"><Minus size={12} /></button>
                                                <button onClick={() => updateItemSize(item.id, 10)} className="p-1 hover:bg-white/20 rounded text-white"><Plus size={12} /></button>
                                                <button onClick={() => removeItem(item.id)} className="p-1 hover:bg-red-500/50 rounded text-red-300"><X size={12} /></button>
                                            </div>

                                            {item.type === 'shape' ? (
                                                <div
                                                    className={item.className}
                                                    style={{
                                                        width: `${item.size}px`,
                                                        height: item.className?.includes('h-px') ? '1px' : `${item.size}px`,
                                                        backgroundColor: item.color || undefined,
                                                    }}
                                                />
                                            ) : item.color ? (
                                                <div
                                                    style={{
                                                        width: `${item.size}px`,
                                                        height: `${item.size}px`,
                                                        backgroundColor: item.color,
                                                        WebkitMaskImage: `url("${item.src}")`,
                                                        maskImage: `url("${item.src}")`,
                                                        WebkitMaskRepeat: 'no-repeat',
                                                        maskRepeat: 'no-repeat',
                                                        WebkitMaskSize: 'contain',
                                                        maskSize: 'contain',
                                                        WebkitMaskPosition: 'center',
                                                        maskPosition: 'center'
                                                    }}
                                                />
                                            ) : (
                                                <img
                                                    src={item.src}
                                                    alt="Asset"
                                                    draggable={false}
                                                    style={{ width: `${item.size}px`, height: 'auto' }}
                                                />
                                            )}
                                        </div>
                                    </Draggable>
                                ))}

                                <div className="mt-auto pointer-events-none pb-2">
                                    <div className="h-1.5 w-16 rounded-full" style={{ backgroundColor: currentTheme.accent }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls Panels */}
                <div className="flex flex-col gap-6 w-full max-w-xl">
                    <div className="bg-zinc-900 p-8 rounded-[32px] border border-white/10 backdrop-blur-xl flex flex-col gap-6">
                        <div className="flex items-center justify-between border-b border-white/10 pb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400">
                                    <Sparkles size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black uppercase italic tracking-wider">Story Builder PRO</h2>
                                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">MyBud Design System 2025</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setShowGuides(!showGuides)}
                                    className={`p-2 rounded-xl border transition-all ${showGuides ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-white/30'}`}
                                    title="Guides & Snap"
                                >
                                    <Layout size={18} />
                                </button>
                                <button
                                    onClick={() => setShowTitle(!showTitle)}
                                    className={`p-2 rounded-xl border transition-all ${showTitle ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-white/5 border-white/10 text-white/30'}`}
                                    title="Title"
                                >
                                    {showTitle ? <Eye size={18} /> : <EyeOff size={18} />}
                                </button>
                            </div>
                        </div>

                        {/* Item Customization */}
                        {selectedItem && (
                            <div className="flex flex-col gap-4 p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 animate-in zoom-in-95 duration-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">Asset Options</span>
                                    <div className="flex gap-2">
                                        <button onClick={() => centerItem(selectedItem.id)} className="p-1.5 bg-white/5 hover:bg-white/20 rounded transition-all text-white/70" title="Align to Center"><AlignCenter size={14} /></button>
                                        <button onClick={() => setSelectedItemId(null)} className="p-1 hover:bg-white/10 rounded"><Check size={14} /></button>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">Global Brand Colors</span>
                                    <div className="flex flex-wrap gap-2">
                                        <button
                                            onClick={() => updateItemColor(selectedItem.id, null)}
                                            className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${!selectedItem.color ? 'border-emerald-400 scale-110 shadow-lg shadow-emerald-500/20' : 'border-transparent bg-white/5'}`}
                                        >
                                            <RefreshCcw size={12} />
                                        </button>
                                        {Object.entries(COLORS).map(([name, code]) => (
                                            <button
                                                key={name}
                                                onClick={() => updateItemColor(selectedItem.id, code)}
                                                className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center transition-all ${selectedItem.color === code ? 'border-white scale-110 shadow-lg' : 'border-transparent'}`}
                                                style={{ backgroundColor: code }}
                                            >
                                                {selectedItem.color === code && <Check size={12} className={code === '#FFFFFF' || code === '#AAD268' ? 'text-black' : 'text-white'} />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Theme Selection */}
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-black px-1">Global Themes</span>
                            <div className="grid grid-cols-5 gap-3">
                                {(Object.keys(THEMES) as Array<keyof typeof THEMES>).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setTheme(t)}
                                        className={`flex flex-col items-center gap-2 p-2 rounded-2xl transition-all border-2 ${theme === t ? 'border-emerald-500 bg-emerald-500/5' : 'border-transparent bg-white/5 hover:bg-white/10'}`}
                                    >
                                        <div className="w-full aspect-square rounded-xl shadow-inner border border-white/10" style={{ backgroundColor: THEMES[t].bg }}></div>
                                        <span className="text-[7px] uppercase font-black tracking-tighter opacity-70 truncate w-full text-center">{THEMES[t].name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Title Editor */}
                            <div className={`flex flex-col gap-3 transition-all duration-300 ${!showTitle ? 'opacity-30 grayscale pointer-events-none' : ''}`}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Headline</span>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => setTitlePos({ x: 0, y: 0 })} className="p-1 px-2 bg-white/5 hover:bg-white/10 rounded text-[9px] font-bold uppercase tracking-tighter transition-all">Center</button>
                                            <div className="flex items-center gap-1">
                                                <button onClick={() => setTitleSize(s => Math.max(12, s - 4))} className="p-1 hover:bg-white/10 rounded"><Minus size={10} /></button>
                                                <span className="text-[9px] w-6 text-center font-bold">{titleSize}</span>
                                                <button onClick={() => setTitleSize(s => Math.min(120, s + 4))} className="p-1 hover:bg-white/10 rounded"><Plus size={10} /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-60">
                                        <div className="text-[8px] uppercase font-black tracking-widest text-zinc-500">Box Width</div>
                                        <input
                                            type="range" min="50" max="320" value={titleWidth}
                                            onChange={(e) => setTitleWidth(parseInt(e.target.value))}
                                            className="flex-1 accent-emerald-500 h-1"
                                        />
                                    </div>
                                </div>
                                <textarea
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm font-bold focus:outline-none focus:border-emerald-500 transition-colors resize-none h-20"
                                    placeholder="Headline..."
                                />
                            </div>

                            {/* Content Editor */}
                            <div className={`flex flex-col gap-3 transition-all duration-300 ${!showContent ? 'opacity-30 grayscale pointer-events-none' : ''}`}>
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-black">Body Text</span>
                                        <div className="flex items-center gap-2">
                                            <button onClick={() => setContentPos({ x: 0, y: 0 })} className="p-1 px-2 bg-white/5 hover:bg-white/10 rounded text-[9px] font-bold uppercase tracking-tighter transition-all">Center</button>
                                            <div className="flex items-center gap-1">
                                                <button onClick={() => setContentSize(s => Math.max(10, s - 2))} className="p-1 hover:bg-white/10 rounded"><Minus size={10} /></button>
                                                <span className="text-[9px] w-6 text-center font-bold">{contentSize}</span>
                                                <button onClick={() => setContentSize(s => Math.min(80, s + 2))} className="p-1 hover:bg-white/10 rounded"><Plus size={10} /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-60">
                                        <div className="text-[8px] uppercase font-black tracking-widest text-zinc-500">Box Width</div>
                                        <input
                                            type="range" min="50" max="320" value={contentWidth}
                                            onChange={(e) => setContentWidth(parseInt(e.target.value))}
                                            className="flex-1 accent-emerald-500 h-1"
                                        />
                                    </div>
                                </div>
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none h-20"
                                    placeholder="Body Content..."
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/5 flex flex-row gap-4">
                            <button
                                onClick={downloadImage}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest italic h-16 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
                            >
                                <Download size={20} />
                                Export Story
                            </button>
                            <button
                                onClick={() => applyPreset(PRESETS[0])}
                                className="px-6 bg-white/5 hover:bg-white/10 text-white/50 h-16 rounded-2xl flex items-center justify-center transition-all"
                                title="Reset to Default"
                            >
                                <RefreshCcw size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Assets Panel */}
                    <div className="bg-zinc-900 p-8 rounded-[32px] border border-white/10 backdrop-blur-xl flex flex-col gap-6 max-h-[350px]">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                            <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400">
                                <ImageIcon size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black uppercase italic tracking-wider">Shape Library</h2>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Click to add Organic Shapes</p>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Geometry & Gradients</span>
                                <div className="grid grid-cols-3 gap-3">
                                    {SHAPES.map((shape) => (
                                        <button
                                            key={shape.id}
                                            onClick={() => addShape(shape)}
                                            className="aspect-square bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all flex items-center justify-center border border-white/5 hover:border-emerald-500/30 group overflow-hidden"
                                        >
                                            <div className={`${shape.className} w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all`}></div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] uppercase font-black tracking-widest text-zinc-500">Budzinhos (Optional)</span>
                                    <span className="text-[7px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold uppercase tracking-tighter">Recolorable</span>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    {BUDZINHOS.map((bud) => (
                                        <button
                                            key={bud.id}
                                            onClick={() => addBudzinho(bud.src)}
                                            className="aspect-square bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-all flex items-center justify-center border border-white/5 hover:border-emerald-500/30 group"
                                        >
                                            <img src={bud.src} alt="Budzinho" className="w-full h-full object-contain opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" style={{ filter: 'brightness(0) invert(1)' }} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* NEW: Trends & Tips Panel */}
                    <div className="bg-zinc-900 p-8 rounded-[32px] border border-white/10 backdrop-blur-xl flex flex-col gap-6">
                        <div className="flex items-center gap-3 border-b border-white/5 pb-6">
                            <div className="p-3 bg-pink-500/20 rounded-2xl text-pink-400">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black uppercase italic tracking-wider">Social Trends</h2>
                                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Strategies for maximum impact</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { title: 'Neo-Minimalism', desc: 'Use high-contrast type on clean backgrounds to stop the scroll.', icon: <Layout size={14} /> },
                                { title: 'Safe Zone Logic', desc: 'Keep your message in the center. Avoid edges where UI elements live.', icon: <AlignJustify size={14} /> },
                                { title: 'Brand First', desc: 'Logos should be clear but not obstructive. Use our brand palettes.', icon: <Check size={14} /> },
                                { title: 'Visual Rhythm', desc: 'Alternate between busy and quiet layouts for multiple story sequences.', icon: <ArrowLeftRight size={14} /> }
                            ].map((tip, i) => (
                                <div key={i} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all group">
                                    <div className="mt-1 text-emerald-400 group-hover:scale-110 transition-transform">{tip.icon}</div>
                                    <div>
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-zinc-300">{tip.title}</h4>
                                        <p className="text-[10px] text-zinc-500 font-medium leading-relaxed mt-1">{tip.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center gap-6 opacity-30 text-[9px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2"><Layout size={12} /> Snap-to-Grid Active</div>
                <div className="flex items-center gap-2"><Sparkles size={12} /> High-Res DPI Capture</div>
                <div className="flex items-center gap-2"><ArrowLeftRight size={12} /> Smart Safe Areas</div>
            </div>
        </div>
    );
};

export default StoriesPage;
