## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2026-04-26 - Skip-to-Content Link implementation
**Learning:** Implementing a 'Skip to content' bypass block is essential for accessibility. The link should be placed early in the DOM, visually hidden by default using `-translate-y-full`, and revealed on `focus-visible` with `translate-y-0` for a smooth transition. The target main content area must have a matching ID, `tabIndex={-1}`, and `focus-visible` outline to properly receive and indicate keyboard focus.
**Action:** When setting up global application layouts, always include a skip-to-content link targeted at a `<main id="main-content" tabIndex={-1}>` container with appropriate focus-visible styles.
