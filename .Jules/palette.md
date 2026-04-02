## 2025-02-23 - Accessibility for Custom UI Toggle Groups
**Learning:** Custom UI toggle groups lack native accessibility semantics, making them invisible to screen readers without specific ARIA attributes.
**Action:** Wrapped the toggle container in `role="group"` with an `aria-label`, explicitly set `aria-pressed` on interactive elements to indicate state, and added `focus-visible` utility classes for keyboard navigation.
