## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-05-15 - Skip to Content Links Smooth Animation
**Learning:** Using absolute positioning (like toggling `top: -100%` to `top: 1rem`) for "skip-to-content" links often results in jarring, janky animations due to browser layout repaints. CSS transforms provide much smoother visual transitions.
**Action:** For visually hidden "skip-to-content" links, use CSS transforms (e.g., `-translate-y-full` or `-translate-y-[200%]` to `translate-y-0`) instead of toggling `top` positional values to achieve smoother visual transitions upon receiving focus.
