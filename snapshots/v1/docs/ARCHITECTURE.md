# FR Conservas - Architecture

## Business Objectives

FR Conservas needs a one-page, mobile-first landing page focused on commercial action. The primary business objective is to generate direct WhatsApp conversations that become product inquiries and orders.

Secondary objectives:

- Build a recognizable premium identity for an independent artisanal preserves brand.
- Communicate product quality, care, and trust without competing on price.
- Make the offer immediately clear: artisanal pickled eggplants and peppers.
- Support future expansion into stores, dieteticas, delicatessens, restaurants, resellers, and regional or national distribution.

The landing page should not behave like a broad institutional website. It should behave like a focused conversion asset: clear offer, visible products, credible process, simple contact path.

## Target Audience

### Consumers

People who enjoy food, value artisanal products, and are willing to pay for quality, flavor, presentation, and authenticity. They may be buying for home consumption, gifts, gatherings, picadas, or premium pantry use.

Primary consumer needs:

- Understand what the products are.
- See enough product quality to trust the purchase.
- Know how to order quickly.
- Feel the brand is real, careful, and professional.

### Commercial Buyers

Local stores, dieteticas, delicatessens, restaurants, and resellers looking for products with good presentation and perceived value.

Primary commercial needs:

- Confirm that the brand looks professional enough to resell.
- Identify the product category quickly.
- Find a low-friction contact channel.
- Feel confidence in the production care and presentation.

## User Motivations

Users are motivated by flavor, trust, convenience, and perceived quality.

Key motivations:

- Discovering authentic artisanal preserves.
- Buying a product that feels more special than supermarket alternatives.
- Finding a reliable supplier for personal or commercial use.
- Solving the "what should I add to a meal, picada, or table?" problem.
- Contacting directly without navigating a complex catalog.

## Conversion Goals

Primary conversion:

- WhatsApp click to start an inquiry or order.

Secondary conversions:

- Instagram visit for social validation.
- Email contact for commercial or wholesale inquiries.
- Product interest through section engagement.
- Brand recall through a distinctive first impression.

Every major section should either increase trust, clarify the product offer, or move the user closer to WhatsApp.

## Information Architecture

Recommended one-page structure:

1. Header / Navigation
2. Hero
3. Product Benefits
4. About / Process
5. Products
6. Trust Signals
7. FAQ
8. Final CTA
9. Footer

The brief asks for Hero, About, Products, Final CTA, and Footer. The architecture should preserve that core while adding lightweight conversion support through benefits, trust signals, and FAQ if content is available or can be written truthfully.

### Header

Purpose: provide orientation and persistent access to WhatsApp.

Recommended content:

- Logo or brand name.
- Anchor links: Productos, Calidad, Contacto.
- Primary WhatsApp CTA.

### Hero

Purpose: answer within 5 seconds what the brand sells and how to buy.

Required content:

- H1 with the brand or offer.
- Clear value proposition.
- Supporting copy.
- Product or brand visual.
- WhatsApp CTA.

Recommended hero message direction:

"Conservas artesanales con sabor casero y presentacion premium."

### Benefits

Purpose: translate product qualities into buying reasons.

Possible benefits:

- Ingredientes seleccionados.
- Produccion cuidada.
- Ideal para picadas, comidas y comercios.
- Presentacion artesanal y premium.

### About / Process

Purpose: build trust and justify premium positioning.

Content should explain selection, preparation care, small-batch production, and presentation.

### Products

Purpose: make the offer concrete.

Product cards:

- Berenjenas encurtidas.
- Morrones encurtidos.

Each product should include image, name, short description, and a WhatsApp inquiry action where appropriate.

### Trust Signals

Purpose: reduce purchase risk.

Possible truthful signals:

- Produccion artesanal.
- Ingredientes seleccionados.
- Elaboracion cuidada.
- Presentacion en frasco.
- Contacto directo.

Avoid invented metrics, reviews, or certifications unless they are real.

### FAQ

Purpose: remove friction before contacting.

Recommended questions:

- Como hago un pedido?
- Venden por mayor o para comercios?
- Que productos tienen disponibles?
- Como puedo consultar precio y disponibilidad?

### Final CTA

Purpose: give the user a simple final action after reviewing the page.

Recommended content:

- Short persuasive message.
- WhatsApp button.
- Optional mention of consumer and commercial inquiries.

### Footer

Purpose: provide alternate contact routes and brand closure.

Required content:

- Email.
- Instagram.
- WhatsApp.

## Frontend Architecture

The implementation should remain lean and static unless a future catalog or CMS is required.

Recommended structure:

- `index.html` for semantic page structure.
- `assets/css/styles.css` for design tokens, layout, components, and responsive behavior.
- `assets/js/main.js` only for small interactions such as mobile navigation, scroll behavior, or back-to-top visibility.
- `assets/img/` for optimized logo and product images.

No framework is necessary for the first landing page. A static page will be faster, easier to maintain, and sufficient for the current conversion objective.

## Component Inventory

Core components:

- Header / navbar.
- Logo lockup.
- Primary CTA button.
- Secondary text link.
- Hero section.
- Benefit item.
- About/process block.
- Product card.
- Trust signal item.
- FAQ item.
- Final CTA band.
- Footer.
- Floating WhatsApp button.
- Back-to-top button.

Reusable utility patterns:

- Section container.
- Eyebrow label.
- Section heading.
- Responsive image wrapper.
- Icon + text row.
- Visually hidden text for accessibility.

## Performance Architecture

Performance should support conversion. A slow page weakens trust and reduces WhatsApp clicks.

Priorities:

- Optimize and compress product images.
- Use responsive image sizes.
- Lazy load non-hero images.
- Reserve image dimensions to avoid layout shift.
- Keep JavaScript minimal.
- Use system-safe fallbacks for fonts or load web fonts carefully.
- Avoid heavy animation and decorative assets.

Targets:

- Lighthouse 90+ across Performance, Accessibility, Best Practices, and SEO.
- Strong LCP through optimized hero imagery.
- Minimal CLS through fixed media dimensions.
- Low INP by avoiding unnecessary scripts.

## Implementation Principles

- Mobile-first layout before desktop enhancement.
- Semantic HTML structure.
- One H1 only.
- Clear section anchors.
- CTA visible early and repeated with restraint.
- No distracting decorative elements that do not support trust, product clarity, or conversion.
- Truthful content only, especially for claims, social proof, availability, and commercial scale.
