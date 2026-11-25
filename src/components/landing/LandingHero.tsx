export default function LandingHero() {
  return (
    <section
      id="overview"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-20 overflow-x-clip pt-24 pb-16 sm:pt-32 sm:pb-24 sc-grid-bg"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 0%, var(--sc-primary-alpha-12) 0%, transparent 75%)',
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left on desktop, first on mobile: Value proposition & actions */}
          <div className="lg:col-span-6">
            <h1
              id="hero-heading"
              className="text-balance text-3xl font-extrabold tracking-[-0.03em] text-[var(--sc-text-primary)] sm:text-5xl lg:text-[50px] lg:leading-[1.12]"
              style={{ fontFamily: 'var(--sc-font-display)' }}
            >
              Bạn chốt đơn. <span className="text-[var(--sc-primary)]">ORCA lo việc kho.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--sc-text-secondary)] sm:text-lg">
              ORCA nhận hàng, lưu kho, đóng gói và bàn giao cho hãng vận chuyển. Bạn xem được hàng
              còn trong kho, kiện đã giao và tiền thu hộ theo từng đơn.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--sc-primary)] px-6 py-3.5 text-base font-semibold text-[var(--sc-on-primary)] shadow-[0_8px_20px_rgb(15_118_110/22%)] transition-all hover:bg-[var(--sc-primary-hover)] active:scale-[0.98]"
              >
                <span>Xem các gói dịch vụ</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--sc-border-strong)] bg-[var(--sc-bg-surface)] px-5 py-3.5 text-base font-semibold text-[var(--sc-text-primary)] shadow-[var(--sc-shadow-button)] transition-colors hover:bg-[var(--sc-bg-secondary)]"
              >
                <span>Xem quy trình kho 3D</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* Right on desktop, second on mobile: Close-up packing illustration */}
          <div className="lg:col-span-6">
            <figure className="sc-surface-elevated overflow-hidden p-4 sm:p-6">
              <div className="overflow-hidden rounded-xl border border-[var(--sc-border-default)] bg-[var(--sc-bg-secondary)]">
                <svg
                  viewBox="0 0 600 410"
                  role="img"
                  aria-labelledby="packing-illustration-title"
                  className="block h-auto w-full"
                >
                  <title id="packing-illustration-title">
                    Minh họa cận cảnh hai bàn tay đang đóng gói một đơn hàng và dán nhãn vận đơn
                  </title>
                  <defs>
                    <linearGradient
                      id="benchSurface"
                      x1="0"
                      y1="0"
                      x2="600"
                      y2="410"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#0f293a" />
                      <stop offset="100%" stopColor="#091826" />
                    </linearGradient>
                    <linearGradient
                      id="boxBody"
                      x1="170"
                      y1="120"
                      x2="430"
                      y2="330"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#e2b47d" />
                      <stop offset="100%" stopColor="#c59057" />
                    </linearGradient>
                    <linearGradient
                      id="boxSide"
                      x1="170"
                      y1="220"
                      x2="430"
                      y2="345"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#b88249" />
                      <stop offset="100%" stopColor="#9c6a36" />
                    </linearGradient>
                    <linearGradient
                      id="boxFlapLeft"
                      x1="135"
                      y1="115"
                      x2="295"
                      y2="235"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#ecc391" />
                      <stop offset="100%" stopColor="#d29f66" />
                    </linearGradient>
                    <linearGradient
                      id="boxFlapRight"
                      x1="300"
                      y1="115"
                      x2="465"
                      y2="235"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0%" stopColor="#e6bb87" />
                      <stop offset="100%" stopColor="#ca955c" />
                    </linearGradient>
                    <linearGradient id="sleeveTeal" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0f766e" />
                      <stop offset="100%" stopColor="#115e59" />
                    </linearGradient>
                    <linearGradient id="handSkin" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#f5cba7" />
                      <stop offset="100%" stopColor="#e0ac82" />
                    </linearGradient>
                  </defs>

                  {/* Packing station mat */}
                  <rect width="600" height="410" fill="url(#benchSurface)" />
                  <g stroke="#2dd4bf" strokeOpacity="0.1" strokeWidth="1">
                    <path d="M40 50H560M40 110H560M40 170H560M40 230H560M40 290H560M40 350H560" />
                    <path d="M80 30V380M160 30V380M240 30V380M320 30V380M400 30V380M480 30V380M540 30V380" />
                  </g>
                  <rect
                    x="28"
                    y="24"
                    width="544"
                    height="362"
                    rx="14"
                    fill="none"
                    stroke="#2dd4bf"
                    strokeOpacity="0.22"
                    strokeDasharray="6 6"
                  />

                  {/* Soft shadow beneath carton */}
                  <ellipse cx="305" cy="322" rx="165" ry="34" fill="#020810" fillOpacity="0.55" />

                  {/* Tape dispenser & scanner on packing station */}
                  <g transform="translate(468, 72)">
                    <rect
                      x="0"
                      y="0"
                      width="76"
                      height="46"
                      rx="10"
                      fill="#132f44"
                      stroke="#2dd4bf"
                      strokeOpacity="0.35"
                    />
                    <circle
                      cx="26"
                      cy="23"
                      r="13"
                      fill="#091826"
                      stroke="#5eead4"
                      strokeWidth="4"
                      strokeOpacity="0.7"
                    />
                    <rect
                      x="46"
                      y="15"
                      width="20"
                      height="16"
                      rx="3"
                      fill="#2dd4bf"
                      fillOpacity="0.25"
                    />
                  </g>

                  {/* Shipping carton base & front wall */}
                  <polygon points="168,175 300,126 434,175 300,228" fill="#8b5c2e" />
                  {/* Inner protective cushioning & neatly packed items */}
                  <rect
                    x="228"
                    y="150"
                    width="74"
                    height="50"
                    rx="6"
                    transform="rotate(-14 228 150)"
                    fill="#d1fae5"
                    stroke="#0f766e"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="306"
                    y="146"
                    width="66"
                    height="46"
                    rx="6"
                    transform="rotate(12 306 146)"
                    fill="#ccfbf1"
                    stroke="#0f766e"
                    strokeWidth="1.5"
                  />

                  {/* Carton left & right visible walls */}
                  <polygon points="168,175 300,228 300,326 168,270" fill="url(#boxBody)" />
                  <polygon points="434,175 300,228 300,326 434,270" fill="url(#boxSide)" />

                  {/* Folded top flaps closing over the order */}
                  <polygon
                    points="168,175 300,228 286,184 156,136"
                    fill="url(#boxFlapLeft)"
                    stroke="#9c6a36"
                    strokeWidth="1"
                  />
                  <polygon
                    points="434,175 300,228 314,184 446,136"
                    fill="url(#boxFlapRight)"
                    stroke="#8b5c2e"
                    strokeWidth="1"
                  />

                  {/* Center ORCA sealing tape strip */}
                  <polygon
                    points="222,150 378,208 364,220 208,162"
                    fill="#0f766e"
                    fillOpacity="0.92"
                  />
                  <line
                    x1="218"
                    y1="156"
                    x2="370"
                    y2="214"
                    stroke="#99f6e4"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />

                  {/* Shipping label on front-left carton face */}
                  <g transform="matrix(0.93, 0.37, 0, 1, 198, 214)">
                    <rect x="0" y="0" width="76" height="54" rx="5" fill="#ffffff" />
                    <rect x="6" y="6" width="28" height="7" rx="2" fill="#0f766e" />
                    <rect x="6" y="18" width="54" height="4" rx="1.5" fill="#94a3b8" />
                    <rect x="6" y="25" width="42" height="4" rx="1.5" fill="#cbd5e1" />
                    {/* Barcode bars */}
                    <g fill="#0f172a" transform="translate(6, 34)">
                      <rect x="0" y="0" width="3" height="13" />
                      <rect x="5" y="0" width="1.5" height="13" />
                      <rect x="9" y="0" width="4" height="13" />
                      <rect x="15" y="0" width="2" height="13" />
                      <rect x="19" y="0" width="3.5" height="13" />
                      <rect x="25" y="0" width="1.5" height="13" />
                      <rect x="29" y="0" width="4" height="13" />
                      <rect x="36" y="0" width="2" height="13" />
                      <rect x="40" y="0" width="3" height="13" />
                      <rect x="46" y="0" width="1.5" height="13" />
                      <rect x="50" y="0" width="4" height="13" />
                      <rect x="57" y="0" width="2.5" height="13" />
                    </g>
                  </g>

                  {/* Left hand steadying carton flap */}
                  <g>
                    <path d="M42 92 L138 134 L118 176 L26 138 Z" fill="url(#sleeveTeal)" />
                    <path
                      d="M132 132 C158 140, 188 152, 198 166 C204 174, 196 184, 184 182 L154 174 C160 183, 166 194, 158 201 C150 207, 136 198, 124 186 L114 174 Z"
                      fill="url(#handSkin)"
                    />
                  </g>

                  {/* Right hand smoothing sealing tape onto carton */}
                  <g>
                    <path d="M566 106 L464 152 L484 194 L582 152 Z" fill="url(#sleeveTeal)" />
                    <path
                      d="M470 150 C442 158, 404 174, 386 190 C378 198, 384 208, 396 206 L428 196 C422 206, 418 216, 427 222 C436 227, 452 214, 466 200 L486 192 Z"
                      fill="url(#handSkin)"
                    />
                  </g>

                  {/* Subtle status pill inside illustration corner */}
                  <g transform="translate(46, 336)">
                    <rect
                      x="0"
                      y="0"
                      width="196"
                      height="32"
                      rx="16"
                      fill="#071322"
                      fillOpacity="0.88"
                      stroke="#2dd4bf"
                      strokeOpacity="0.4"
                    />
                    <circle cx="18" cy="16" r="5" fill="#10b981" />
                    <text
                      x="32"
                      y="20"
                      fill="#e2e8f0"
                      fontSize="12"
                      fontWeight="600"
                      fontFamily="Inter, system-ui, sans-serif"
                    >
                      Đóng gói &amp; dán mã vận đơn
                    </text>
                  </g>
                </svg>
              </div>

              <figcaption className="mt-3 text-center text-xs font-medium text-[var(--sc-text-tertiary)] sm:text-sm">
                Minh họa quy trình đóng gói
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
