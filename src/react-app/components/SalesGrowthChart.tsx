import { useState, useEffect, type FC } from 'react';

interface DataPoint {
  month: string;
  withoutmybud: number;
  withmybud: number;
}

const SalesGrowthChart: FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const data: DataPoint[] = [
    { month: 'Jan', withoutmybud: 20, withmybud: 25 },
    { month: 'Fev', withoutmybud: 22, withmybud: 35 },
    { month: 'Mar', withoutmybud: 18, withmybud: 45 },
    { month: 'Abr', withoutmybud: 25, withmybud: 60 },
    { month: 'Mai', withoutmybud: 23, withmybud: 75 },
    { month: 'Jun', withoutmybud: 27, withmybud: 85 },
    { month: 'Jul', withoutmybud: 24, withmybud: 95 },
    { month: 'Ago', withoutmybud: 26, withmybud: 110 },
    { month: 'Set', withoutmybud: 29, withmybud: 125 },
    { month: 'Out', withoutmybud: 31, withmybud: 140 },
    { month: 'Nov', withoutmybud: 28, withmybud: 155 },
    { month: 'Dez', withoutmybud: 33, withmybud: 170 }
  ];

  const maxValue = Math.max(...data.map(d => Math.max(d.withoutmybud, d.withmybud)));

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const getHeightPercentage = (value: number, animated: boolean = true) => {
    if (!animated || !isAnimated) return 0;
    return (value / maxValue) * 100;
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-3xl border border-slate-200 shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-2">
          Impacto Real nas Vendas
        </h3>
        <p className="text-slate-600">
          Como marcas crescem com o mybud
        </p>
      </div>

      {/* Chart Container */}
      <div className="relative h-80 bg-white rounded-2xl p-6 border border-slate-100">
        {/* Y-axis labels */}
        <div className="absolute left-2 top-6 bottom-12 flex flex-col justify-between text-xs text-slate-500">
          <span>170k</span>
          <span>120k</span>
          <span>80k</span>
          <span>40k</span>
          <span>0</span>
        </div>

        {/* Chart area */}
        <div className="ml-8 h-full flex items-end justify-between space-x-1 pb-8">
          {data.map((dataPoint, index) => (
            <div key={dataPoint.month} className="flex-1 flex flex-col items-center">
              {/* Bars container */}
              <div className="relative w-full max-w-16 flex justify-center space-x-1 mb-2">
                {/* Without mybud bar */}
                <div className="w-5 bg-slate-200 rounded-t-sm relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 w-full bg-slate-400 rounded-t-sm transition-all duration-1000 ease-out"
                    style={{
                      height: `${getHeightPercentage(dataPoint.withoutmybud)}%`,
                      transitionDelay: `${index * 100}ms`
                    }}
                  />
                </div>
                
                {/* With mybud bar */}
                <div className="w-5 bg-emerald-100 rounded-t-sm relative overflow-hidden">
                  <div 
                    className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-sm transition-all duration-1000 ease-out"
                    style={{
                      height: `${getHeightPercentage(dataPoint.withmybud)}%`,
                      transitionDelay: `${index * 100 + 200}ms`
                    }}
                  />
                </div>
              </div>
              
              {/* Month label */}
              <span className="text-xs text-slate-600 font-medium">
                {dataPoint.month}
              </span>
            </div>
          ))}
        </div>

        {/* Animated growth indicator */}
        <div className={`absolute top-4 right-4 transition-all duration-1000 ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="bg-emerald-500 text-white px-3 py-2 rounded-lg text-sm font-semibold flex items-center space-x-2">
            <svg className="w-4 h-4 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <span>+415% crescimento</span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-8 mt-6">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-slate-400 rounded"></div>
          <span className="text-sm text-slate-600">Sem mybud</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded"></div>
          <span className="text-sm text-slate-600">Com mybud</span>
        </div>
      </div>

      {/* Quarterly highlights */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-700">85%</div>
            <div className="text-sm text-emerald-600">dos clientes voltam a comprar</div>
          </div>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-700">3.2x</div>
            <div className="text-sm text-blue-600">mais engagement médio</div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl">
        <h4 className="text-sm font-semibold text-slate-800 mb-2">Por que funciona:</h4>
        <ul className="space-y-1 text-sm text-slate-600">
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Sua marca aparece no momento certo do cultivo</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>QR codes rastreáveis geram dados de uso</span>
          </li>
          <li className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Relacionamento contínuo pós-venda</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SalesGrowthChart; 