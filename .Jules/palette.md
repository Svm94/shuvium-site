## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-24 - Smooth Skip Link Transitions
**Learning:** Toggling `top` positional values for skip-to-content links creates jarring visual appearances upon receiving focus. Using CSS transforms (`-translate-y-[200%]` to `translate-y-0`) provides a much smoother transition, improving the micro-UX for keyboard users.
**Action:** Implement visually hidden skip links using CSS transforms instead of positional toggling to ensure smoother visual transitions on `focus-visible`.
