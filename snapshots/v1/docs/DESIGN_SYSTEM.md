# FR Conservas - Design System

## Design Direction

FR Conservas should feel artisanal, gastronomic, premium, close, and professional. The visual system should come from the brand logo: preserved food, glass jar, organic lines, paper warmth, and olive-green identity.

The design should avoid technological, neon, futuristic, childish, or cold corporate aesthetics.

## Visual References From Logo

Observed logo qualities:

- Circular warm paper background.
- Glass jar illustration.
- Olive branch detail.
- Dark olive green linework.
- Serif brand lettering.
- Handmade, organic, calm visual tone.

Design implication:

The landing page should use natural textures subtly, warm neutrals, dark green contrast, and strong product photography. The logo's illustrated character can guide accents, but the page should not become rustic or informal.

## Color System

Recommended palette:

### Primary

Dark olive green:

- `#243828`

Use for headings, primary buttons, nav text, icon strokes, and key brand moments.

### Secondary

Warm paper:

- `#F3E8D0`

Use for soft backgrounds and brand warmth.

### Accent

Pickled pepper red:

- `#A9432F`

Use sparingly for small highlights, product notes, or secondary emphasis.

### Supporting Green

Sage olive:

- `#73845D`

Use for subtle labels, borders, and organic accents.

### Neutral Light

Cream:

- `#FAF7EF`

Use as the main page background.

### Neutral Text

Charcoal:

- `#242424`

Use for body text where dark green is too branded or heavy.

### Border

Warm gray:

- `#D8CEBA`

Use for dividers, card borders, and quiet separation.

### Accessibility Notes

- Primary text on cream should use dark olive or charcoal.
- White text on dark olive should pass WCAG AA for normal text.
- Accent red should not be used alone for important status or CTA text unless contrast is verified.

## Typography

Use maximum two font families.

Recommended approach:

- Display / headings: a refined serif with warmth.
- Body / UI: a clean sans-serif with high readability.

Possible pairings:

- `Cormorant Garamond` for headings + `Inter` for body.
- `Libre Baskerville` for headings + `Source Sans 3` for body.
- `Lora` for headings + `Inter` for body.

If performance is prioritized over custom typography, use system fallbacks with careful sizing.

### Type Scale

Mobile:

- H1: 40px, line-height 1.05
- H2: 30px, line-height 1.15
- H3: 21px, line-height 1.25
- Body: 16px, line-height 1.6
- Small: 14px, line-height 1.45

Desktop:

- H1: 64px, line-height 1.0
- H2: 42px, line-height 1.1
- H3: 24px, line-height 1.25
- Body: 18px, line-height 1.65
- Small: 14px, line-height 1.45

Letter spacing should remain `0`.

## Spacing System

Use the spacing scale from the project skill:

- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 80
- 120

Mobile section padding:

- 48px top/bottom for standard sections.
- 64px for hero and final CTA when space allows.

Desktop section padding:

- 80px for standard sections.
- 120px for major feature sections.

## Layout System

Container width:

- Max: 1200px.
- Content text max: 720px.

Grid:

- Mobile: 4 columns.
- Tablet: 8 columns.
- Desktop: 12 columns.

Mobile layout should be single-column by default. Desktop can use two-column sections for hero and about, but product clarity must remain high.

## Border Radius

Use restraint.

- Small: 8px.
- Medium: 16px.
- Large: 24px.

Recommended use:

- Buttons: 8px or pill only if the brand direction supports it.
- Product cards: 8px.
- Image corners: 16px.
- Large decorative panels: avoid unless structurally needed.

Do not nest cards inside cards.

## Buttons

### Primary CTA

Use for WhatsApp actions.

Style direction:

- Dark olive background.
- Cream or white text.
- Clear icon if available.
- Strong hover/focus state.
- Minimum height 44px.

Label:

- "Consultar por WhatsApp"

### Secondary Action

Use for anchor navigation or non-primary contact.

Style direction:

- Transparent or cream background.
- Dark olive text.
- Visible border.

### Focus States

All interactive elements need visible focus states, ideally:

