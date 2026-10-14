import { useI18n } from '@/i18n/I18nContext';

export default function LandingArchitecture() {
  const { t } = useI18n();

  const layers = [
    {
      step: '01',
      ...t.architecture.layers.step1,
      color: '#00E599',
      tech: ['REST API', 'Google Sheets Hook', 'Idempotency Key'],
    },
    {
      step: '02',
      ...t.architecture.layers.step2,
      color: '#00B4FF',
      tech: ['Inventory Lock', 'FEFO Algorithm', 'Sub-Order Engine'],
    },
    {
      step: '03',
      ...t.architecture.layers.step3,
      color: '#FFB800',
      tech: ['Rule Engine', 'Carrier API', 'Idempotent Retry'],
    },
    {
      step: '04',
      ...t.architecture.layers.step4,
      color: '#00E599',
      tech: ['COD Reconciliation', 'Fee Ledger', 'Export Report'],
    },
  ];

  return (
    <section
      id="architecture"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-[1360px] mx-auto z-20"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-cyan-400 border border-cyan-500/30"
          style={{ background: 'rgba(8,30,45,0.95)' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>{t.architecture.badge}</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {t.architecture.heading}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            {t.architecture.headingHighlight}
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-[60ch] leading-relaxed">
          {t.architecture.subheading}
        </p>
      </div>

      {/* Architecture Flow Pipeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {layers.map((layer) => (
          <div
            key={layer.step}
            className="group relative flex flex-col justify-between p-6 rounded-2xl border transition-transform duration-300 hover:-translate-y-1.5"
            style={{
              background: 'rgba(5, 11, 20, 0.75)',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              contain: 'layout',
            }}
          >
            {/* Top Tag */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-2xl font-mono font-black" style={{ color: layer.color }}>
                  {layer.step}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold border"
                  style={{
                    color: layer.color,
                    borderColor: `${layer.color}40`,
                    background: `${layer.color}15`,
                  }}
                >
                  {layer.badge}
                </span>
              </div>

              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                {layer.tag}
              </div>

              <h3
                className="text-base sm:text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {layer.name}
              </h3>

              <p className="text-xs sm:text-[13px] text-slate-300/80 leading-relaxed font-normal">
                {layer.desc}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-6 border-t border-white/10 mt-6">
              {layer.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[9.5px] font-mono text-slate-300 bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
