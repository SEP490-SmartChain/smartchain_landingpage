import { useEffect, useState } from 'react';

import LandingCTA from '@/components/landing/LandingCTA';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHero from '@/components/landing/LandingHero';
import LandingNav from '@/components/landing/LandingNav';
import LandingPricing from '@/components/landing/LandingPricing';
import LandingStories from '@/components/landing/LandingStories';

const THEME_STORAGE_KEY = 'orca-champagne-theme';

export default function LandingPage() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem(THEME_STORAGE_KEY);
    return saved === 'light' ? 'light' : 'dark';
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
    <main className="relative min-h-[100dvh] w-full max-w-full bg-[var(--sc-bg-primary)] text-[var(--sc-text-primary)]">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-[var(--sc-btn-bg)] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-[var(--sc-btn-text)]"
      >
        Chuyển tới nội dung chính
      </a>

      <LandingNav theme={theme} onToggleTheme={handleToggleTheme} />

      <LandingHero />

      <LandingStories theme={theme} />

      <LandingFeatures />

      <LandingPricing />

      <LandingCTA />

      <LandingFooter />
    </main>
  );
}
