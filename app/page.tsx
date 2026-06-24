// ─── Constants ───────────────────────────────────────────────────────────────

const PHONE = "+91 82839 90421";
const PHONE_HREF = "tel:+918283990421";
const WHATSAPP_HREF = "https://wa.me/918283990421";
const DIRECTIONS_HREF = "https://maps.google.com/?q=SCO+2923+Sector+22C+Chandigarh+160022";
const REVIEWS_HREF = "https://www.google.com/maps/search/Luxmi+Electric+Sales+Chandigarh";
const MAPS_EMBED =
  "https://maps.google.com/maps?q=Luxmi+Electric+Sales+SCO+2923+Sector+22C+Chandigarh&output=embed";

const BRAND = "#f5b731";
const DARK = "#0f172a";

// ─── Inline SVG Icons ────────────────────────────────────────────────────────

function BoltIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M13 2L3.5 13.5H11L10 22L20.5 10.5H13L13 2Z" />
    </svg>
  );
}

function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.95 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.88 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.91 5.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.574 2.81.7a2 2 0 0 1 1.72 2.02z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.81L2.05 22l5.4-1.41c1.38.75 2.95 1.17 4.6 1.17h.04c5.46 0 9.91-4.45 9.91-9.91A9.9 9.9 0 0 0 12.04 2zm0 18.16c-1.5 0-2.96-.4-4.23-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.27 8.27 0 0 1-1.27-4.4c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.25-8.2 8.25zm4.52-6.17c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-.12-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.43H8.07c-.14 0-.38.05-.58.25-.2.2-.77.75-.77 1.82s.79 2.11.9 2.26c.11.14 1.56 2.38 3.78 3.34.53.23.94.36 1.26.46.53.17 1.01.15 1.39.09.42-.06 1.3-.53 1.49-1.05.19-.51.19-.95.13-1.05-.06-.1-.23-.16-.48-.28z" />
    </svg>
  );
}

function MapPinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12,6 12,12 16,14" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarFilled({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={BRAND} aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

// Product-card icons
function CableIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="8" x2="21" y2="8" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="16" x2="21" y2="16" />
    </svg>
  );
}

function FanIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C12 2 14.5 5.5 14.5 8.5C14.5 10.2 13.4 11.7 12 12" />
      <path d="M12 12C10.6 12 9.5 10.2 9.5 8.5C9.5 5.5 12 2 12 2" />
      <path d="M22 12C22 12 18.5 14.5 15.5 14.5C13.8 14.5 12.3 13.4 12 12" />
      <path d="M12 12C12 10.6 13.8 9.5 15.5 9.5C18.5 9.5 22 12 22 12" />
      <path d="M12 22C12 22 9.5 18.5 9.5 15.5C9.5 13.8 10.6 12.3 12 12" />
      <path d="M12 12C13.4 12 14.5 13.8 14.5 15.5C14.5 18.5 12 22 12 22" />
      <path d="M2 12C2 12 5.5 9.5 8.5 9.5C10.2 9.5 11.7 10.6 12 12" />
      <path d="M12 12C12 13.4 10.2 14.5 8.5 14.5C5.5 14.5 2 12 2 12" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="9" y1="21" x2="15" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17H8v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="8" width="20" height="8" rx="4" />
      <circle cx="16" cy="12" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MotorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="7" width="14" height="10" rx="2" />
      <path d="M16 9l6 3-6 3" />
      <circle cx="9" cy="12" r="2.5" />
    </svg>
  );
}

function StarOutlineIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

// ─── Components ──────────────────────────────────────────────────────────────

