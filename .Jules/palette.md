## 2025-04-08 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit structural and state annotations to be accessible. Specifically, they must be wrapped in a container with `role="group"` and an `aria-label`, interactive elements must use `aria-pressed` to indicate their current state, and `focus-visible` utility classes should be included to support keyboard navigation explicitly.
**Action:** When creating custom toggle groups or segmented controls, always apply `role="group"`, an appropriate `aria-label`, `aria-pressed` for active states, and `focus-visible` classes for keyboard users.

## 2026-04-25 - Skip-to-Content Link Transform Transitions
**Learning:** When implementing skip-to-content links, using CSS transforms (`-translate-y-[150%]` to `translate-y-0`) is significantly smoother and more reliable than toggling `top` or `left` positional properties, creating a polished, non-janky reveal upon receiving focus.
**Action:** Use transform utilities (`-translate-y-full` to `translate-y-0`) instead of positional toggles for revealing focus-triggered elements.
