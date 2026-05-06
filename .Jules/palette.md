## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2024-05-06 - Smooth Skip-to-Content Transitions
**Learning:** Using CSS transforms (`-translate-y-[200%]` to `translate-y-0`) for skip-to-content links provides a much smoother visual transition upon receiving focus compared to toggling `top` positional values. Additionally, ensuring the target container has `tabIndex={-1}` and `focus-visible` outline styles allows for proper focus management without visual glitches.
**Action:** Always use CSS transforms for animating the appearance of visually hidden interactive elements like skip links on focus. Ensure target main content areas have `tabIndex={-1}` and `focus-visible` styles to properly manage keyboard focus.
