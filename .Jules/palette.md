## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-04-27 - Accessible Skip-to-Content Link
**Learning:** For bypass blocks like skip-to-content links, using CSS transforms (`-translate-y-[200%]` to `translate-y-4`) rather than toggling `top` positional values achieves much smoother, less jarring visual transitions upon receiving focus (`focus-visible`).
**Action:** When implementing skip-to-content links or other hidden-until-focused elements, prefer using Tailwind's translate classes with `transition-transform` for visibility toggling.
