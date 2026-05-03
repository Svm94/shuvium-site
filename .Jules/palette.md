## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-03 - Smooth Skip-to-Content Transitions
**Learning:** For skip-to-content links, using CSS transforms (`-translate-y-[200%]`, to `translate-y-0`) instead of toggling `top` positional values achieves much smoother visual transitions upon receiving focus, feeling significantly more polished to keyboard users.
**Action:** Always use CSS transforms to visually hide and reveal bypass blocks, avoiding positional layout shifts.
