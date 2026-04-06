## 2024-04-06 - Custom UI Toggle Group Accessibility
**Learning:** Custom UI toggle groups lacking native radio semantics require explicit ARIA group roles (`role="group"`), group labels (`aria-label`), active state indicators (`aria-pressed`), and explicit focus ring utility classes (`focus-visible:ring-2`) to be fully keyboard accessible and screen reader friendly.
**Action:** Always wrap custom toggle button collections in a `role="group"` container and apply explicit `aria-pressed` states and `focus-visible` styles to the interactive children.
