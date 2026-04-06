import { useState, type FC, type FormEvent } from 'react';
import { t } from '../lib/i18n';
import { X, CheckCircle2, MoveRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    language: string;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose, language }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        website: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const { error } = await supabase
                .from('industry_leads')
                .insert([{
                    brand_name: formData.company,
                    email: formData.email,
                    contact_name: formData.name,
                    website: formData.website,
                    language: language,
                    created_at: new Date().toISOString()
                }]);

            if (error) throw error;

            setStatus('success');
            setTimeout(() => {
                const CALENDAR_URL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ET0xwuXrN7fWcxlAbExovzk9knxYjbbu13DLw2MwBrgMnyi1HQ51BM50cp717q98-Tf9qdY0c';
                window.open(CALENDAR_URL, '_blank');
                onClose();
                setStatus('idle');
                setFormData({ name: '', company: '', email: '', website: '' });
            }, 2000);
        } catch (err) {
            console.error('Error saving lead:', err);
            setStatus('idle');
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10">
            <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-xl animate-in fade-in duration-500" onClick={onClose} />

            <div className="bg-white rounded-[48px] w-full max-w-xl relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-500">
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-950 bg-zinc-50 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-10 sm:p-16">
                    {status === 'success' ? (
                        <div className="text-center space-y-8 py-10 animate-in fade-in zoom-in-95 duration-500">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-4xl font-black text-zinc-950 lowercase tracking-tight">
                                    {t('industry.finalCta.successTitle') || 'recebido!'}
                                </h3>
                                <p className="text-zinc-500 font-bold lowercase tracking-tight">
                                    {t('industry.finalCta.successSubtext') || 'redirecionando para o calendário...'}
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <h3 className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-[-0.03em] leading-[0.9] lowercase">
                                    {t('industry.finalCta.formTitle') || 'testar com minha marca'}
                                </h3>
                                <p className="text-zinc-500 font-bold lowercase tracking-tight">
                                    {t('industry.finalCta.description')}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-2">Nome</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="seu nome"
                                            value={formData.name}
                                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-emerald-500/50 focus:outline-none font-bold text-zinc-950 placeholder-zinc-300 transition-all shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-2">Empresa</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="nome da marca"
                                            value={formData.company}
                                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-emerald-500/50 focus:outline-none font-bold text-zinc-950 placeholder-zinc-300 transition-all shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-2">Email Profissional</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="email@suaempresa.com"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-emerald-500/50 focus:outline-none font-bold text-zinc-950 placeholder-zinc-300 transition-all shadow-inner"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] px-2">Site / Instagram</label>
                                    <input
                                        type="text"
                                        placeholder="@suamarca ou www.site.com"
                                        value={formData.website}
                                        onChange={e => setFormData({ ...formData, website: e.target.value })}
                                        className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 focus:border-emerald-500/50 focus:outline-none font-bold text-zinc-950 placeholder-zinc-300 transition-all shadow-inner"
                                    />
                                </div>

                                <div className="pt-6">
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full py-5 rounded-3xl bg-emerald-500 text-zinc-950 font-black text-xl hover:bg-emerald-400 shadow-2xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                                    >
                                        {status === 'submitting' ? 'enviando...' : (
                                            <>
                                                Enviar e Agendar Demo
                                                <MoveRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>

                            <div className="pt-8 border-t border-zinc-100 text-center">
                                <p className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{t('industry.experience.result.betaStatus')}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
