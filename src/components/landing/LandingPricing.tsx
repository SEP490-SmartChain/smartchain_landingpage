import { ADMIN_LOGIN_URL } from '@/config/site';
import { useI18n } from '@/i18n/I18nContext';

export default function LandingPricing() {
  const { t } = useI18n();

  const tiers = [
    {
      ...t.pricing.tiers.starter,
      popular: false,
      color: '#CBD5E1',
      ctaLink: ADMIN_LOGIN_URL,
    },
    {
      ...t.pricing.tiers.growth,
      popular: true,
      color: '#00E599',
      ctaLink: ADMIN_LOGIN_URL,
    },
    {
      ...t.pricing.tiers.enterprise,
      popular: false,
      color: '#00B4FF',
      ctaLink: ADMIN_LOGIN_URL,
    },
  ];

  return (
    <section
      id="pricing"
      className="relative py-28 px-6 sm:px-10 lg:px-16 max-w-[1360px] mx-auto z-20"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-16">
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold text-emerald-400 border border-emerald-500/30"
          style={{ background: 'rgba(2,30,18,0.95)' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t.pricing.badge}</span>
        </div>

        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {t.pricing.heading}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            {t.pricing.headingHighlight}
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-[60ch] leading-relaxed">
          {t.pricing.subheading}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative flex flex-col justify-between p-8 rounded-3xl border transition-transform duration-300 ${
              tier.popular ? 'lg:-translate-y-2' : 'hover:-translate-y-1'
            }`}
            style={{
              background: tier.popular ? 'rgba(5, 15, 28, 0.9)' : 'rgba(5, 11, 20, 0.75)',
              borderColor: tier.popular ? '#00E599' : 'rgba(255, 255, 255, 0.1)',
              boxShadow: tier.popular
                ? '0 0 32px rgba(0, 229, 153, 0.15), 0 12px 32px rgba(0, 0, 0, 0.5)'
                : '0 4px 20px rgba(0, 0, 0, 0.3)',
              contain: 'layout',
            }}
          >
            {tier.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider text-black bg-[#00E599] shadow-lg">
                ★ LỰA CHỌN PHỔ BIẾN NHẤT
              </div>
            )}

            <div>
              {/* Header */}
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                {tier.tag}
              </div>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {tier.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-300/80 mb-6 leading-relaxed">
                {tier.desc}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-1.5 pb-6 border-b border-white/10 mb-6">
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {tier.price}
                </span>
                <span className="text-xs text-slate-400 font-mono">{tier.unit}</span>
              </div>

              {/* Features List */}
              <ul className="flex flex-col gap-3 mb-8">
                {tier.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-300"
                  >
                    <span className="text-emerald-400 shrink-0 mt-0.5">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href={tier.ctaLink}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-opacity duration-200 active:scale-98"
              style={{
                background: tier.popular ? '#00E599' : 'rgba(255, 255, 255, 0.08)',
                color: tier.popular ? '#050B14' : '#ffffff',
                border: tier.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.15)',
                boxShadow: tier.popular ? '0 0 25px rgba(0, 229, 153, 0.4)' : 'none',
              }}
            >
              <span>{tier.cta}</span>
              <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
