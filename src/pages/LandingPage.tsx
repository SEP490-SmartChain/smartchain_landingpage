import { useEffect, useState } from 'react';

import LandingArchitecture from '@/components/landing/LandingArchitecture';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHero from '@/components/landing/LandingHero';
import LandingNav from '@/components/landing/LandingNav';
import LandingPortals from '@/components/landing/LandingPortals';
import LandingPricing from '@/components/landing/LandingPricing';
import LandingStories from '@/components/landing/LandingStories';

const THEME_STORAGE_KEY = 'orca-landing-theme';

export default function LandingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return saved === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <main className="relative min-h-screen w-full max-w-full bg-[var(--sc-bg-primary)] text-[var(--sc-text-primary)]">
      {/* Top Console-aligned Navigation */}
      <LandingNav theme={theme} onToggleTheme={handleToggleTheme} />

      {/* 1. Hero & Interactive Live Console Preview */}
      <LandingHero />

      {/* 2. 3 Portals & 7 Roles Interactive Explorer */}
      <LandingPortals />

      {/* 3. 3D Multi-Warehouse Digital Twin & 5-Step Fulfillment Journey */}
      <LandingStories theme={theme} />

      {/* 4. Deep-Dive Business Capabilities Bento (LOT_BIN, Recall, Simulator, Returns, Finance) */}
      <LandingFeatures />

      {/* 5. System Architecture & PostgreSQL RLS Isolation */}
      <LandingArchitecture />

      {/* 6. Commercial Plans (Basic, Standard, Enterprise) & Service Tariffs */}
      <LandingPricing />

      {/* 7. Call to Action */}
      <LandingCTA />

      {/* 8. Footer */}
      <LandingFooter />
    </main>
  );
}
