# Food Chapter — Design Direction

## Three stylistic approaches

### Theme Name: Street-side Chapter
Very Brief Intro: A warm, editorial fast-food identity inspired by Lahore’s neighborhood signboards, printed menus, and late-night counter culture. Cream paper, forest green, and curry orange make the experience feel tactile, familiar, and full of appetite.
Probability: 0.07

### Theme Name: Canal Bank After Dark
Very Brief Intro: A moody cinematic treatment built around deep green shadows, ember-orange highlights, and a nocturnal Lahore energy. It would feel more like a food film than a menu.
Probability: 0.04

### Theme Name: Fresh Press
Very Brief Intro: A bright, modern food-zine direction with off-white space, bold editorial type, and playful crop marks. It would make the menu feel crisp and contemporary without losing its local character.
Probability: 0.09

## Chosen approach: Street-side Chapter

### Design Movement
Contemporary vernacular editorial design: the visual language of hand-painted neighborhood food signage, offset-printed takeaway menus, and a compact independent restaurant brand translated into a premium digital experience.

### Core Principles
1. **Printed warmth over sterile polish:** Use paper-like cream, ink-green, and curry-orange with subtle grain and imperfect edges.
2. **Appetite through close detail:** Treat sizzling food, sauce gloss, toasted edges, and wrapping paper as cinematic material, not generic stock imagery.
3. **Asymmetric editorial rhythm:** Let sections alternate between offset blocks, oversized numerals, and side notes instead of a repetitive centered card grid.
4. **Useful exuberance:** Motion and decoration should point to action—menu, call, WhatsApp, directions—rather than exist as ornament.

### Color Philosophy
Cream is the base paper: calm, tactile, and easy to read. Deep food-green is the ink and the anchor, borrowed from the provided menu’s strongest signal. Curry orange is the appetite trigger, reserved for prices, active states, and moments that should feel warm and immediate. Black-brown is used instead of pure black to preserve the printed, human tone.

### Layout Paradigm
A vertical editorial scroll with a wide cinematic hero, a narrow “chapter marker” rail on desktop, overlapping menu panels, and offset information blocks. On mobile, the rail becomes a compact sticky chapter index and the composition collapses into confident single-column reading without losing the staggered rhythm.

### Signature Elements
- **Chapter labels:** Small uppercase labels with a numbered chapter stamp, like a printed zine.
- **Ink-stamp circles:** Orange roundels with simple line icons for menu groups and utility actions.
- **Paper grain + registration offset:** Very subtle texture and one-pixel color offsets suggest print without reducing legibility.

### Interaction Philosophy
Every primary interaction answers a real restaurant need. A first-tap WhatsApp action is always visible, calls are tap-to-call, and directions open Maps. Hover states feel like ink shifting on paper; buttons lift a few pixels, then settle. No interaction hides essential contact information behind decorative gestures.

### Animation
Use transform and opacity only. The hero video drifts on a 2–3 layer parallax stack: filmed food texture at the back, a floating chapter badge in the mid layer, and foreground scribble/linework at the front. Section reveals rise 18px with a stagger of 60ms. Menu rows use a short 180ms translate-and-color response. Respect `prefers-reduced-motion` by disabling parallax, entrance transforms, and continuous decorative motion while preserving clarity and focus states.

### Typography System
- **Display:** `Bebas Neue`, uppercase, tightly tracked, with very large chapter titles and occasional italic treatment for emphasis.
- **Body:** `DM Sans`, with 400/500/700 weights for readable utility copy and labels.
- **Accent:** `Space Mono` for prices, coordinates, and micro-labels to reinforce the menu/receipt language.
Hierarchy uses the display face only for headlines and section titles; body copy stays compact and calm. Never use a generic all-purpose sans for both roles.

### Brand Essence
A neighborhood fast-food chapter in Lahore for people who want a familiar, generous, easy-to-order meal with a little personality. Personality adjectives: **warm, spirited, direct**.

### Brand Voice
Headlines sound like a friend calling the next order, not a corporate restaurant chain. CTAs are specific, active, and slightly playful; microcopy is concise and useful.

Example lines:
- “Make this your next chapter.”
- “Skip the scroll. Start the order.”

### Wordmark & Logo
Use a bespoke two-part mark: a compact orange “chapter seal” containing a simple open-book/fork symbol, paired with a stacked FOOD / CHAPTER wordmark in a condensed display face. The seal should work independently as the favicon; the wordmark should feel like a printed sign, never like default browser text.

### Signature Brand Color
**Chapter Green — `#174B35`**. It is ownable, grounded, and directly connected to the provided menu artwork while giving the orange a strong appetite-focused contrast.

## Style Decisions
- Keep the provided menu’s factual content as the source of truth; omit anything not legible or supplied.
- Reviews are shown verbatim and labeled as Google review highlights; do not embellish or fabricate sentiment.
- The supplied menu image can appear as a reference panel, but all key menu content is also rendered as accessible text.
- Contact actions prioritize WhatsApp, then phone, then directions.
