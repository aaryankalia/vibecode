# vibecode
Build me a personal portfolio website using the following design system and content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Primary color: Blue Obsidian (#12233E) with shades: #080F1C (darkest), #0D1729, #1C3357, #2B4A78 (lightest). Use for hero backgrounds, cards, and dark sections.

Secondary color: White scale — #FFFFFF, #F8F7F4 (page bg), #F0EFE9, #E5E5E0. Use for body sections and text on dark.

Accent: #4A8FE8 (electric blue) for labels, glows, and active states.

Rule of 8: ALL spacing, font sizes, border radius, and gaps must be exact multiples of 8. Font scale: 8, 16, 24, 32, 40, 48, 64px. Spacing scale: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128px. Radii: 8, 16, 24, 32px. Exception: CTA radius is 4px.

Fonts: DM Serif Display (display/hero text), Geist (UI body, weights 300/400/500/600), DM Mono (labels, code, metadata).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BUTTONS / CTAs
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

All CTAs are white fill with obsidian text on dark backgrounds. Obsidian fill with white text on light backgrounds. Border-radius: 4px fixed. Horizontal padding: 16px. Vertical padding: 7px (small), 11px (medium), 15px (large). Font: Geist 500. Hover: opacity 0.88 + translateY(-1px) at 180ms.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LAYOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Responsive from 1440px desktop to 375px mobile. Max content width 1200px centered. Desktop horizontal padding 80px, mobile 24px. Aesthetic: minimalistic system design inspired by Notion, Linear, and Framer. Clean, tool-grade, no decorative elements.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVIGATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bottom sticky floating pill navigation bar (NOT a top nav). White background, backdrop-blur, 1px border, box-shadow: 0 4px 24px rgba(0,0,0,0.10), 16px border-radius. Icons expand to icon + label on hover with spring animation (200ms). Items in order: Home, About, Work, Contact, [divider], Search. Search opens a modal on Cmd+K. Active item has obsidian-dark fill with white icon and label. On mobile: icons only, equal spacing, full width.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — HERO / LANDING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full-viewport Blue Obsidian dark background (#080F1C to #12233E radial gradient). Subtle noise texture overlay at 3% opacity for depth. Content is left-anchored.

Name: Aaryan Kalia — set in DM Serif Display, 64px, white.
Role description (Geist 18px, white at 60% opacity, max 2 lines):
"A Product Designer who believes great design is both precise and expressive. Working across UX research, interaction design, prototyping, and systems."
Currently working at line (DM Mono 13px, white at 40% opacity): "Currently leading design at TuteDude"
One white CTA button (large size) with label "View Work" — smooth scrolls to the Work section.

Below the hero content, before transitioning to the next section, add the Infinite Scroll Ticker (see below).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1B — INFINITE SCROLL TICKER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

A dark bar (#0D1729) sitting directly below the hero. Continuously scrolls left. Top and bottom 1px borders at white-20 opacity.

Tools list (in this order, repeated twice for seamless loop):
ChatGPT ◆ Gemini ◆ Claude ◆ Antigravity ◆ Figma ◆ Adobe Illustrator ◆ Photoshop ◆ Cursor ◆ Framer ◆ Balsamiq

Text style: DM Mono, 13px, white-60, letter-spacing 0.06em. The ◆ separator is accent-colored (#4A8FE8). Animation: 40s linear infinite loop using CSS keyframes. Duplicate the full item list inside the track for a seamless infinite scroll. Animation pauses on hover (animation-play-state: paused). Padding: 16px top and bottom.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — WORK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: off-white (#F8F7F4). Section label "SELECTED WORK" in DM Mono 11px, letter-spacing 0.18em, ink-light color. Section heading in Geist 600, 40px.

2-column project card grid on desktop, 1-column on mobile. Gap: 24px.

CARD SPECIFICATION:
- Background: #12233E
- Border: 1px solid rgba(255,255,255,0.12) at rest
- Border-radius: 16px
- Inner padding: 32px top and sides, 0 bottom (screenshot bleeds to bottom edge)
- Category label: DM Mono, 11px, #4A8FE8, uppercase, letter-spacing 0.14em
- Project title: Geist 600, 24px, white, max 3 lines
- Discipline tag pills: 1px border rgba(255,255,255,0.20), white-60 text, DM Mono 11px, padding 4px 12px, border-radius 9999px
- Browser-frame screenshot mockup at bottom of card (image fills remaining card height)
- Min card height: 480px desktop, 360px mobile

CARD HOVER INTERACTIONS (all 4 must be implemented):
1. Custom circular cursor: OS cursor hides, replaced by an 80px white circle with "View Project" text centered inside. Follows mouse position with 80ms easing lag.
2. Glow burn effect: A radial gradient overlay inside the card tracks the cursor using JavaScript mousemove event. Update CSS custom properties --mouse-x and --mouse-y on the card element. The ::before pseudo-element uses background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(74,143,232,0.25), transparent). This creates a directional glow that follows the cursor.
3. Card lift: transform: translateY(-4px), box-shadow: 0 24px 48px rgba(0,0,0,0.32), border brightens to rgba(255,255,255,0.40). Transition: 300ms cubic-bezier(0.16,1,0.3,1).
4. Screenshot zoom: image inside card scales to 1.03 with overflow hidden. Transition: 400ms ease.

PROJECTS (use these 3, leave placeholders for the rest marked [COMING SOON]):

Project 1:
Category: UX Design
Title: Fairframe — Ethical Design App for Young Designers
Tags: UX Research · Interaction Design · Prototyping
Description: An app helping early-career designers navigate ethical decision-making in UX practice.
Screenshot: placeholder browser mockup (grey)

Project 2:
Category: UX Design
Title: Stitchcraft Studio — Immersive Interface for Young Tailors
Tags: UX Research · AR/VR · User Testing
Description: An immersive tailoring application designed in collaboration with an AR/VR development team.
Screenshot: placeholder browser mockup (grey)

Project 3:
Category: E-Commerce UX
Title: Wellbeing Nutrition — Health Platform Redesign
Tags: UX Design · Mobile · Design Systems
Description: End-to-end UX redesign for a health and wellness e-commerce platform driving measurable sales growth.
Screenshot: placeholder browser mockup (grey)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — ABOUT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #F8F7F4. Centered column, max-width 680px. Floating back-navigation pill at top-left ("← Back to Portfolio").

Headline (DM Serif Display, 48px, italic, ink color #111827):
"I didn't start at a screen."

Body copy (Geist 400, 18px, #374151, line-height 1.7):
Paragraph 1:
"I spent 12 years as a competitive basketball player — studying systems, reading patterns, and making split-second decisions under pressure. When I found design, I realized I'd been doing it all along. Sport and design share the same obsession: understanding how people move, and building something that moves with them."

Paragraph 2:
"Today I work as a Product Designer, currently leading design at TuteDude. My work lives at the intersection of clarity and craft — UX research, interaction design, and systems thinking. I've shipped work across health, education, and e-commerce, and I care deeply about design that performs as well as it looks."

Below the copy: a full-width monochrome (black and white) placeholder image, width 100% of the column.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — RESUME
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #FFFFFF. Two-column layout. Left column: sticky section labels (Experience, Projects, Education, Skills, Awards, Certifications) in DM Mono 11px uppercase, ink-light. Right column: chronological content entries. Download PDF button at top-right (white CTA, large, obsidian fill since this is a light section), label "↓ Download Resume".

EXPERIENCE:

TuteDude — Lead Designer
Jan 2026 – Present
Currently leading design across the platform, owning end-to-end design deliverables.

Infinite Locus — Product Designer
Jul 2025 – Jan 2026
- Designed high-fidelity screens for Wellbeing Nutrition, an e-commerce platform in health and wellness.
- Drove 1.6% increase in Gross Sales (₹18.6 Crore) and scaled Total Orders by 777% by leading end-to-end UX redesign for the Wellbeing Carnival Sale.
- Reduced financial returns by 260% while boosting Returning Customer Rate from 25% to 60.9% via mobile information architecture optimization.
- Achieved 526% increase in Add to Cart and 326% increase in Reach to Checkout through A/B testing and user flow consolidation.
- Led Design Quality Assurance for Royal Enfield ensuring pixel-perfect parity across 375px screens.
- Built a comprehensive multi-platform Design System with 400+ components across web, mweb, and native app.
- Served as lead designer for Matahari, managing deliverables and communicating directly with the Indonesian client.
- Executed full Ratings Flow and Fit Finder decision tool for the Tenxyou platform.

ZIGRAM — Product Design Intern
Jan 2025 – Jun 2025
- Revamped and standardized existing designs for a cleaner, more consistent visual identity.
- Performed usability testing, competitor analysis, heuristic evaluation, stakeholder interviews, persona creation, wireframing, and high-fidelity prototyping.
- Designed high-impact creatives contributing to follower growth from 62,000 to 70,000 in 3 months.

PROJECTS:

Fairframe — Ethical Design App for Young Designers
UX Designer | Jan 2025 – May 2025
- Conducted 10+ user interviews and created 3 user personas.
- Synthesized data from 30+ survey responses identifying trends in ethical UX awareness.
- Designed 45+ high-fidelity screens with accessibility and inclusivity as core constraints.

Stitchcraft Studio — Immersive Interface for Young Tailors
UX Designer | Aug 2024 – Dec 2024
- Conducted 10+ interviews including 5 with industry-leading experts.
- Executed competitive analysis and user surveys to define core features and flows.
- Collaborated with an AR/VR development team to explore and optimize application functionality.

EDUCATION:

University of Petroleum & Energy Studies, Dehradun
B.Des in Interaction Design | 2021 – 2025

SKILLS (render as obsidian-fill pill tags, white text, DM Mono 11px):

Design: User Experience · Interaction Design · User Interface · Digital Prototyping · Visual Design · Wireframing · Low/High Fidelity Mockups · Design Systems

Research: User Interviews · User Testing · Information Architecture · Journey Mapping · Quantitative Analysis · A/B Testing · Competitor Analysis · Design Strategy · Heuristic Evaluation

Tools: Figma · Framer · Sketch · Adobe XD · Illustrator · Photoshop · Invision · Cursor · Notion · Jira · Confluence · HTML · CSS · JavaScript · Python

Visual Design: Poster Design · Brand Guidelines · Typography · Iconography · Social Media Design · Web Design

AWARDS:
Design Hackathon Winner — Kalakriti | 2024

CERTIFICATIONS (render as a clean list, DM Mono 12px, ink-light):
Complete Web and Mobile Designer: UI/UX, Figma — Udemy, 2025
Adobe Illustrator CC Essentials — Udemy, 2025
Figma UI/UX Design Advanced — Udemy, 2023
Figma UI/UX Design Essentials — Udemy, 2023
Ask Questions to Make Data-Driven Decisions — Google, 2023
Conduct UX Research and Test Early Concepts — Google, 2023
Create High-Fidelity Designs and Prototypes in Figma — Google, 2023
Design-Led Strategy — University of Sydney, 2022
Build Wireframes and Low-Fidelity Prototypes — Google, 2022
Design Thinking for Innovation — University of Virginia, 2022
Start the UX Design Process — Google, 2022
Foundations of User Experience Design — Google, 2025

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Background: #080F1C (obsidian-darkest). Full-viewport section.

Headline (DM Serif Display, 48px, white):
"Let's build something."

Subtext (Geist 400, 18px, white-60):
"I'm currently open to full-time and freelance opportunities. If you have a project or role in mind, I'd love to hear about it."

Availability badge (DM Mono, 11px, uppercase, letter-spacing 0.12em):
Green dot + "Available for new projects" — rendered as a small pill with a subtle green glow.

Email (Geist 500, 24px, white, rendered as a clickable mailto link):
aaryan22kalia@gmail.com

Social links (render as rows with hover arrow → indicator, Geist 400, 18px, white-60 at rest, white on hover):
- Email → aaryan22kalia@gmail.com
- LinkedIn → [ADD YOUR LINKEDIN URL]
- Behance → [ADD YOUR BEHANCE URL]
- Unsplash → [ADD YOUR UNSPLASH URL]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MOTION & INTERACTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Global easing: cubic-bezier(0.16, 1, 0.3, 1).
Section entry animations: staggered fade-up on scroll, 400ms duration, 40px Y offset, 80ms stagger between elements.
No decorative or looping animations — motion only on meaningful interactions.
Card hover transitions: 300ms.
Custom cursor lag: 80ms easing delay so it trails the mouse slightly.
Button hover: 180ms.
Nav icon expand: 200ms spring.
