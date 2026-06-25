"use client";

import { useState } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const PHONE_DISPLAY = "+91 98728 17001";
const PHONE_TEL = "+919872817001";
const WHATSAPP = "https://wa.me/919872817001";
const ADDRESS_LINE1 = "Luxmi Electric Sales Showroom";
const ADDRESS_LINE2 = "2923, Sector 22C, Sector 22, Chandigarh – 160022";
const ADDRESS_LANDMARK = "Landmark: Opposite JW Marriott";
const MAPS_QUERY = encodeURIComponent(
  "Luxmi Electric Sales Showroom, 2923, Sector 22C, Sector 22, Chandigarh, 160022"
);
const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_DIRECTIONS =
  "https://www.google.com/maps?sca_esv=4dc9a082a571228b&authuser=0&hl=en&gl=in&lsig=AB86z5WVRCInkvePD18_3XkItuNm&um=1&ie=UTF-8&fb=1&sa=X&geocode=KU0C4v2k7Q85MSPW55RDfbPu&daddr=Showroom,+2923,+Sector+22C,+Sector+22,+Chandigarh,+160022";
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps?sca_esv=4dc9a082a571228b&authuser=0&hl=en&gl=in&lsig=AB86z5WVRCInkvePD18_3XkItuNm&um=1&ie=UTF-8&fb=1&sa=X&geocode=KU0C4v2k7Q85MSPW55RDfbPu&daddr=Showroom,+2923,+Sector+22C,+Sector+22,+Chandigarh,+160022";

// ─── Data ─────────────────────────────────────────────────────────────────────

const nav = [
  { label: "About",    href: "#about"    },
  { label: "Products", href: "#products" },
  { label: "Brands",   href: "#brands"   },
  { label: "Reviews",  href: "#reviews"  },
  { label: "FAQ",      href: "#faq"      },
  { label: "Location", href: "#location" },
  { label: "Contact",  href: "#contact"  },
];

const stats = [
  { value: "Since 1978", label: "Trusted in Chandigarh"  },
  { value: "45+ yrs",    label: "Industry experience"    },
  { value: "8+",         label: "Authorized brands"      },
  { value: "1000s",      label: "Happy customers"        },
];

const products = [
  {
    title: "Wires & Cables",
    desc: "Residential, industrial & agricultural wiring — house wires, flexible, armoured & control cables.",
    icon: "M4 7h16M4 12h16M4 17h16",
  },
  {
    title: "Fans",
    desc: "Ceiling, table, pedestal, wall, exhaust and energy-saving BLDC smart fans.",
    icon: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0 M12 10c0-4 4-6 4-2s-4 2-4 2 M12 14c0 4-4 6-4 2s4-2 4-2",
  },
  {
    title: "Lighting Solutions",
    desc: "LED bulbs, downlights, panel lights, battens and smart IoT lighting.",
    icon: "M9 18h6M10 21h4M12 3a6 6 0 0 1 4 10c-.7.7-1 1.5-1 2H9c0-.5-.3-1.3-1-2A6 6 0 0 1 12 3z",
  },
  {
    title: "Switches & Switchgear",
    desc: "Modular switches, MCBs, distribution panels and flameproof switchgear.",
    icon: "M7 4h10v16H7z M12 8v4",
  },
  {
    title: "Motors & Pump Sets",
    desc: "Electric motors, water pump sets and capacitors for home & farm.",
    icon: "M5 9h9v6H5z M14 11h3l2 2 M3 16h13M7 16v2M12 16v2",
  },
  {
    title: "Accessories",
    desc: "Capacitors, cable joint kits, fittings and electrical hardware.",
    icon: "M12 2l3 6 6 .9-4.5 4.2 1 6L12 16l-5.5 3 1-6L3 8.9 9 8z",
  },
];

