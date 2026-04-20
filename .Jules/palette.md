## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.
## 2024-04-20 - Skip-to-content links focus transitions
**Learning:** Using positional values (like toggling `top` from -100px to 0) to hide/show a skip-to-content link can lead to jarring visual transitions when it receives focus. CSS transforms provide much smoother visual feedback.
**Action:** Use CSS transforms (`-translate-y-full` to `translate-y-0`) instead of toggling `top` positional values to achieve smoother visual transitions upon receiving focus.
