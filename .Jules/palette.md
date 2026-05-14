## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-05-14 - Bypass Blocks (Skip to content) Animation
**Learning:** For bypass block links like "Skip to content", using CSS transforms (`-translate-y-[200%]`) to hide the link off-screen and smoothly bringing it into view on `focus-visible:translate-y-0` is a more accessible and visually polished approach than toggling positional properties (e.g., `top`).
**Action:** When implementing skip-to-content links, rely on CSS transforms for smooth entering/exiting animations to provide immediate and pleasing feedback when the user's keyboard focus reaches the element.
