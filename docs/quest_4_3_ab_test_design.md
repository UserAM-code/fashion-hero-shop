# Quest 4.3 — A/B Test Design: Seller Profit Dashboard

**Data:** 2026-05-17
**Koncept:** Seller Profit Dashboard (pivot z Seller Ads po Forte shock)
**Test type:** Smoke test (demand validation) + A/B test (entry point)

---

## HIPOTEZA

Format Wojtka (Rezultat / Interwencja / Walidacja / Cel):

Jeśli seller zobaczy ofertę Profit Dashboard w kontekście swojego panelu sprzedażowego (a nie jako samodzielny landing page), to kliknie "Chcę dostęp" częściej, bo kontekst własnych danych sprawia że ból jest konkretny i natychmiastowy — seller nie musi sobie wyobrażać problemu, widzi go na ekranie.

Hipoteza nadrzędna (smoke test):

Jeśli zaoferuję wszystkim aktywnym sellerom (≥10K PLN GMV, ~3 100 osób) bezpłatny dostęp do trendów popytu i płatny dostęp do benchmarku cenowego i rentowności netto, to ≥8% z tych którzy zobaczą landing page wyrazi intent zakupowy (kliknie CTA), bo brak tych danych był wymieniany przez nich wprost jako aktywny ból w wywiadach.

---

## METRYKI

### Primary metric

CTR na intent = kliknięcia CTA "Chcę dostęp" / unikalni sellerzy którzy zobaczyli stronę

Cel: ≥8%

Uzasadnienie progu: CTR liczę od page views, nie od wysłanych emaili ani wyświetleń banera. Przy dwóch kanałach (email + baner in-app) szacuję ~400–550 łącznych page views — ≥8% z nich to ≥32–44 deklaracji, wystarczające do walidacji sentymentu i pitcha do Mai.

### Secondary metrics

| Metryka | Cel | Co mówi, gdy nie spełniony |
|---|---|---|
| Pro + Premium łącznie wśród zapisanych | ≥50% | Demand jest, WTP nie ma → piwot na freemium-only |
| Bartek-tier (GMV ≥20K) wśród zapisanych | ≥30% | Value prop nie trafia do najcenniejszego segmentu |
| Checkbox distribution (S1/S2/S3) | Lider musi być wyraźny | Sygnał co budować pierwsze |
| Variant A vs B CTR (email) | Różnica ≥8pp | Decyzja o entry point w becie |
| Email vs baner CTR | Który kanał lepszy | Decyzja o kanale w becie |

---

## KANAŁY I DOTARCIE

### Kanał 1: Email

Wysyłka do ~3 100 aktywnych sellerów (GMV ≥10K).
Podział A/B: ~1 550 per wariant (stratyfikowany 52% Bartek-tier / 48% mid-tier).

- Wariant A: email → mock panel sellera (kontekst danych) → cennik
- Wariant B: email → bezpośrednio cennik

Szacowane dotarcie: open rate ~25–30% × click-to-open ~20–25% = ~155–215 page views.

Best practice: personalizuję treść danymi sellera z CSV — konkretna kategoria + wzrost MoM.

### Kanał 2: Baner in-app

Baner wyświetlany w panelu sellera wszystkim eligible sellerom przez cały test.
Zawsze prowadzi do cennika (Wariant B / direct).

Szacowane dotarcie: ~70% eligible loguje się w 2 tygodnie = ~2 170 wyświetleń. CTR 5–10% → ~108–217 page views.

Łącznie: ~263–430 page views.

---

## SAMPLE I MATEMATYKA MOCY

Łączna szacowana próba: ~400–550 page views.

Na komponent A/B (email Wariant A vs B): ~77–107 per wariant.
Przy tej próbie wykryję różnicę ≥8pp z 80% pewnością (nie 4pp — przy małej próbie próg wykrywalności rośnie).

---

## ZACHĘTY I BEST PRACTICES

### Zachęty za wzięcie udziału

- Founding member pricing: pierwsze 50 osób → 20% zniżki na Pro/Premium przez 6 miesięcy
- Wpływ na produkt: follow-up calle + decyzja o priorytetach funkcji (S1 vs S2 vs S3)
- Founding Seller badge: widoczny w profilu sprzedawcy w marketplace

Zachęty ogłaszam PO kliknięciu CTA, nie przed — żeby nie przyciągać łowców okazji.

### Transparentność po kliknięciu

Po kliknięciu CTA seller widzi jasny komunikat że produkt jest w budowie. Klik pomaga zdecydować czy i jak szybko go zbudować. Transparentność zwiększa jakość follow-up engagement.

### Exit survey

Dla 5% losowych non-clickers: 1 pytanie "Co powstrzymało cię od zapisania się?"

---

## CZAS

Minimum 2 tygodnie. Nie wysyłam email remindera — zaburzyłoby proporcje A/B. Baner in-app jest naturalnym reminderem.

---

## FEATURE FLAG

Nazwa: `profit_dashboard_entrypoint_test`

```
IF kanał == "email" AND seller_id % 2 == 0
  → Variant A: mock panel (panel_context_v1)

IF kanał == "email" AND seller_id % 2 == 1
  → Variant B: direct landing page (direct_pricing_v1)

IF kanał == "banner"
  → direct landing page + acquisition_channel: "banner"

Eligible:
  seller GMV last_90_days ≥ 10 000 PLN
  AND seller_status == "active"
```

PostHog: dashboard_variant (A/B) + acquisition_channel (email/banner) na każdym pageview i cta_click.

---

## SUCCESS CRITERIA — zdefiniowane PRZED zobaczeniem danych

| Scenariusz | Warunek | Decyzja |
|---|---|---|
| GO | CTR ≥8% i Pro+Premium ≥50% i Bartek-tier ≥30% | Buduję Betę, idę do Mai z liczbami |
| GO z zastrzeżeniem | CTR ≥8%, ale Pro+Premium <50% | Piwot na freemium-only, retest monetyzacji |
| ITERATE | CTR 5–8% | Zmieniam messaging, nie architekturę |
| KILL | CTR <5% w obu wariantach i obu kanałach | Wracam do OST |
| A/B winner | Jeden wariant bije drugi o ≥8pp | Ten entry point do bety |
| A/B remis | Różnica <8pp | Wybieram tańszy technicznie |
| Baner wygrywa | CTR banera > CTR emaila | In-app jako primary channel w becie |

Dodatkowe zabezpieczenie: Nawet przy CTR ≥8% — jeśli w follow-up call 3+ sellerów mówi "zapisałem się żeby zobaczyć co to jest, ale nie zapłaciłbym" — traktuję to jako false positive. Klik ≠ WTP.
