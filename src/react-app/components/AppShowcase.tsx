import { useState, type FC } from 'react';
import { t, isB2B } from '../lib/i18n';

interface IPhoneFeatureMockupProps {
	featureType: 'dashboard' | 'voice' | 'alerts' | 'qr';
	isB2B?: boolean;
}

const IPhoneFeatureMockup: FC<IPhoneFeatureMockupProps> = ({ featureType, isB2B = false }) => {
	// Abstract, conceptual demo screens (no real screenshots)
	const ConceptualFrame: FC<{ title: string; subtitle: string; bullets: string[] }> = ({ title, subtitle, bullets }) => (
		<div className="pt-8 h-full">
			<div className="p-3">
				<div className="text-center mb-3">
					<h2 className="text-emerald-700 text-sm font-semibold mb-1">{title}</h2>
					<p className="text-emerald-600 text-xs">{subtitle}</p>
				</div>
				<div className="space-y-2">
					{bullets.map((b, idx) => (
						<div key={idx} className="flex items-center space-x-2 bg-emerald-50 p-2 rounded-lg border border-emerald-200">
							<span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
							<p className="text-emerald-800 text-xs">{b}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);

	const getB2CFeatureContent = () => {
		switch (featureType) {
			case 'dashboard':
				return (
					<ConceptualFrame 
						title="Tarefas recorrentes com lembrete" 
						subtitle="Configure tarefas que se repetem automaticamente"
						bullets={[
							'Regue as plantas às 8h',
							'Nutrição NPK - Semana 4',
							'Checagem geral - 3x/semana'
						]}
					/>
				);
			case 'voice':
				return (
					<ConceptualFrame 
						title="Registro de voz, texto, foto ou vídeo" 
						subtitle="Registre do seu jeito: fale, escreva, fotografe"
						bullets={[
							'"Planta 2 está amarelando"',
							'Foto: Primeira flor aparecendo',
							'Vídeo: Desenvolvimento semana 6'
						]}
					/>
				);
			case 'alerts':
				return (
					<ConceptualFrame 
						title="Acompanhamento detalhado por planta" 
						subtitle="Monitore o desenvolvimento individual"
						bullets={[
							'Planta A: 45 dias de vida',
							'Planta B: 12 dias de floração',
							'Próxima rega: em 2 dias'
						]}
					/>
				);
			case 'qr':
				return (
					<ConceptualFrame 
						title="QR Code por planta" 
						subtitle="Aponte a câmera e reconheça sua planta"
						bullets={[
							'QR #001: Sour Diesel Auto',
							'QR #002: White Widow Fem',
							'Acesso direto ao histórico'
						]}
					/>
				);
		}
	};

	const getB2BFeatureContent = () => {
		switch (featureType) {
			case 'dashboard':
				return (
					<ConceptualFrame 
						title={t('appShowcase.dashboard.title')} 
						subtitle={t('appShowcase.dashboard.desc')}
						bullets={[
							'Catálogo vivo no app',
							'Genéticas atualizadas',
							'Sua marca dentro do cultivo'
						]}
					/>
				);
			case 'voice':
				return (
					<ConceptualFrame 
						title={t('appShowcase.voice.title')} 
						subtitle={t('appShowcase.voice.desc')}
						bullets={[
							'Apareça na hora da irrigação',
							'Tarefas por fase ou problema',
							'Do rótulo (QR) para o uso'
						]}
					/>
				);
			case 'alerts':
				return (
					<ConceptualFrame 
						title={t('appShowcase.alerts.title')} 
						subtitle={t('appShowcase.alerts.desc')}
						bullets={[
							'Seu hardware, nossa interface',
							'Leituras em tempo real',
							'Integrações Tuya/Sonoff'
						]}
					/>
				);
			case 'qr':
				return (
					<ConceptualFrame 
						title={t('appShowcase.qr.title')} 
						subtitle={t('appShowcase.qr.desc')}
						bullets={[
							'Revenda com utilidade real',
							'Onboarding + pós-venda',
							'Foco em conversão, não banner'
						]}
					/>
				);
		}
	};

	const getFeatureContent = () => {
		return isB2B ? getB2BFeatureContent() : getB2CFeatureContent();
	};

	return (
		<div className="relative w-full max-w-[280px] mx-auto">
			{/* iPhone Frame */}
			<div
				className="iphone-frame relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl"
				style={{
					boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), inset 0 2px 6px rgba(255, 255, 255, 0.1)'
				}}
			>
				{/* Dynamic Island */}
				<div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

				{/* Screen Container */}
				<div className="relative bg-black w-full aspect-[9/19.5] overflow-hidden rounded-[2.5rem] shadow-inner">
					<div className="absolute inset-0 bg-white">
						{/* Status Bar */}
						<div className="absolute top-0 left-0 right-0 h-8 bg-white z-10 flex items-center justify-between px-3 text-black text-xs font-medium">
							<span>9:41</span>
							<div className="flex space-x-1 items-center">
								<div className="flex space-x-1">
									<div className="w-1 h-1 bg-black rounded-full"></div>
									<div className="w-1 h-1 bg-black rounded-full"></div>
									<div className="w-1 h-1 bg-black rounded-full"></div>
									<div className="w-1 h-1 bg-gray-400 rounded-full"></div>
								</div>
								<svg className="w-5 h-3" viewBox="0 0 24 12" fill="none">
									<rect width="20" height="8" x="1" y="2" fill="none" stroke="black" strokeWidth="1" rx="2"/>
									<rect width="2" height="4" x="21" y="4" fill="black" rx="1"/>
									<rect width="16" height="4" x="2" y="4" fill="black" rx="1"/>
								</svg>
							</div>
						</div>

						{/* Conceptual Content */}
						{getFeatureContent()}

						{/* Home Indicator */}
						<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white bg-opacity-40 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

interface AppShowcaseProps {
	background?: 'white' | 'gray';
}

const AppShowcase: FC<AppShowcaseProps> = ({ background = 'white' }) => {
	// Detect B2B context by checking namespace
	const isB2BContext = isB2B();
	
	// Reordered by priority per CEO: seeds/breeders, inputs, distributors, sensors (clear value)
	const [activeFeature, setActiveFeature] = useState<'dashboard' | 'voice' | 'alerts' | 'qr'>('dashboard');

	const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

	const features = [
		{ 
			id: 'dashboard' as const, 
			titleKey: 'appShowcase.dashboard.title', 
			descKey: 'appShowcase.dashboard.desc',
			icon: 'M3 5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25V9H3V5.25zM3 10.5h8.25V21H5.25A2.25 2.25 0 013 18.75V10.5zM12.75 10.5H21v8.25A2.25 2.25 0 0118.75 21h-6V10.5z'
		},
		{ 
			id: 'voice' as const, 
			titleKey: 'appShowcase.voice.title', 
			descKey: 'appShowcase.voice.desc',
			icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25M9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25M16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
		},
		{ 
			id: 'qr' as const, 
			titleKey: 'appShowcase.qr.title', 
			descKey: 'appShowcase.qr.desc',
			icon: 'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.874 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.442 1.509 1.333 1.509 2.316V18'
		},
		{ 
			id: 'alerts' as const, 
			titleKey: 'appShowcase.alerts.title', 
			descKey: 'appShowcase.alerts.desc',
			icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z'
		},
	];

	return (
		<section className={`py-24 ${bgClass} organic-background`}>
			<div className="container mx-auto px-6 max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-medium mb-6 text-gray-800">
						{t('appShowcase.title')}
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						{t('appShowcase.subtitle')}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-16">
					{/* Conceptual iPhone Demo */}
					<div className="lg:w-1/2">
						<IPhoneFeatureMockup featureType={activeFeature} isB2B={isB2BContext} />
					</div>

					{/* Feature Buttons */}
					<div className="lg:w-1/2 space-y-4">
						{features.map((feature) => (
							<div 
								key={feature.id}
								className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
									activeFeature === feature.id 
										? 'border-emerald-400 bg-emerald-50' 
										: 'border-gray-200 bg-white hover:border-emerald-200 hover:bg-emerald-25'
								}`}
								onClick={() => setActiveFeature(feature.id)}
							>
								<div className="flex items-start space-x-4">
									<div
										className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
											activeFeature === feature.id 
												? 'bg-emerald-200' 
												: 'bg-emerald-100'
										}`}
									>
										<svg
											className="w-6 h-6 text-emerald-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											strokeWidth="1.5"
										>
											<path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
										</svg>
									</div>
									<div>
										<h3 className={`text-lg font-semibold mb-2 ${
											activeFeature === feature.id ? 'text-emerald-800' : 'text-gray-800'
										}`}> 
											{t(feature.titleKey)}
										</h3>
										<p className={`text-sm leading-relaxed ${
											activeFeature === feature.id ? 'text-emerald-700' : 'text-gray-600'
										}`}>
											{t(feature.descKey)}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppShowcase;