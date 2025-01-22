# Tailwind Indigo Theme Migration Guide

## Color Palette Reference

### Primary Colors (Indigo)
- Text: `text-indigo-900` (Headings), `text-indigo-700` (Subheadings)
- Buttons: 
  - Primary: `bg-indigo-600 hover:bg-indigo-700`
  - Secondary: `bg-indigo-100 hover:bg-indigo-200 text-indigo-700`
- Links: `text-indigo-600 hover:text-indigo-700`
- Borders: `border-indigo-200` (Light), `border-indigo-300` (Medium)
- Focus States: `focus:ring-indigo-500`

### Supporting Colors
- Background: 
  - Main: `bg-white`
  - Secondary: `bg-gray-50`
  - Accent: `bg-indigo-50`
- Text: 
  - Primary: `text-gray-900`
  - Secondary: `text-gray-600`
  - Muted: `text-gray-400`

## Migration Strategy

### Phase 1: Basic Infrastructure
1. Update tailwind.config.js to ensure indigo palette is available
2. Create CSS custom properties for theme colors if needed
3. Update any existing color variables or CSS constants

### Phase 2: Component Updates
1. Navigation
   - Update background colors
   - Adjust active/hover states
   - Modify text colors for contrast

2. Buttons
   - Primary button styling
   - Secondary button styling
   - Hover and focus states

3. Forms
   - Input borders
   - Focus states
   - Validation states
   - Helper text

4. Cards and Containers
   - Background colors
   - Border colors
   - Shadow properties

### Phase 3: Testing & Validation
1. Contrast ratio verification (WCAG compliance)
2. Dark mode compatibility check
3. Component state testing
4. Cross-browser validation

## Implementation Examples

### Button Component
```jsx
// Before
<button className="bg-blue-600 hover:bg-blue-700 text-white">
  Click me
</button>

// After
<button className="bg-indigo-600 hover:bg-indigo-700 text-white">
  Click me
</button>
```

### Navigation Link
```jsx
// Before
<a className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
  Home
</a>

// After
<a className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
  Home
</a>
```

## Best Practices
1. Use semantic color names in component documentation
2. Maintain a consistent shade pattern (e.g., 600 for primary actions)
3. Document any custom color combinations
4. Use CSS custom properties for frequently used combinations
5. Consider creating reusable utility classes for common patterns

## Git Workflow
1. Create component-specific branches from main theme branch
   ```bash
   git checkout feature/ui-system-theme-upgrade
   git checkout -b ui/button-indigo-update
   ```
2. Use atomic commits with clear messages
   ```bash
   git commit -m "update: convert button components to indigo palette"
   ```
3. Maintain a changelog of updated components

## Accessibility Considerations
1. Ensure text contrast meets WCAG 2.1 guidelines
2. Test with screen readers
3. Verify focus states are visible
4. Document any accessibility-specific color combinations
