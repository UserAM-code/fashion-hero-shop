"use client";

import { useState } from "react";
import Image from "next/image";

const ORANGE = "#F97316";

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const heroFeatures = [
  { icon: <TrendingUpIcon />, label: "Top pozycja w kategorii" },
  { icon: <EyeIcon />, label: "Więcej wyświetleń kart produktów" },
  { icon: <BarChartIcon />, label: "Raporty w czasie rzeczywistym" },
];

const plans = [
  {
    name: "Starter",
    monthlyPrice: 166,
    yearlyPrice: Math.round(166 * 0.7),
    description: "Dla sklepów stawiających pierwsze kroki w reklamie.",
    features: [
      "1 promowana kategoria",
      "Top 5 w wynikach wyszukiwania",
      "Podstawowe raporty efektywności",
      'Badge "Promowany" na kartach',
      "Wsparcie e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    monthlyPrice: 416,
    yearlyPrice: Math.round(416 * 0.7),
    description: "Dla aktywnych sprzedawców chcących rosnąć szybciej.",
    features: [
      "5 promowanych kategorii",
      "Top 3 w wynikach wyszukiwania",
      "Zaawansowane raporty i analityka",
      'Badge "Promowany" na kartach',
      "Priorytetowe wsparcie czat",
      "Testowanie A/B kreacji",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    monthlyPrice: 833,
    yearlyPrice: Math.round(833 * 0.7),
    description: "Pełna widoczność dla liderów kategorii.",
    features: [
      "Nieograniczone kategorie",
      "Pozycja #1 gwarantowana",
      "Raporty w czasie rzeczywistym",
      "Dedykowany account manager",
      "Własne banery i kreacje",
      "Integracja API raportów",
    ],
    highlighted: false,
  },
];

export default function SellerAdsPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      {/* ── Section 1: Hero ── */}
      <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="inline-block px-3 py-1 text-[11px] font-medium uppercase tracking-[0.8px] rounded-full text-white"
                style={{ backgroundColor: ORANGE }}
              >
                Early Access
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray">
                — limitowane miejsca
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-charcoal leading-tight mb-6">
              Wyróżnij swój sklep<br />
              w katalogu{" "}
              <span style={{ color: ORANGE }}>FashionHero</span>
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-warm-gray leading-relaxed mb-8 max-w-lg">
              Top pozycje w wynikach kategorii, więcej wyświetleń kart produktów
              i raporty efektywności – wszystko w jednym pakiecie dla sprzedawców.
            </p>

            {/* Price */}
            <div className="mb-8">
              <span className="text-[11px] font-medium uppercase tracking-[0.8px] text-warm-gray">od </span>
              <span className="text-4xl md:text-5xl font-semibold" style={{ color: ORANGE }}>
                50 PLN
              </span>
              <span className="text-sm text-warm-gray ml-2">/tydzień</span>
            </div>

            {/* CTA */}
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-charcoal text-white text-[12px] font-medium uppercase tracking-[0.8px] rounded-full hover:opacity-80 transition-opacity duration-200 mb-10"
            >
              Dołącz do Early Access →
            </a>

            {/* 3 feature icons */}
            <div className="flex flex-col sm:flex-row gap-6">
              {heroFeatures.map((f) => (
                <div key={f.label} className="flex items-center gap-2.5 text-charcoal">
                  <span style={{ color: ORANGE }}>{f.icon}</span>
                  <span className="text-[12px] font-medium uppercase tracking-[0.5px]">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product card mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px]">
              {/* Card */}
              <div className="bg-white border border-border rounded-lg overflow-hidden shadow-lg">
                {/* Image area */}
                <div className="relative aspect-square bg-cream">
                  <Image
                    src="/images/products/product-1.jpg"
                    alt="Promowany produkt"
                    fill
                    className="object-cover"
                  />
                  {/* PROMOWANY badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.8px] text-white rounded-sm"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Promowany
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <p className="text-[11px] font-medium uppercase tracking-[0.6px] text-warm-gray mb-1">
                    NaturalStep Studio
                  </p>
                  <p className="text-sm font-medium text-charcoal mb-2">
                    Wool Runner — Buty damskie
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    349 PLN
                  </p>
                </div>
              </div>

              {/* Floating stats chip */}
              <div className="absolute -bottom-4 -right-4 bg-charcoal text-white px-3 py-2 rounded-lg shadow-md">
                <p className="text-[10px] uppercase tracking-[0.6px] text-white/60">Wyświetlenia</p>
                <p className="text-lg font-semibold" style={{ color: ORANGE }}>+128%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: Pricing ── */}
      <section id="pricing" className="px-4 md:px-8 lg:px-16 py-16 md:py-24 bg-cream-light">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight text-charcoal mb-4">
              Wybierz pakiet dla swojego sklepu
            </h2>

            {/* Toggle */}
            <div className="inline-flex items-center gap-3 mt-2">
              <span className={`text-sm font-medium ${!yearly ? "text-charcoal" : "text-warm-gray"}`}>
                Miesięcznie
              </span>
              <button
                onClick={() => setYearly((v) => !v)}
                className="relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none"
                style={{ backgroundColor: yearly ? ORANGE : "#cdcdcd" }}
                aria-label="Toggle billing period"
              >
                <span
                  className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200"
                  style={{ transform: yearly ? "translateX(24px)" : "translateX(0)" }}
                />
              </button>
              <span className={`text-sm font-medium ${yearly ? "text-charcoal" : "text-warm-gray"}`}>
                Rocznie
              </span>
              {yearly && (
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.5px] px-2 py-0.5 rounded-full text-white"
                  style={{ backgroundColor: ORANGE }}
                >
                  -30%
                </span>
              )}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-7 flex flex-col ${
                  plan.highlighted
                    ? "bg-charcoal text-white shadow-xl"
                    : "bg-white border border-border text-charcoal"
                }`}
              >
                {/* Popular badge */}
                {plan.highlighted && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.8px] text-white rounded-full"
                    style={{ backgroundColor: ORANGE }}
                  >
                    Najpopularniejszy
                  </div>
                )}

                {/* Plan name */}
                <p className={`text-[11px] font-medium uppercase tracking-[0.8px] mb-3 ${plan.highlighted ? "text-white/60" : "text-warm-gray"}`}>
                  {plan.name}
                </p>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-3xl font-semibold">
                    {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm ml-1 ${plan.highlighted ? "text-white/60" : "text-warm-gray"}`}>
                    PLN/mies.
                  </span>
                </div>
                {yearly && (
                  <p className={`text-[11px] mb-4 ${plan.highlighted ? "text-white/50" : "text-warm-gray"}`}>
                    rozliczane rocznie
                  </p>
                )}

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-6 ${plan.highlighted ? "text-white/70" : "text-warm-gray"}`}>
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span style={{ color: ORANGE }}>
                        <CheckIcon />
                      </span>
                      <span className={plan.highlighted ? "text-white/80" : "text-charcoal"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#"
                  className={`inline-flex items-center justify-center w-full py-3 text-[12px] font-medium uppercase tracking-[0.8px] rounded-full transition-opacity duration-200 hover:opacity-80 ${
                    plan.highlighted
                      ? "bg-white text-charcoal"
                      : "bg-charcoal text-white"
                  }`}
                >
                  Wybierz {plan.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
