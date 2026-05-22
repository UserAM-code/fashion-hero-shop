# FashionHero — Project Context dla Claude

## Czym jest FashionHero
Marketplace modowy w Polsce. 2.4 mln kupujących, 4 200 sprzedawców, ~300K zamówień/mies, AOV ~200 PLN, obrót ~60 mln PLN/mies. Wzrost +28% YoY, marża spada (24% → 18%). Return rate 38%. 100% przychodu z prowizji transakcyjnej.

**Agata** = PM odpowiedzialna za stronę przychodową (nowe źródła przychodu, poprawa marży, dywersyfikacja). Strona kosztowa (zwroty) = Konrad.

## Kluczowe osoby
- **Maja** — CEO, współzałożycielka. Wizjonerka, ale czasem skacze do rozwiązań zanim zrozumie problem. Priorytety: (1) poprawa marży zanim kolejna runda, (2) drugi silnik przychodu poza prowizją, (3) retencja kupujących. **Jej język:** "2 tygodnie które oszczędzą nam 3 miesiące Marka."
- **Ola** — Head of Marketplace, chce więcej sprzedawców (cel: 200/mies z paid campaigns 80K PLN/mies).
- **Ela** — Data Scientist, często ma rację ale bywa ignorowana. Zadaje trudne pytania o unit economics.
- **Konrad** — PM, pracuje nad zwrotami. Oparty na danych, PostHog dashboard.
- **Marek** — Engineering Manager, na każdy problem ma rozwiązanie techniczne.
- **Tomek** — Head of Support. Z danych Q4 2025: pytania o produkty (materiał, wymiary) rosną najszybciej.

## Aktualny cel przychodowy
**911K PLN MRR** z nowych źródeł. Profit Dashboard solo daje max ~381K (41.9% celu).

## Aktualny koncept: Seller Profit Dashboard

### Decyzja: Seller Ads → KILL
Jedyna persona chcąca płacić za widoczność to Kamil (GMV 1.5K PLN) — segment podatny na Forte 0%.

### Pivot: Seller Profit Dashboard
- **S1 — Trendy popytu** (Bartek: śledził Vinted/IG bo platforma nic nie dawała) → Basic FREE
- **S2 — Benchmark cenowy** (Dorota: ~5h/tyg. na ręczne śledzenie cen w Excelu) → Pro 499 PLN/mies.
- **S3 — Rentowność netto per produkt** (CSV: 4.7% sellerów ma ujemną marżę i nie wie) → Premium 999 PLN/mies.

| Tier | Cena | Co zawiera |
|---|---|---|
| Basic | FREE | S1: top wyszukiwania FashionHero |
| Pro | 499 PLN/mies. | Basic + S2: benchmark cenowy |
| Premium | 999 PLN/mies. | Pro + S3: rentowność netto per produkt |

Scenariusze: 20% adopcji → 253K MRR | 30% adopcji → 381K MRR

## Quest 4.3 — A/B Test Design

Feature flag: profit_dashboard_entrypoint_test
- Eligible: GMV ≥10K PLN last_90_days AND status == active
- Email: seller_id % 2 → A (mock panel) lub B (direct cennik)
- Baner: zawsze direct + acquisition_channel: "banner"

Success criteria:
- GO: CTR ≥8% i Pro+Premium ≥50% i Bartek-tier ≥30%
- ITERATE: CTR 5–8%
- KILL: CTR <5% w obu wariantach

## Piramida Strategiczna (stan 2026-05-22)
Misja ✅ Wizja ✅ NSM ✅ Strategia ✅ OKRy Q2/Q3/Q4 2026 ✅ Roadmapa ✅ (13 inicjatyw, 3 kills)
NSM baseline = ~3 730 rentownych sellerów. Cel: +10% = ≥4 103 do Q4 2026.

## Quest L5.2 — Pitch Deck (deadline 07.06.2026)
Template L5.2: 17 slajdów. GOTOWY — wszystkie slajdy zweryfikowane 2026-05-22.
Formularz Baserow: https://baserow.io/form/EAJt3Mf0meUx0wTSSvc4LGDmLqsoPdvTR6IV0VicfRk

## Segmenty kupujących (Q4 2025)
- Pracujące modne (~35%) — 27-38 lat, AOV 220-280 PLN, trzon platformy
- Łowczynie okazji (~25%) — cenowrażliwe, AOV 120-160 PLN, dużo zwrotów
- Premium (~15%) — rzadziej ale drożej (350-500 PLN), mało zwrotów
- Młode trend-driven (~10%) — 18-26 lat, impulsywnie

NPS: Q4/2025 +18. 72% ruchu z mobile, konwersja mobile 40% niższa niż desktop.

## Kontekst rynkowy
- Forte — główne zagrożenie: ten sam model, aktywnie podbiera sprzedawców
- Zalando — benchmark (100 dni na zwrot, 200+ recenzji)
- Etsy — benchmark SaaS: 0% → 27% services revenue w 5 latach
- Poshmark — przestroga: zmiana modelu → dwucyfrowy spadek sprzedaży w 3 tygodnie

## Kluczowe pliki projektu
- docs/quest_4_3_ab_test_design.md — pełny A/B Test Design
- docs/seller_economics.csv — próbka 500 sellerów

## Narzędzia
- QuestLog: https://questlog.aiproductheroes.pl/
- FashionHero demo: https://fashionhero.aiproductheroes.pl/
- OST Miro: https://miro.com/app/board/uXjVHX_CarA=/
- Stakeholder Mirror: https://stakeholder-mirror.lovable.app
