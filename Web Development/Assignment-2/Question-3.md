In CSS, `vw` and `vh` are units of measurement that represent viewport width and viewport height, respectively. They are relative units that allow you to size elements in relation to the dimensions of the browser's viewport.

Here's a brief explanation of `vw` and `vh`:

- **`vw` (Viewport Width):** The `vw` unit represents 1% of the width of the viewport. For example, if the viewport width is 1000 pixels, `1vw` would be equivalent to 10 pixels (1% of 1000). It allows you to set element sizes or properties based on a percentage of the viewport width.

- **`vh` (Viewport Height):** The `vh` unit represents 1% of the height of the viewport. Similar to `vw`, if the viewport height is 800 pixels, `1vh` would be equivalent to 8 pixels (1% of 800). It enables you to size elements or apply styles based on a percentage of the viewport height.

Usage example:

```css
.example {
  width: 50vw;    /* Set the width to 50% of the viewport width */
  height: 30vh;   /* Set the height to 30% of the viewport height */
  font-size: 5vw; /* Set the font size to 5% of the viewport width */
  margin-top: 10vh; /* Set the top margin to 10% of the viewport height */
}
```

In the above example, the CSS properties are using `vw` and `vh` units to size the width and height of the `.example` element relative to the viewport dimensions. The `font-size` property is also using `vw` to set the font size based on the viewport width, and `margin-top` is using `vh` to set the top margin based on the viewport height.

Using `vw` and `vh` units can help create responsive and scalable designs that adapt to different screen sizes and orientations. They are particularly useful when you want elements to be sized proportionally to the viewport, allowing for a consistent experience across various devices.