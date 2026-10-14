export type Language = 'vi' | 'en';

export interface SpatialStopTranslation {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  nodeBadge: string;
  stats: { value: string; label: string }[];
  hudPills: { icon: string; text: string }[];
  cta: string;
}

export interface NodeDataTranslation {
  name: string;
  shortLabel: string;
}

export interface FeatureTranslation {
  title: string;
  desc: string;
  tag: string | null;
}

export interface ArchLayerTranslation {
  name: string;
  tag: string;
  desc: string;
  badge: string;
}

export interface PricingTierTranslation {
  name: string;
  tag: string;
  price: string;
  unit: string;
  desc: string;
  features: string[];
  cta: string;
}

export interface Translations {
  nav: {
    stories: string;
    features: string;
    architecture: string;
    pricing: string;
    login: string;
  };
  hero: {
    systemBadge: string;
    exploreTitle: string;
    exploreHint: string;
    startTour: string;
    coreLabel: string;
    stops: {
      global: SpatialStopTranslation;
      pain1: SpatialStopTranslation;
      pain2: SpatialStopTranslation;
      sol1: SpatialStopTranslation;
      sol2: SpatialStopTranslation;
      core: SpatialStopTranslation;
    };
    nodes: {
      pain1: NodeDataTranslation;
      pain2: NodeDataTranslation;
      sol1: NodeDataTranslation;
      sol2: NodeDataTranslation;
    };
  };
  features: {
    heading: string;
    headingHighlight: string;
    subheading: string;
    items: {
      f1: FeatureTranslation;
      f2: FeatureTranslation;
      f3: FeatureTranslation;
      f4: FeatureTranslation;
    };
  };
  architecture: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subheading: string;
    layers: {
      step1: ArchLayerTranslation;
      step2: ArchLayerTranslation;
      step3: ArchLayerTranslation;
      step4: ArchLayerTranslation;
    };
  };
  pricing: {
    badge: string;
    heading: string;
    headingHighlight: string;
    subheading: string;
    tiers: {
      starter: PricingTierTranslation;
      growth: PricingTierTranslation;
      enterprise: PricingTierTranslation;
    };
  };
  cta: {
    headingLine1: string;
    headingLine2: string;
    subheading: string;
    button: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    groupServices: string;
    groupIntegrations: string;
    groupDocs: string;
    groupCompany: string;
    copyright: string;
    links: {
      services: string[];
      integrations: string[];
      docs: string[];
      company: string[];
    };
    privacy: string;
    terms: string;
    apiTerms: string;
  };
}
