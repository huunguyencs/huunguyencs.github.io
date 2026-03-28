# QA Bug Report — Nguyen Van Huu Portfolio

**URL:** http://127.0.0.1:5500/
**Date:** 2026-03-28
**Tested on:** Chrome, macOS — Desktop (1440x900) & Mobile (375x812)
**Last verified:** 2026-03-28

---

## ALL BUGS FIXED

| Bug | Issue | Status |
|-----|-------|--------|
| ~~BUG-001~~ | `--text-dim` contrast failure (was 2.14:1) | FIXED — now `#8a8780` = 5.46:1, passes AA |
| ~~BUG-002~~ | `--text-muted` contrast failure (was 4.37:1) | FIXED — now `#908d84` = 5.90:1, passes AA |
| ~~BUG-003~~ | Footer social links missing `aria-label` | FIXED — `aria-label="GitHub"` and `aria-label="LinkedIn"` added |
| ~~BUG-004~~ | Mobile menu lacks keyboard/focus trapping | FIXED — Escape key, focus trapping, `aria-hidden` on `<main>` implemented |
| ~~BUG-005~~ | Logo link missing `aria-label` | FIXED — `aria-label="Home"` added |
| ~~BUG-006~~ | LinkedIn card text inconsistent | FIXED — now shows `linkedin.com/in/van-huu-nguyen` |
| ~~BUG-007~~ | Education card missing "Bachelor's Degree" | FIXED — shows "Bachelor's Degree in Computer Science" + "2018 — 2022" |
| ~~BUG-008~~ | About section too sparse | FIXED — now has 4 details: Location, Focus, Experience, Email |
| ~~BUG-009~~ | Experience entries have no descriptions | FIXED — all 3 roles have descriptions (KiteMetric, EasyGop ×2, TMA Solutions) |
| ~~BUG-010~~ | Hero section has no subtitle | FIXED — "Backend-focused · JavaScript & TypeScript · Cloud Infrastructure" |
| ~~BUG-011~~ | Skills "Tools" row visual orphan | FIXED — `repeat(5, 1fr)` grid, all 5 groups on one row |
| ~~BUG-012~~ | Unused CSS rules from removed content | FIXED — dead selectors removed (minor: `.nav__link--highlight` remains unused) |
| ~~OLD-009~~ | Logo link caused full page reload | FIXED — `href="#home"` with smooth scroll |

---

## Minor note

`.nav__link--highlight` CSS rule (style.css:166-172) has no matching HTML element. Not a bug — may be reserved for future use.

---

## What works well
- Clean, minimal Swiss-inspired design with consistent typography hierarchy
- All contrast ratios pass WCAG AA on all backgrounds
- Full accessibility: footer links, logo, mobile menu keyboard support, focus trapping, Escape key
- Smooth scroll navigation between all anchor sections (including logo → top)
- Active nav link highlighting on scroll works correctly
- Reveal-on-scroll animations fire properly via IntersectionObserver
- Responsive layout adapts cleanly across desktop (1440px) and mobile (375px)
- No JavaScript console errors
- Favicon loads correctly
- Color palette is harmonious — warm accent (#c17f59) against dark backgrounds
- Section padding is consistent (112px/72px desktop/mobile)
- Typography pairing (Instrument Serif + Instrument Sans) is cohesive
- Hover transitions are smooth and consistent (accent borders, translateX, color changes)
- Contact cards are consistent (email, GitHub URL, LinkedIn URL)
- Education card centered with degree type and graduation year
- Skills grid balanced — all 5 groups in a single row
- Experience entries have meaningful descriptions
- Hero has clear subtitle communicating tech focus
