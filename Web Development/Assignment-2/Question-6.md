`z-index` is a CSS property that controls the stacking order of positioned elements on the z-axis, which determines the depth or layering of elements on the screen. It specifies the order in which elements are displayed along the z-axis, with higher values appearing in front of elements with lower values.

Here's how `z-index` functions:

1. **Default Stacking Context:**
   - Each positioned element (with a `position` value of `absolute`, `relative`, `fixed`, or `sticky`) forms a stacking context.
   - By default, elements within the same stacking context are displayed in the order they appear in the HTML structure, with later elements appearing on top of earlier ones.

2. **Z-axis Stacking:**
   - The `z-index` property allows you to explicitly control the stacking order of elements within the same stacking context.
   - Elements with a higher `z-index` value are displayed in front of elements with lower values.
   - The `z-index` property accepts integer values, where higher values indicate a higher stacking order.

3. **Stacking Context Hierarchy:**
   - Stacking contexts can have nested elements, creating a hierarchy of stacking contexts.
   - Elements within a higher stacking context are always displayed in front of elements in lower stacking contexts, regardless of their `z-index` values.
   - For example, an element with a `z-index` value of 1 in a higher stacking context will appear in front of an element with a `z-index` value of 100 in a lower stacking context.

4. **Negative and Auto Values:**
   - Negative `z-index` values can be used to position elements behind the default stacking context or lower-level stacking contexts.
   - The `z-index` value of `auto` (default) behaves similarly to having a value of `0`, and the stacking order is determined by the parent stacking context and HTML structure.

Example:
```css
.element1 {
  z-index: 1;
}

.element2 {
  z-index: 2;
}

.element3 {
  z-index: -1;
}
```

In the above example, `.element2` would appear in front of both `.element1` and `.element3` due to its higher `z-index` value. `.element1` would be displayed in front of `.element3` because of its positive `z-index` value, even though it has a lower value than `.element2`.