## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2025-04-22 - Skip to Content Links Visual Transition
**Learning:** For skip-to-content links, using CSS transforms (`-translate-y-full` to `translate-y-0`) instead of toggling `top` positional values achieves much smoother visual transitions upon receiving focus, as per the established guidelines for the project.
**Action:** Always implement visually hidden skip links using CSS transforms for focus state reveals rather than altering absolute positioning coordinates or clip-path.
