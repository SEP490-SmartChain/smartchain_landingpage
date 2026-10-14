import type { Translations } from '../types';

export const en: Translations = {
  nav: {
    stories: 'Problems & Solutions',
    features: 'Features',
    architecture: 'Pipeline',
    pricing: 'Pricing',
    login: 'Workspace Login',
  },
  hero: {
    systemBadge: 'INTELLIGENT MULTI-WAREHOUSE LOGISTICS ORCHESTRATION',
    exploreTitle: 'Explore the ORCA Network',
    exploreHint: 'Scroll or click directly on the 4 nodes & Central Core to explore',
    startTour: 'Start Interactive Tour',
    coreLabel: '⚡ ORCA Core',
    stops: {
      global: {
        tag: 'SYSTEM OVERVIEW',
        title: 'Tri-Region Multi-Warehouse Fulfillment Network',
        subtitle: 'Multi-node synchronization · Automated routing',
        description: '',
        nodeBadge: '3 HUBS · HANOI · DA NANG · HCMC',
        stats: [],
        hudPills: [],
        cta: '',
      },
      pain1: {
        tag: 'PAIN POINT 01 · SLOW DELIVERY',
        title: 'Stock in One Place, Buyers Across Three Regions',
        subtitle: 'Inter-region delivery 3–5 days · 125 packing hours/month',
        description:
          'A shop in Da Nang ships dried foods to buyers in Hanoi and HCMC. Each 1 kg parcel costs 35,000 VND and takes 3–5 days. Packing goods every night without barcode scanning results in delayed delivery and frequent pick-pack errors.',
        nodeBadge: '⚠️ SLOW DELIVERY & MANUAL PACKING',
        stats: [
          { value: '3–5 days', label: 'Inter-region' },
          { value: '35,000₫', label: '1 kg parcel' },
          { value: '125 hrs', label: 'Packing/mo' },
        ],
        hudPills: [
          { icon: '📦', text: 'Stock in one place means two other regions face distant, costly shipping' },
          { icon: '⏰', text: 'Manual packing without barcode scanning causes mis-picks and omissions' },
        ],
        cta: 'ORCA delivers 1–4 days faster',
      },
      pain2: {
        tag: 'PAIN POINT 02 · EXPIRING GOODS',
        title: 'Perishable Goods Scrapped Without Batch Tracking',
        subtitle: 'New batches sold first · Old batches expire on shelves',
        description:
          'Sellers without batch tracking inadvertently sell newest stock first while older stock expires on shelves. Specialty foods, rice, and coffee with short shelf-lives get scrapped at huge financial loss. Shipped batches cannot be traced for recalls.',
        nodeBadge: '⚠️ EXPIRED INVENTORY & UNTRACEABLE',
        stats: [
          { value: 'Waste', label: 'Scrapped stock' },
          { value: '???', label: 'Untracked batches' },
          { value: 'Capital loss', label: 'No recall capability' },
        ],
        hudPills: [
          { icon: '🗓️', text: 'No batch tracking — cannot trace which batch was sent to which customer' },
          { icon: '🛢️', text: 'Discarded expired inventory is a direct financial loss for sellers' },
        ],
        cta: 'ORCA dispatches near-expiry batches first',
      },
      sol1: {
        tag: 'SOLUTION 01 · HUB & BATCH SELECTION',
        title: 'ORCA Selects Nearest Hub & Dispatches by Expiry',
        subtitle: 'FEFO — Near-expiry batches first · Multi-hub auto order split',
        description:
          'ORCA automatically routes orders to the warehouse nearest the buyer and dispatches batches with earliest expiration dates (FEFO). If a hub lacks inventory, it auto-splits into up to 3 parcels across hubs with 0 VND COD discrepancy. Expired or recalled lots are never dispatched.',
        nodeBadge: '⚡ OPTIMIZED HUB & BATCH DISPATCH',
        stats: [
          { value: 'FEFO', label: 'Proper batch dispatch' },
          { value: '≤3 parcels', label: 'Multi-hub split' },
          { value: '0₫', label: 'COD discrepancy' },
        ],
        hudPills: [
          { icon: '⚡', text: 'Near-expiry batches dispatched first — minimizing shelf spoilage waste' },
          { icon: '🔀', text: 'Auto order split & exact COD allocation across sub-orders' },
        ],
        cta: 'Learn more about hub routing',
      },
      sol2: {
        tag: 'SOLUTION 02 · AUTOMATIC CARRIER ALLOCATION',
        title: 'ORCA Selects Carriers & Auto-Failovers on Outages',
        subtitle: 'Pre-integrated with GHN, GHTK, Viettel Post, J&T',
        description:
          'Carrier rules are set by ORCA coordinators. During sale season carrier downtime, ORCA automatically switches to fallback carriers without creating duplicate waybills. All shipments are created under ORCA master carrier accounts—sellers need no individual carrier contracts.',
        nodeBadge: '🔗 AUTOMATIC CARRIER FAILOVER',
        stats: [
          { value: 'Automatic', label: 'Failover on outage' },
          { value: '4+', label: 'Integrated carriers' },
          { value: '0', label: 'Duplicate waybills' },
        ],
        hudPills: [
          { icon: '💰', text: 'Sellers do not need individual carrier accounts with GHN, GHTK or Viettel Post' },
          { icon: '🔗', text: 'Instant failover during carrier API outages — zero order backlog' },
        ],
        cta: 'View Rule Engine specs',
      },
      core: {
        tag: 'FOCUS · FULFILLMENT ORCHESTRATION HUB',
        title: 'ORCA: Logistics Co-pilot for Online Sellers',
        subtitle: '1–4 days faster delivery · Zero expiry loss · Clear COD reconciliation',
        description:
          'The entire logistics chain converged on ORCA. Sellers simply create inbound receipts and track — ORCA handles bin putaway, barcode-scanned pick & pack, parcel photography, weekly COD reconciliation, and bank payout.',
        nodeBadge: '⚡ ORCA — LOGISTICS CORE',
        stats: [
          { value: '99.99%', label: 'Order accuracy' },
          { value: '30s', label: 'Reconciliation speed' },
          { value: '1M+ Rows', label: 'Data processing' },
        ],
        hudPills: [
          { icon: '🎯', text: 'FEFO batch dispatch — reduces waste, warehouse-level low-stock alerts' },
          { icon: '📊', text: 'Inventory, orders, COD statements — exportable by period for tax filing' },
        ],
        cta: 'Get Started with ORCA',
      },
    },
    nodes: {
      pain1: {
        name: 'Stock in One Place, Buyers in 3 Regions',
        shortLabel: 'Distant & Slow',
      },
      pain2: {
        name: 'Perishables Scrapped Due to No Batches',
        shortLabel: 'Expired Stock',
      },
      sol1: {
        name: 'Nearest Hub & FEFO Lot Dispatch',
        shortLabel: 'Hub & FEFO Lots',
      },
      sol2: {
        name: 'Auto Carrier Allocation & Failover',
        shortLabel: 'Carrier Failover',
      },
    },
  },
  features: {
    heading: 'Architecture engineered for',
    headingHighlight: 'high-velocity online sellers.',
    subheading:
      'Every capability is built to eliminate real operational headaches of multi-channel merchants in Vietnam — slow shipping, inventory expiry, and COD discrepancies.',
    items: {
      f1: {
        title: 'Nearest Hub & FEFO Batch Allocation',
        desc: 'Intelligent algorithms choose the closest warehouse to buyers and pick batches nearest their expiry date — preventing spoilage. Expired or quarantined inventory is locked from dispatch.',
        tag: null,
      },
      f2: {
        title: 'Real-time 3PL Rate Shopping',
        desc: 'Compare rates across GHN, GHTK, Viettel Post, and J&T in real time. Pre-configured rule engines auto-switch carriers on API downtime — no backlogged orders.',
        tag: '4+ Integrated carriers',
      },
      f3: {
        title: 'Automated Multi-Hub Order Splitting',
        desc: 'When a single warehouse lacks sufficient stock, ORCA seamlessly splits orders into up to 3 parcels across warehouses with exact COD allocation.',
        tag: 'Max 3 parcels / order',
      },
      f4: {
        title: 'Weekly Automated COD Reconciliation',
        desc: 'Every week, the platform reconciles carrier cash-on-delivery payments, deducts freight and fulfillment fees exactly once, and generates transparent payout statements.',
        tag: 'Weekly payouts',
      },
    },
  },
  architecture: {
    badge: 'ORCA OPERATIONAL PIPELINE',
    heading: 'From Inbound Order to',
    headingHighlight: 'Doorstep Delivery',
    subheading:
      'ORCA orchestrates the entire lifecycle — from order capture to COD payout in seller bank accounts. Sellers relax, ORCA handles fulfillment.',
    layers: {
      step1: {
        name: 'Order Ingestion & Verification',
        tag: 'ORDER CAPTURE',
        desc: 'Sync orders via automatic webhooks, Google Sheets, manual creation, or CSV uploads. High-risk COD orders are held for seller phone confirmation before release.',
        badge: 'Multi-channel',
      },
      step2: {
        name: 'Hub Selection & FEFO Dispatch',
        tag: 'INTELLIGENT ROUTING',
        desc: 'Automatically chooses the nearest warehouse and dispatches lots with earliest expiration dates (FEFO). Auto-splits up to 3 parcels when needed. Locks expired lots.',
        badge: 'FEFO Expiry',
      },
      step3: {
        name: 'Carrier Allocation & Waybills',
        tag: 'SHIPPING ASSIGNMENT',
        desc: 'Carrier rules set by ORCA coordinators across GHN, GHTK, Viettel Post, J&T. Auto-failover on downtime without duplicate waybills, using platform master accounts.',
        badge: 'Auto failover',
      },
      step4: {
        name: 'COD Settlement & Payout',
        tag: 'FINANCE & REPORTING',
        desc: 'Weekly COD reconciliation with carriers, single-instance fee deductions, and automated payout generation. Full transparency with downloadable tax statements.',
        badge: 'Weekly',
      },
    },
  },
  pricing: {
    badge: 'TRANSPARENT PRICING · NO HIDDEN FEES',
    heading: 'Transparent Pricing,',
    headingHighlight: 'Zero Hidden Fees',
    subheading:
      'Scale flexibly with actual order volume. Sellers break even when ~60% of shipments cross regions — operational peace of mind starts in month one.',
    tiers: {
      starter: {
        name: 'Starter Plan',
        tag: 'FOR GROWING MERCHANTS',
        price: '4,000,000',
        unit: 'VND / month',
        desc: 'Single hub, automated carrier selection, and weekly COD reconciliation.',
        features: [
          'Up to 700 orders / month',
          'Access 1 hub (choice of 3 regions)',
          'Auto carrier selection: GHN, GHTK, Viettel Post',
          'Weekly COD reconciliation',
          'Barcode scanning at dispatch',
          'Email & Ticket support',
        ],
        cta: 'Start Free Trial',
      },
      growth: {
        name: 'Standard Plan',
        tag: 'MOST POPULAR · 3 REGIONS',
        price: '12,000,000',
        unit: 'VND / month',
        desc: 'Tri-region multi-hub fulfillment, FEFO batching, auto order splitting, and replenishment advice.',
        features: [
          'Up to 1,500 orders / month',
          'All 3 hubs: Hanoi, Da Nang, HCMC',
          'FEFO near-expiry lot dispatch',
          'Auto order splitting for low stock',
          'Stock allocation advice based on velocity',
          'Low stock & near-expiry alerts',
          '24/7 Hotline & Zalo support',
        ],
        cta: 'Get Started with Standard',
      },
      enterprise: {
        name: 'Enterprise Plan',
        tag: 'LARGE SCALE & CUSTOM',
        price: 'Custom',
        unit: 'tailored scale',
        desc: 'Custom warehouse count, volume SLAs, dedicated routing rules, and NDA agreements.',
        features: [
          'Unlimited orders / month',
          'Custom warehouse network expansion',
          'Contractual custom routing rules',
          'Custom ERP & internal API integration',
          'Custom credit limits & deposit terms',
          'Dedicated Account Manager',
          'Enterprise Data Security SLA',
        ],
        cta: 'Contact Sales',
      },
    },
  },
  cta: {
    headingLine1: 'Ready to delegate fulfillment',
    headingLine2: 'to ORCA?',
    subheading:
      'Join modern online merchants delivering 1–4 days faster with ORCA — zero stuck shipments, zero COD discrepancies, zero shelf expiry waste.',
    button: 'Get Started with ORCA',
    secondary: 'View Pricing Plans',
  },
  footer: {
    tagline: 'SaaS platform helping online merchants deliver faster, eliminate expired inventory, and achieve transparent COD reconciliation.',
    groupServices: 'Services',
    groupIntegrations: 'Integrations',
    groupDocs: 'Documentation',
    groupCompany: 'Company',
    copyright: '© 2026 ORCA · SEP490 SE_34 · FPT University Da Nang',
    links: {
      services: ['Hub & Lot Selection', 'Rate Shopping', 'Order Splitting', 'COD Settlement', 'Returns Management'],
      integrations: ['GHN API', 'GHTK API', 'Viettel Post', 'J&T Express', 'Google Sheets'],
      docs: ['Merchant Guide', 'API Documentation', 'Changelog'],
      company: ['About ORCA', 'Contact Us'],
    },
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    apiTerms: 'API Terms',
  },
};
