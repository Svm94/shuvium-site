## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-04-09 - Accessible Skip-to-Content Link
**Learning:** For a smoother visual transition when rendering a visually hidden skip-to-content link, use CSS transforms (e.g., `-translate-y-[200%]` becoming `translate-y-0` on `focus-visible`) rather than toggling `top` or `left` positional properties. This approach prevents layout thrashing while still maintaining full keyboard accessibility. Ensure the target has an `id`, `tabIndex={-1}`, and explicit `focus-visible` styles to indicate focus has shifted.
**Action:** When implementing skip-to-content functionality, use transform-based positioning instead of absolute pixel repositioning, and ensure the target main content has appropriate focus-visible utility classes.
