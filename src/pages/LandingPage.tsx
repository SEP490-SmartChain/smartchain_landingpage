import { useEffect, useState } from 'react';

import LandingCTA from '@/components/landing/LandingCTA';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingHero from '@/components/landing/LandingHero';
import LandingNav from '@/components/landing/LandingNav';
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