function Navbar() {
  const navLinks = ["About", "Products", "Brands", "Reviews", "Location", "Contact"];
  return (
    <nav style={{ backgroundColor: DARK }} className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 flex-shrink-0">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: BRAND }}
          >
            <BoltIcon />
          </div>
          <span className="font-bold text-lg text-white">
            Luxmi Electric{" "}
            <span style={{ color: BRAND }}>Sales</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-white transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={PHONE_HREF}
          className="hidden md:flex items-center gap-2 font-semibold px-5 py-2.5 rounded-full text-sm transition-opacity hover:opacity-90"
          style={{ backgroundColor: BRAND, color: DARK }}
        >
          <PhoneIcon size={14} />
          Call Now
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="hero" style={{ backgroundColor: DARK }} className="text-white pt-[68px]">
      <div className="max-w-7xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm text-gray-300 border border-gray-700">
            Trusted electrical distributor since 1978
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
            Powering Homes,
            <br />
            Businesses &amp;{" "}
            <span style={{ color: BRAND }}>Industries</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
            Chandigarh's authorized distributor for wires, cables, fans, lighting and
            switchgear — genuine products from Anchor Panasonic, Havells, Polycab &amp;
            Wipro, all under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-base transition-opacity hover:opacity-90"
              style={{ backgroundColor: BRAND, color: DARK }}
            >
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-base border border-gray-600 text-white hover:border-gray-400 transition-colors"
            >
              <WhatsAppIcon size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: "Since 1978", label: "Trusted in Chandigarh" },
    { value: "45+ yrs", label: "Industry experience" },
    { value: "4+", label: "Authorized brand tie-ups" },
    { value: "1000s", label: "Homes & businesses served" },
  ];
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-3xl font-black text-gray-900 mb-1">{s.value}</div>
            <div className="text-sm text-gray-500">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  const features = [
    {
      title: "Four Decades of Trust",
      desc: "Serving the Tricity since 1978 with a reputation built on honesty and reliability.",
    },
    {
      title: "Authorized Distributor",
      desc: "Genuine products straight from Anchor Panasonic, Wipro, Havells and Polycab.",
    },
    {
      title: "Complete Range",
      desc: "From a single bulb to full industrial switchgear — everything under one roof.",
    },
    {
      title: "Expert Guidance",
      desc: "Knowledgeable team to help homes, contractors and industries pick the right product.",
    },
  ];
  return (
    <section id="about" className="bg-white py-24 scroll-mt-[68px]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl font-black text-gray-900 mb-6">About Luxmi Electric Sales</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Since 1978, Luxmi Electric Sales has been a name Chandigarh and the Tricity
            rely on for quality electrical goods. What began as a single counter has grown
            into a trusted distribution house serving homes, contractors, businesses and
            industries.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            With 45+ years of experience and authorized partnerships with India's leading
            brands, we stock everything from house wiring to industrial switchgear — backed
            by honest advice and dependable service.
          </p>
          <a
            href="#products"
            className="font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Explore our products →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {features.map((f) => (
            <div key={f.title} className="border border-gray-100 rounded-xl p-5">
              <div className="font-semibold text-sm mb-2" style={{ color: BRAND }}>
                {f.title}
              </div>
              <div className="text-sm text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      icon: <CableIcon />,
      title: "Wires & Cables",
      desc: "Residential, industrial & agricultural wiring — house wires, flexible cables, armoured & control cables.",
    },
    {
      icon: <FanIcon />,
      title: "Fans",
      desc: "Ceiling, table, pedestal, wall, exhaust and energy-saving BLDC smart fans.",
    },
    {
      icon: <BulbIcon />,
      title: "Lighting Solutions",
      desc: "LED bulbs, downlights, panel lights, battens and smart IoT lighting.",
    },
    {
      icon: <SwitchIcon />,
      title: "Switches & Switchgear",
      desc: "Modular switches, MCBs, distribution panels and flameproof switchgear.",
    },
    {
      icon: <MotorIcon />,
      title: "Motors & Pump Sets",
      desc: "Electric motors, water pump sets and capacitors for home & farm.",
    },
    {
      icon: <StarOutlineIcon />,
      title: "Accessories",
      desc: "Capacitors, cable joint kits, fittings and electrical hardware.",
    },
  ];
  return (
    <section id="products" className="py-24 scroll-mt-[68px]" style={{ backgroundColor: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Our Products</h2>
          <p className="text-gray-500 text-lg max-w-xl">
            A complete range of electrical products for every need — residential, commercial,
            industrial and agricultural.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {products.map((p) => (
            <div key={p.title} className="bg-white border border-gray-100 rounded-xl p-6">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#fef3c7", color: BRAND }}
              >
                {p.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandsSection() {
  const brands = ["Anchor Panasonic", "Wipro Lighting", "Havells", "Polycab"];
  return (
    <section id="brands" className="bg-white py-24 scroll-mt-[68px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Brands We Deal In</h2>
          <p className="text-gray-500">
            Authorized distributor of India's most trusted electrical brands.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {brands.map((b) => (
            <div
              key={b}
              className="border border-gray-100 rounded-xl py-10 flex items-center justify-center text-center font-bold text-gray-800 text-sm"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Rohit Sharma",
      initials: "R",
      quote:
        "Been buying from Luxmi for years. Genuine Havells and Polycab stock, fair prices and great advice on wiring for my new home.",
    },
    {
      name: "Anita Verma",
      initials: "A",
      quote:
        "Helpful, knowledgeable staff. They guided me to the right BLDC fans and LED lights. Highly recommended in Sector 22.",
    },
    {
      name: "Gurpreet Singh",
      initials: "G",
      quote:
        "Our go-to electrical distributor for site work. Wide range of switchgear and cables, and always in stock.",
    },
  ];
  return (
    <section id="reviews" style={{ backgroundColor: DARK }} className="text-white py-24 scroll-mt-[68px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-6">
          <h2 className="text-4xl font-black">What Our Customers Say</h2>
          <a
            href={REVIEWS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:border-gray-400 transition-colors"
          >
            <GoogleLogo />
            See all reviews on Google
          </a>
        </div>
        <div className="flex items-center gap-1.5 mb-12">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarFilled key={i} size={18} />
          ))}
          <span className="ml-2 text-gray-400 text-sm">Rated by customers across the Tricity</span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl p-6" style={{ backgroundColor: "#162032" }}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{ backgroundColor: BRAND, color: DARK }}
                >
                  {r.initials}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{r.name}</div>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarFilled key={i} size={12} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">"{r.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const hours = [
    { day: "Monday", time: "10:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { day: "Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "10:00 AM – 7:00 PM" },
    { day: "Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];
  return (
    <section id="location" className="bg-white py-24 scroll-mt-[68px]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black text-gray-900 mb-3">Visit Our Store</h2>
        <p className="text-gray-500 mb-12">
          Come see our full range in person at our Sector 22 showroom.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="border border-gray-100 rounded-xl p-6 flex gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#fef3c7", color: BRAND }}
              >
                <MapPinIcon size={18} />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Address</div>
                <div className="text-gray-700 text-sm leading-relaxed">
                  SCO 2923, Sector 22C
                  <br />
                  Chandigarh – 160022
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Landmark: Opposite JW Marriott
                </div>
                <a
                  href={DIRECTIONS_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold mt-2 inline-block transition-opacity hover:opacity-75"
                  style={{ color: BRAND }}
                >
                  Get directions →
                </a>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 flex gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#fef3c7", color: BRAND }}
              >
                <ClockIcon size={18} />
              </div>
              <div className="w-full">
                <div className="font-bold text-gray-900 mb-3">Business Hours</div>
                <div className="flex flex-col gap-1.5">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className={h.day === "Sunday" ? "text-gray-400" : "text-gray-800"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-gray-100 rounded-xl p-6 flex gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#fef3c7", color: BRAND }}
              >
                <PhoneIcon size={18} />
              </div>
              <div>
                <div className="font-bold text-gray-900 mb-1">Call Us</div>
                <a
                  href={PHONE_HREF}
                  className="font-semibold transition-opacity hover:opacity-75"
                  style={{ color: BRAND }}
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-100 min-h-[400px] relative">
            <a
              href={DIRECTIONS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              Open in Maps ↗
            </a>
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxmi Electric Sales location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="contact" style={{ backgroundColor: BRAND }} className="py-20 scroll-mt-[68px]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Need electrical supplies? Let's talk.
        </h2>
        <p className="text-gray-700 text-lg mb-10 max-w-xl mx-auto">
          Whether it's a single fitting or a full project order, our team is ready to help you
          find the right products at the right price.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: DARK }}
          >
            Call {PHONE}
          </a>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold bg-white text-gray-900 hover:bg-gray-50 transition-colors"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const quickLinks = ["About", "Products", "Brands", "Reviews", "Location", "Contact"];
  return (
    <footer style={{ backgroundColor: DARK }} className="text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: BRAND }}
              >
                <BoltIcon />
              </div>
              <span className="font-bold text-white text-base">Luxmi Electric Sales</span>
            </a>
            <p className="text-sm leading-relaxed">
              Powering homes, businesses &amp; industries across Chandigarh and the Tricity
              since 1978.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm">Quick Links</div>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm">Visit Us</div>
            <p className="text-sm leading-relaxed mb-3">
              SCO 2923, Sector 22C
              <br />
              Chandigarh – 160022
            </p>
            <p className="text-sm">Mon–Sat: 10 AM – 7 PM</p>
            <p className="text-sm">Sunday: Closed</p>
          </div>

          {/* Get in Touch */}
          <div>
            <div className="font-semibold text-white mb-4 text-sm">Get in Touch</div>
            <div className="flex flex-col gap-2.5">
              <a href={PHONE_HREF} className="text-sm hover:text-white transition-colors">
                {PHONE}
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                WhatsApp
              </a>
              <a
                href={DIRECTIONS_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-white transition-colors"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © 2026 Luxmi Electric Sales. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ProductsSection />
      <BrandsSection />
      <ReviewsSection />
      <LocationSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
