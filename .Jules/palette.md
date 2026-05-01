## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-01 - Skip-to-Content Link Transformations
**Learning:** Using positional values (like `top: -100%` to `top: 0`) for skip-to-content link transitions often leads to janky animations or inconsistent layouts depending on viewport constraints.
**Action:** Always use CSS transforms (`-translate-y-[200%]` transitioning to `translate-y-0`) on `focus-visible` to achieve hardware-accelerated, smoother visual transitions for visually hidden elements that need to become visible upon keyboard focus.