const brands = [
  { name: "Anchor Panasonic", className: "font-display font-bold tracking-tight",           logo: "/logos/anchor-panasonic.png" },
  { name: "Finolex",          className: "font-display font-extrabold tracking-tighter",    logo: "/logos/finolex.jpg"          },
  { name: "Havells",          className: "font-display font-bold italic tracking-tight",    logo: "/logos/havells.png"          },
  { name: "Polycab",          className: "font-display font-extrabold tracking-tight",      logo: "/logos/polycab.png"          },
  { name: "Wipro",            className: "font-display font-semibold tracking-wide",        logo: "/logos/wipro.png"            },
  { name: "Kuhl",             className: "font-display font-bold tracking-[0.18em] uppercase", logo: "/logos/kuhl.jpeg"         },
  { name: "Sturlite",         className: "font-display font-bold tracking-tight",           logo: "/logos/sturlite.png"         },
  { name: "Diplast",          className: "font-display font-extrabold tracking-tighter uppercase", logo: "/logos/diplast.png"   },
];

const why = [
  { title: "Four Decades of Trust",       desc: "Serving the Tricity since 1978 with a reputation built on honesty and reliability."        },
  { title: "Authorized Distributor",      desc: "Genuine products straight from the brands — no counterfeits, full warranty."               },
  { title: "Everything Under One Roof",   desc: "From a single bulb to full industrial switchgear, all in one showroom."                    },
  { title: "Expert Guidance",             desc: "A knowledgeable team to help homes, contractors and industries choose right."               },
];

const faqs = [
  {
    q: "Where is Luxmi Electric Sales located in Chandigarh?",
    a: "We are at Showroom, SCO 2923, Sector 22C, Sector 22, Chandigarh 160022 — opposite JW Marriott. We serve all of Chandigarh and the Tricity (Mohali, Panchkula, Zirakpur).",
  },
  {
    q: "What are your opening hours?",
    a: "Open Monday to Saturday, 10:00 AM to 7:00 PM. Closed on Sundays.",
  },
  {
    q: "Which electrical brands do you stock?",
    a: "We are an authorized distributor for Anchor by Panasonic, Finolex, Havells, Polycab, Wipro, Kuhl, Sturlite and Diplast — covering wires, cables, fans, lighting, switches and switchgear.",
  },
  {
    q: "Do you supply for industrial and contractor projects?",
    a: "Yes. Alongside home wiring and fittings we supply industrial switchgear, motors, pump sets, armoured cables and bulk orders for contractors and businesses across the Tricity.",
  },
];

const reviews = [
  {
    name: "Mukesh Padha",  initial: "M", rating: 5, when: "2024",
    text: "Good services in all kind of electrical product display at Sec 22 SCO 293 Chandigarh, Luxmi Electrical Sales.",
  },
  {
    name: "Vikas Singh",   initial: "V", rating: 5, when: "9 Jan 2025",
    text: "Excellent store for all electrical products, premium quality at best price. Anchor, Wipro, Havells, Polycab — all major brands available.",
  },
  {
    name: "Nipun Sharma",  initial: "N", rating: 5, when: "31 Jan 2024",
    text: "I was very happy that I was able to get all the lighting products required for my home at one point. Store manager was very helpful in guiding me about my queries. Highly recommended!!",
  },
];

const hours = [
  { day: "Monday",    time: "10:00 AM – 7:00 PM" },
  { day: "Tuesday",   time: "10:00 AM – 7:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
  { day: "Thursday",  time: "10:00 AM – 7:00 PM" },
  { day: "Friday",    time: "10:00 AM – 7:00 PM" },
  { day: "Saturday",  time: "10:00 AM – 7:00 PM" },
  { day: "Sunday",    time: "Closed", closed: true },
];

const todayIndex = (new Date().getDay() + 6) % 7; // 0 = Monday

// ─── Shared components ────────────────────────────────────────────────────────

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className="w-4 h-4"
          fill={i <= rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.9 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ width: size, height: size }} aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1 .7-2.4 1.1-4 1.1-3 0-5.6-2-6.5-4.8h-4v3.1A12 12 0 0 0 12 24z" />
      <path fill="#FBBC05" d="M5.5 14.4a7.2 7.2 0 0 1 0-4.8v-3h-4a12 12 0 0 0 0 10.8z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.5 6.6l4 3.1C6.4 6.8 9 4.8 12 4.8z" />
    </svg>
  );
}

