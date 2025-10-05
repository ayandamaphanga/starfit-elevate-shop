# Accessibility Features

This document outlines the accessibility features implemented in the Star-Fit e-commerce website to ensure compliance with WCAG 2.1 AA standards and provide an inclusive experience for all users.

## Overview

The website has been designed with accessibility as a core principle, ensuring that users with disabilities can navigate, understand, and interact with the content effectively.

## Implemented Features

### 1. **Skip to Content Link**
- **Location**: Top of every page
- **Purpose**: Allows keyboard users to skip repetitive navigation and jump directly to main content
- **Activation**: Press Tab key when page loads, then Enter
- **File**: `src/components/SkipToContent.tsx`

### 2. **Keyboard Navigation**
- All interactive elements are keyboard accessible
- Visible focus indicators on all focusable elements
- Custom focus styles with clear visibility
- Tab order follows logical page structure
- **Enhanced Features**:
  - Mobile menu closes with Escape key
  - Focus returns to menu button when menu closes
  - Focus moves to first menu item when menu opens

### 3. **Screen Reader Support**
- **ARIA Labels**: All icon-only buttons have descriptive aria-labels
- **ARIA Live Regions**: Dynamic cart updates announced to screen readers
- **Semantic HTML**: Proper use of `<header>`, `<nav>`, `<main>`, `<footer>` landmarks
- **Role Attributes**: Appropriate ARIA roles where needed

### 4. **Cart Announcements**
- **File**: `src/context/CartContext.tsx`
- Screen readers announce:
  - "Added [Product Name] to cart"
  - "Updated [Product Name] quantity to [X] in cart"
  - "Removed [Product Name] from cart"
  - "Cart cleared"
- Uses ARIA live regions with `aria-live="polite"`

### 5. **Focus Management**
- **Main Content**: Main element has `tabIndex={-1}` for programmatic focus
- **Mobile Menu**:
  - Focus moves to first link when opened
  - Focus returns to menu button when closed
  - Escape key closes menu and returns focus
- **Modal Dialogs**: Focus trap implemented (if applicable)

### 6. **Color Contrast**
- All text meets WCAG AA contrast requirements (4.5:1 for normal text)
- Adjusted color values in design system:
  - `--muted-foreground`: Improved from 45% to 40% lightness
  - `--accent`: Improved from 60% to 42% lightness
  - `--price-old`: Improved from 60% to 40% lightness

### 7. **Product Cards**
- Descriptive link labels: "View details for [Product Name]"
- Price information includes aria-labels for screen readers
- Sale badge includes percentage information
- Images have descriptive alt text

### 8. **Navigation**
- Both mobile and desktop navigation have `aria-label` attributes
- Current page indication (can be enhanced with aria-current)
- Mobile menu has proper ARIA attributes:
  - `aria-expanded` on toggle button
  - `aria-controls` linking button to menu
  - `aria-label` on menu and toggle

### 9. **Images**
- All images have descriptive alt text
- Hero image uses `fetchPriority="high"` and `loading="eager"` for LCP optimization
- Product images use `loading="lazy"` for performance
- Explicit width and height attributes to prevent layout shift

### 10. **Touch Targets**
- All interactive elements meet minimum 24px × 24px size requirement
- Adequate spacing between touch targets
- Fixed Lovable badge close button size

## Testing Recommendations

### Keyboard Testing
1. Navigate entire site using only Tab, Shift+Tab, Enter, and Escape
2. Verify focus indicators are visible at all times
3. Ensure logical tab order through content
4. Test mobile menu with keyboard

### Screen Reader Testing
- **Windows**: NVDA or JAWS
- **macOS**: VoiceOver
- **Mobile**: TalkBack (Android) or VoiceOver (iOS)

**Test Checklist**:
- [ ] All images have alt text announced
- [ ] All buttons have descriptive labels
- [ ] Cart updates are announced
- [ ] Navigation landmarks work correctly
- [ ] Form labels are properly associated

### Color Contrast Testing
Use tools like:
- Chrome DevTools Lighthouse
- WebAIM Contrast Checker
- axe DevTools browser extension

### Mobile Testing
- Test with various screen readers on mobile devices
- Verify touch targets are adequate
- Test gesture navigation compatibility

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Skip to main content | Tab (on page load), then Enter |
| Navigate forward | Tab |
| Navigate backward | Shift + Tab |
| Activate link/button | Enter or Space |
| Close mobile menu | Escape |

## Future Enhancements

Consider implementing:
1. **High Contrast Mode**: Respect user's system high contrast preferences
2. **Reduced Motion**: Respect `prefers-reduced-motion` for animations
3. **Font Size**: Allow text scaling up to 200% without loss of functionality
4. **Error Handling**: Accessible form validation messages
5. **Current Page Indication**: Add `aria-current="page"` to active navigation links
6. **Focus Visible Polyfill**: For older browsers that don't support :focus-visible

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)

## Support

For accessibility concerns or issues, please contact the development team or file an issue in the project repository.
