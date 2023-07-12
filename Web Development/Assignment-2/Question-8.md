The positioning properties in CSS, including `absolute`, `relative`, `sticky`, and `fixed`, allow one to control the placement and behavior of elements on a web page. Here's a breakdown of their differences:

**Absolute Positioning:**
- Elements with `position: absolute` are positioned relative to their nearest positioned ancestor (an ancestor element with a position other than `static`), or the initial containing block if no positioned ancestor exists.
- Absolute positioned elements are completely removed from the normal document flow, meaning other elements ignore their presence.
- one can use `top`, `right`, `bottom`, and `left` properties to specify the position of the element relative to its containing block.
- Example:
```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 20px;
  left: 50px;
}
```
In the above example, the `.child` element will be positioned 20 pixels from the top and 50 pixels from the left of its nearest positioned ancestor (`.parent`).

**Relative Positioning:**
- Elements with `position: relative` are positioned relative to their normal position in the document flow.
- Relative positioning allows one to adjust the position of an element using `top`, `right`, `bottom`, and `left` properties, without affecting the laonet of other elements.
- Example:
```css
.parent {
  position: relative;
}

.child {
  position: relative;
  top: 20px;
  left: 50px;
}
```
In the above example, the `.child` element will be positioned 20 pixels down and 50 pixels to the right of its normal position within its parent element.

**Fixed Positioning:**
- Elements with `position: fixed` are positioned relative to the viewport, meaning they stay fixed in their specified position even when the page is scrolled.
- Fixed positioned elements are removed from the normal document flow, similar to absolute positioned elements.
- one can use `top`, `right`, `bottom`, and `left` properties to specify the exact position of the element within the viewport.
- Example:
```css
.fixed-element {
  position: fixed;
  top: 20px;
  right: 20px;
}
```
In the above example, the `.fixed-element` will be positioned 20 pixels from the top and 20 pixels from the right of the viewport, regardless of scrolling.

**Sticky Positioning:**
- Elements with `position: sticky` are positioned based on the user's scroll position, switching between `relative` and `fixed` positioning depending on the scroll offset.
- Sticky positioned elements are positioned relative to their nearest ancestor with a scrolling mechanism (overflow: auto, scroll, or hidden).
- one can use `top`, `right`, `bottom`, and `left` properties to specify the position of the element when it becomes sticky.
- Example:
```css
.sticky-element {
  position: sticky;
  top: 50px;
}
```
In the above example, the `.sticky-element` will behave as a relatively positioned element until the user scrolls to the point where its top edge reaches 50 pixels from the top of its containing block. Then, it becomes "stuck" at that position until the user scrolls back up.