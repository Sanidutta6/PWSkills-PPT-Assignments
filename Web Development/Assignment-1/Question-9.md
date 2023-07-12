In HTML, tags and attributes are distinct concepts that serve different purposes:

**HTML Tags:**
HTML tags are used to define the structure and semantics of the content within an HTML document. They are enclosed in angle brackets (`<>`) and consist of an opening tag, content, and a closing tag. Tags define the type and purpose of elements within an HTML document. Examples of HTML tags include `<p>`, `<div>`, `<h1>`, `<a>`, etc.

Example:
```html
<p>This is a paragraph.</p>
```

In the above example, `<p>` is the opening tag, `This is a paragraph.` is the content, and `</p>` is the closing tag. Together, they form the `<p>` element, representing a paragraph of text.

**HTML Attributes:**
HTML attributes provide additional information or configuration settings for HTML elements. They are specified within the opening tag of an element and provide extra characteristics or behaviors to the element. Attributes consist of a name-value pair and are separated by an equals sign (`=`). The attribute name defines the specific property or behavior, while the attribute value provides the corresponding value for that property or behavior.

Example:
```html
<a href="https://www.example.com">Visit Example</a>
```

In the above example, the `<a>` tag represents a hyperlink. The `href` attribute is used to specify the URL that the hyperlink should navigate to. In this case, the value of the `href` attribute is `"https://www.example.com"`, indicating the destination URL.

**Global Attributes:**
Global attributes are attributes that can be applied to most HTML elements regardless of their specific purpose. They provide general functionality and behaviors that are applicable to a wide range of elements. Here are some examples of global attributes:

1. `class`: Specifies one or more CSS class names to associate with an element.
2. `id`: Specifies a unique identifier for an element.
3. `style`: Allows inline CSS styles to be applied to an element.
4. `title`: Provides additional information or a tooltip for an element.
5. `lang`: Specifies the language of the content within an element.
6. `data-*`: Allows custom data attributes to be added to an element for scripting or styling purposes.

These global attributes can be used with various HTML tags to add specific functionality or modify the behavior of the elements.

In summary, HTML tags define the structure and purpose of elements, while HTML attributes provide additional information or behaviors to those elements. Attributes are specified within the opening tag of an element, while tags themselves enclose content and define the type of the element.