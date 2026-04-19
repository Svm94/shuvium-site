## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2026-04-19 - Skip Link Transform Animation
**Learning:** Using CSS transforms (`-translate-y-full` to `translate-y-0`) for visually hidden skip-to-content links provides a much smoother visual transition upon `focus-visible` than toggling `top` or `left` positional properties, without disrupting the document flow.
**Action:** When implementing bypass block links, always prefer CSS transform transitions over positional changes to ensure a polished accessibility experience.