function BrandMark({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group relative flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-900 hover:shadow-[0_12px_30px_-12px_rgba(0,0,0,0.45)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        className="max-h-11 max-w-[80%] object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
      />
      <span className="pointer-events-none absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-zinc-900 transition-all duration-300 group-hover:w-10" />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-display font-semibold text-zinc-900">{q}</span>
        <svg
          viewBox="0 0 24 24"
          className={`w-5 h-5 shrink-0 text-zinc-400 transition-transform duration-300 ${open ? "rotate-45" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}>
        <p className="overflow-hidden text-zinc-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#top" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_luxmielectric-removebg-preview.png" alt="Luxmi Electric Sales" className="h-10 w-auto object-contain" />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white hover:bg-zinc-700 transition-colors"
              >
                Call Now
              </a>
              <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" aria-label="Menu">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-4 flex flex-col gap-1">
              {nav.map((n) => (
                <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="px-2 py-2 text-zinc-600 hover:text-zinc-900">
                  {n.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section id="top" className="relative overflow-hidden bg-zinc-950 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1510568192-5cd6e7a47edd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=2000"
          alt="Minimalist modern home interior with warm pendant lighting"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />
        <span className="absolute bottom-3 right-4 z-10 text-[10px] text-white/40">Photo: Jonathan Stout / Unsplash</span>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-300 animate-fadeup">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Trusted electrical distributor since 1978
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.02] animate-fadeup">
            Powering Homes,<br />Businesses &amp; <span className="text-zinc-500">Industries</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400 animate-fadeup">
            Based in Sector 22, Chandigarh, we're an authorized distributor of wires, cables, fans,
            lighting and switchgear — genuine products from the brands you trust, serving Chandigarh,
            Mohali, Panchkula and Zirakpur.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fadeup">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                <path d="M.06 24l1.68-6.13A11.86 11.86 0 0 1 .14 11.9C.14 5.34 5.48 0 12.04 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24zM6.6 20.13c1.68 1 3.27 1.6 5.43 1.6 5.45 0 9.89-4.43 9.89-9.88a9.85 9.85 0 0 0-9.88-9.89C6.6 1.96 2.16 6.4 2.16 11.85c0 2.27.66 3.97 1.77 5.75l-1 3.63 3.67-1.1zM17.5 14.6c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-b border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-zinc-100">
          {stats.map((s) => (
            <div key={s.label} className="text-center px-4">
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-zinc-900">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">About Us</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Four decades of powering the Tricity
            </h2>
            <p className="mt-5 text-zinc-600 leading-relaxed">
              Since 1978, Luxmi Electric Sales has been a name Chandigarh relies on for quality
              electrical goods. What began as a single counter has grown into a trusted distribution
              house serving homes, contractors, businesses and industries.
            </p>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              With 45+ years of experience and authorized partnerships with India's leading brands,
              we stock everything from house wiring to industrial switchgear — backed by honest
              advice and dependable service.
            </p>
            <a href="#products" className="mt-6 inline-flex items-center gap-2 font-semibold text-zinc-900 hover:gap-3 transition-all">
              Explore our products →
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-zinc-200 p-5 hover:border-zinc-900 transition-colors">
                <div className="font-display text-sm font-bold text-zinc-900">{w.title}</div>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      <section id="products" className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Catalogue</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-zinc-900">Our Products</h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            A complete range of electrical products for every need — residential, commercial,
            industrial and agricultural.
          </p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-6 hover:border-zinc-900 hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.4)] transition-all"
              >
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d={p.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brands ── */}
      <section id="brands" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Authorized Distributor</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-zinc-900">Brands We Deal In</h2>
          <p className="mt-4 text-zinc-600">Genuine products from India's most trusted electrical brands.</p>
        </div>

        {/* Animated marquee */}
        <div className="relative mt-14 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)] marquee-track">
          <div className="flex w-max gap-5 animate-marquee">
            {[...brands, ...brands].map((b, i) => (
              <BrandMark key={`${b.name}-${i}`} name={b.name} logo={b.logo} />
            ))}
          </div>
        </div>

        {/* Static interactive grid */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-2 sm:grid-cols-4 gap-5 justify-items-center">
          {brands.map((b) => (
            <div key={b.name} className="flex justify-center">
              <BrandMark name={b.name} logo={b.logo} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews ── */}
      <section id="reviews" className="py-24 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Testimonials</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold">What Our Customers Say</h2>
              <div className="mt-4 flex items-center gap-3">
                <Stars rating={5} className="text-white" />
                <span className="text-zinc-400 text-sm">5.0 rating · real Google reviews</span>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors self-start"
            >
              <GoogleIcon size={16} />
              See all reviews on Google
            </a>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center w-10 h-10 rounded-full bg-white text-zinc-900 font-display font-bold">
                    {r.initial}
                  </span>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <Stars rating={r.rating} className="text-white" />
                  </div>
                  <div className="ml-auto"><GoogleIcon size={20} /></div>
                </div>
                <p className="mt-4 text-zinc-300 text-sm leading-relaxed">"{r.text}"</p>
                <p className="mt-4 text-xs text-zinc-500">{r.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white border-b border-zinc-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">FAQ</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-zinc-600">
              Everything you need to know about visiting Luxmi Electric Sales in Chandigarh.
            </p>
          </div>
          <div className="mt-10">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ── */}
      <section id="location" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Find Us</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-zinc-900">Visit Our Store</h2>
          <p className="mt-4 text-zinc-600">Come see our full range in person at our Sector 22 showroom.</p>

          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            <div className="space-y-5">

              {/* Address */}
              <div className="rounded-2xl border border-zinc-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-zinc-900 text-white shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-zinc-900">Address</h3>
                    <p className="mt-1 text-zinc-600">{ADDRESS_LINE1}<br />{ADDRESS_LINE2}</p>
                    <p className="mt-1 text-sm text-zinc-400">{ADDRESS_LANDMARK}</p>
                    <a
                      href={MAPS_DIRECTIONS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:gap-2.5 transition-all"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-2xl border border-zinc-200 p-6">
                <div className="flex items-start gap-4">
                  <span className="grid place-items-center w-11 h-11 rounded-xl bg-zinc-900 text-white shrink-0">
                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-zinc-900">Business Hours</h3>
                    <ul className="mt-3 space-y-1.5">
                      {hours.map((h, i) => (
                        <li
                          key={h.day}
                          className={`flex justify-between text-sm ${i === todayIndex ? "font-semibold text-zinc-900" : "text-zinc-500"}`}
                        >
                          <span>
                            {h.day}
                            {i === todayIndex && (
                              <span className="ml-2 text-xs rounded bg-zinc-900 px-1.5 py-0.5 text-white">Today</span>
                            )}
                          </span>
                          <span className={h.closed ? "text-zinc-400" : ""}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-zinc-200 p-6 flex items-center gap-4">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-zinc-900 text-white shrink-0">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display font-semibold text-zinc-900">Call Us</h3>
                  <a href={`tel:${PHONE_TEL}`} className="text-zinc-900 font-semibold hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-zinc-200 min-h-[440px] grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                title="Luxmi Electric Sales location"
                src={MAPS_EMBED}
                className="w-full h-full min-h-[440px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="py-24 bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold">
            Need electrical supplies? Let's talk.
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Whether it's a single fitting or a full project order, our team is ready to help you
            find the right products at the right price.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-black text-zinc-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo_luxmielectric-removebg-preview.png" alt="Luxmi Electric Sales" className="h-12 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="mt-4 text-sm text-zinc-500">
              Powering homes, businesses &amp; industries across Chandigarh and the Tricity since 1978.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-white transition-colors">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Visit Us</h4>
            <p className="mt-4 text-sm text-zinc-500">
              {ADDRESS_LINE1}<br />{ADDRESS_LINE2}<br />{ADDRESS_LANDMARK}
            </p>
            <p className="mt-3 text-sm text-zinc-500">Mon–Sat: 10 AM – 7 PM<br />Sunday: Closed</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm">Get in Touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="hover:text-white transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
              </li>
              <li>
                <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Get directions</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-zinc-600 text-center">
            © {new Date().getFullYear()} Luxmi Electric Sales. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