- 2px outline.
- Offset of 2px.
- High contrast color.

## Imagery

Product photography should be a primary trust driver.

Required image direction:

- Real jars/products when available.
- Natural light.
- Clean gastronomic surface.
- Ingredients visible where possible.
- Avoid dark, blurry, overly cropped, or generic stock-like images.

Hero image should show the actual product or a strong brand/product composition. The logo alone is not enough as the only hero visual because users need to understand the product.

## Iconography

Use simple line icons that match the logo's organic line quality.

Recommended icons:

- WhatsApp for primary CTA.
- Instagram in footer.
- Mail in footer.
- Arrow up for back-to-top.
- Leaf, jar, or spark-free quality icons for benefits if needed.

Icons should support scanning and not become decoration.

## Component Inventory

### Header

Elements:

- Logo.
- Anchor navigation.
- WhatsApp CTA.
- Mobile menu if nav exceeds available space.

Behavior:

- Sticky or fixed.
- Compact on mobile.
- No heavy shadow.

### Hero

Elements:

- H1.
- Supporting copy.
- Primary CTA.
- Optional secondary text link to products.
- Product image.

Behavior:

- Clear first viewport.
- Product visible without requiring interaction.

### Benefit Row

Elements:

- 3 or 4 concise benefits.
- Optional icons.

Purpose:

- Quickly explain why the product is worth attention.

### About Section

Elements:

- Section heading.
- Short body copy.
- Process/quality points.
- Supporting image or texture.

Purpose:

- Build trust and justify premium positioning.

### Product Card

Elements:

- Product image.
- Product name.
- Description.
- Product-specific CTA.

Behavior:

- Full-width on mobile.
- Two-column grid on tablet/desktop.

### FAQ Item

Elements:

- Question.
- Short answer.

Behavior:

- Static list or accessible accordion.
- If accordion is used, keyboard and ARIA behavior must be correct.

### Final CTA

Elements:

- Heading.
- Supporting copy.
- WhatsApp CTA.
- Commercial inquiry note.

Purpose:

- Final conversion moment.

### Footer

Elements:

- Brand mark/name.
- Email.
- Instagram.
- WhatsApp.
- Copyright.

Purpose:

- Contact backup and brand closure.

### Floating Buttons

Recommended:

- Floating WhatsApp button.
- Back-to-top button.

Rules:

- Do not overlap important content.
- Use accessible labels.
- Maintain 44px minimum touch target.

## Mobile-First Strategy

Design for 375px first.

Mobile priorities:

- Logo and CTA visible quickly.
- Hero copy short enough to scan.
- Product visual not squeezed or hidden.
- WhatsApp button large and easy to tap.
- Single-column content.
- Product cards stacked.
- Footer links easy to tap.
- Floating WhatsApp button positioned away from browser UI and footer links.

Breakpoints:

- 375px: base layout.
- 768px: introduce wider grids and side-by-side benefits.
- 1024px: hero/about two-column layouts.
- 1440px: increase whitespace, not complexity.

## Accessibility Considerations

Target WCAG AA.

Requirements:

- Semantic landmarks: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Single H1 and logical heading order.
- Descriptive alt text for logo and product images.
- Empty alt for purely decorative images.
- Keyboard-accessible navigation and buttons.
- Visible focus states.
- Sufficient color contrast.
- 44px minimum tap targets.
- No text embedded in images as the only source of meaning.
- Avoid motion that is essential to understanding.
- Use `aria-label` for icon-only buttons.

## Design Risks

Risks to avoid:

- Making the page look too beige and low contrast.
- Relying only on the logo instead of showing products.
- Using too much decorative texture.
- Adding sections that delay the product view.
- Using generic gourmet claims without proof.
- Creating oversized desktop visuals that do not translate to mobile.

## Design System Checklist

- Palette supports premium warmth and readable contrast.
- Typography feels artisanal but remains legible.
- Product imagery leads the page.
- CTA style is consistent.
- Spacing follows a predictable scale.
- Components are reusable.
- Mobile layout is the source design, not an afterthought.
- Accessibility is designed into components from the start.
