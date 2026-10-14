import { useI18n } from '@/i18n/I18nContext';

export default function LandingFooter() {
  const { t } = useI18n();

  const footerGroups = [
    { category: t.footer.groupServices, links: t.footer.links.services },
    { category: t.footer.groupIntegrations, links: t.footer.links.integrations },
    { category: t.footer.groupDocs, links: t.footer.links.docs },
    { category: t.footer.groupCompany, links: t.footer.links.company },
  ];

  return (
    <footer
      className="relative border-t py-12 md:py-20 px-4 md:px-8 lg:px-16"
      style={{
        background: '#050B14',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 md:mb-16">
          {/* Brand block */}
          <div className="lg:col-span-1 col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4">
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm"
                style={{ background: '#00E599', color: '#050B14' }}
              >
                OR
              </span>
              <span
                className="font-bold text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span style={{ color: '#00E599' }}>ORCA</span>
              </span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed max-w-[22ch]">
              {t.footer.tagline}
            </p>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <div key={group.category}>
              <h4
                className="text-sm font-semibold text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {group.category}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-xs text-gray-600">
            {t.footer.copyright}
          </p>
          <div className="flex items-center flex-wrap gap-x-6 gap-y-2 justify-center sm:justify-end">
            {[t.footer.privacy, t.footer.terms, t.footer.apiTerms].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
