# Project Overview
This is a frontend project developed for an tour booking company developed using React and advanced CSS technologies like sass, flexbox, grid and animations.

# TABLE OF CONTENTS
- [Project Overview](#pitdecors)
- [TABLE OF CONTENTS](#table-of-contents)
- [TECHNOLOGIES USED](#technologies)
- [THE THREE PILLARS TO WRITE GOOD HTML AND CSS](#the-three-pillars-to-write-good-html-and-css)
- [HOW CSS WORKS: A LOOK BEHIND THE SCENES](#how-css-works-a-look-behind-the-scenes)
- [HOW CSS VALUES ARE PARSED](#how-css-values-are-parsed)
- [THE VISUAL FORMATTING MODEL](#the-visual-formatting-model)
- [THE BOX MODEL](#the-box-model)
  - [The box model: heights and widths](#the-box-model-heights-and-widths)
  - [Box types: inline, block-level and inline-block](#box-types-inline-block-level-and-inline-block)
    - [Block-level boxes](#block-level-boxes)
    - [Inline-boxes](#inline-boxes)
    - [Inline-block boxes](#inline-block-boxes)
  - [Positioning schemes: normal flow, absolute positioning, and floats](#positioning-schemes-normal-flow-absolute-positioning-and-floats)
    - [Normal flow](#normal-flow)
    - [Floats](#floats)
    - [Absolute positioning](#absolute-positioning)
- [BEM](#bem)
- [SASS Architechture](#sass-architecture)
- [Media Queries](#media-queries)

# Technologies
  * React
  * SCSS
  * Flexbox
  * Grid
  * Animations
  * Media Queries

# THE THREE PILLARS TO WRITE GOOD HTML AND CSS

**Responsive design**

* Fluid layouts
* Media queries
* Responsive images
* Correct units
* Desktop-first vs mobile-first

**Maintainable and scalable code**

* Clean
* Easy-to-understand
* Growth
* Reusable
* How to organize files
* How to name classes
* How to structure HTML

**Web performance**

* Less HTTP requests
* Less code
* Compress code
* Use a CSS preprocessor
* Less images
* Compress images

# HOW CSS WORKS: A LOOK BEHIND THE SCENES

**What happens to CSS when a webpage is loaded?**

Load HTML => Parse HTML => The browser builds the `Document Object Model (DOM)` (where the entire decoded HTML code is stored).

Parse HTML => Load CSS => Parse CSS => `CSS Object Model (CSSOM)`.

Parse CSS

* Resolve conflicting CSS declarations (cascade)
* Process final CSS values

**CASCADE**

It is the process of combining different stylesheets and resolving conflicts between different CSS rules and declarations when more than one rule applies to a certain element. 

`IMPORTANCE` **>** `SPECIFICITY` **>** `SOURCE ORDER`

Firstly, the cascade starts by giving the conflicting declarations different importances based on where they are declared, so based on their source.

**Importance**

1. User `!important` declarations (*most important declarations*)
2. Author `!important` declarations
3. Author declarations
4. User declarations
5. Default browser declarations

**Specificity** (SAME IMPORTANCE)

1. Inline styles
2. IDs
3. Classes, pseudo-classes, attribute
4. Elements, pseudo-elements

**Source order** (SAME SPECIFICITY)

The last declaration in the code will override all the other declarations and will be applied.

**Points to remember:**

* CSS declarations marked with `!important` have the highest priority.
* Only use `!important` as a last resource. It is better to use correct specificities - **more maintainable code**!
* Inline styles always have priority over styles in external stylesheets. (You should NOT use inline styles)
* A selector that contains **1** ID is more specific than one with **1000** classes.
* A selector that contains **1** class is more specific than one with **1000** elements.
* The universal selector `*` has no specificity value.
* Rely more on **specificity** than on the **order** of selectors. 
* Rely on order when using 3rd-party stylesheets - always put your author stylesheet last.

# HOW CSS VALUES ARE PARSED

* Each property has an initial value, used if nothing is declared (and if there is no inheritance).
* Browsers specify a `root font-size` for each page (usually 16px).
* Percentages and relative values are always converted to pixels. 
* Percentages are measured relative to their parent's `font-size`, if used to specify `font-size`.
* Percentages are measured relative to their parent's `width`, if used to specify lengths. 
* `em` are measured relative to their **parent** `font-size`, if used to specify `font-size`.
* `em` are measured relative to their **current** `font-size`, if used to specify `lengths`.
* `rem` are always measured relative to the **document's root** `font-size`.
* `vh` and `vw` are simply percentage measures of the viewport's `height` and `width`.

* Inheritance passes the values for some specific properties from parents to children => **more maintainable code**.
* Properties related to text are inherited: `font-family`, `font-size`, `color`, etc.
* The computed value of a property is what gets inherited, **not** the declared value.
* Inheritance of property only works if no one declares a value for that property. 
* The `inherit` keyword forces inheritance on a certain property.
* The `initial` keyword resets a property to its initial value.

# THE VISUAL FORMATTING MODEL

*"An algorithm that calculates boxes and determines the layout of these boxes, for each element in the render tree, in order to determine the final layout of the page."*

* **Dimension of the boxes**: the box model;
* **Box type**: inline, block and inline-block;
* **Positioning scheme**: floats and positioning;
* **Stacking contexts**;
* Other elements in the render tree;
* Viewport size, dimensions of images, etc.;

# THE BOX MODEL

One of the most fundamental parts of CSS.

The box model is one of the factors that define how elements are displayed on a webpage and how are they sized,

According to the box model, every element on a webpage can be seen as a rectangle box. 

And each box can have a width, height, padding, margins and a border. 

* **Content**: text, images, etc.
* **Padding**: transparent area around the content, inside the box;
* **Border**: goes around the padding and the content;
* **Margin**: space between boxes;

## The box model: heights and widths

**total width**: right border + right padding + specified width + left padding + left border

**total height**: top border + top padding + specified height + bottom padding + bottom border

If we use the `border-sizing: border-box`, then the **total width** and **total height** becomes:

**total width**: specified width

**specified height**: specified height

## Box types: inline, block-level and inline-block

### Block-level boxes

* Elements are formatted visually as blocks
* 100% of parent's width
* Vertically, one after another
* Box-model applies as showed

`display: block`

### Inline-boxes

* Content is distributed in lines
* Occupies only content's space
* No line-breaks
* No heights and widths
* Paddings and margins only horizontal (left and right)

`display: inline`

### Inline-block boxes

* A mix of block and line
* Occupies only content's space
* No line-breaks
* Box-model applies as showed

`display: inline-block`

## Positioning schemes: normal flow, absolute positioning, and floats

### Normal flow

* Default positioning scheme
* **NOT** floated
* **NOT** absolutely positioned
* Elements are laid out according to their source order

```
Default
position: relative
```

### Floats

* **Element is removed from the normal flow**
* Text and inline elements will wrap around the floated element
* The container will not adjust its height to the element

```
float: left
float: right
```

### Absolute positioning

* **Element is removed from the normal flow**
* No impact on surrounding content or elements
* We use `top`, `bottom`, `left` and `right` to offset the element from its relatively positioned container.

```
position: absolute
position: fixed
```

# BEM

* It stands for **B**lock **E**lement **M**odifier 
* **BLOCK**: standalone components should be meaningful on their own
* **ELEMENT**: part of a block that has no standalone meaning
* **MODIFIER**: a different version of a block or an element


# SASS-Architecture
  * One popular and effectively modular way to structure Sass projects is the 7-1 pattern. They include abstracts, vendors, base, layout, contains, components, pages and themes.
  * abstracts contains no actual styles, just Sass mechanisms that help define styles in other directories (sometimes called "helpers"). This includes things like global       variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file, as seen above.
  * vendors contains any third-party stylesheets a project uses. For instance, if we wanted to use Bootstrap alongside our own custom Sass in a project, we'd download the Bootstrap stylesheet and place it here.
  * base contains boilerplate used throughout an entire si te. This includes project-wide typography styles, and stylesheets that universally reset or normalize default CSS.
  * layout contains styles for different aspects of the site's structural layout (think of areas like nav bars, headers, footers, etc.)
  * components are like "mini" layouts. Styles for small, reusable pieces of the site should reside here (think buttons, forms, profile pictures, etc.)
  * pages is where page-specific styles reside. For instance, if a project contained several style rules that are only ever used on the "Contact Us" page, they'd live here in a _contact.scss file, as seen above.
  * themes is used whenever a site has multiple themes. For instance, the example project above includes both admin and default themes. We can therefore assume this example site is styled entirely differently for logged-in admins. Perhaps to better present and accommodate the additional features an Admin has. Some websites also offer a "night mode", where the background of the site is darker with lighter-colored text for easier reading in low-light environments. An option like this would be represented in its own theme file too.


# Media-Queries
  The @media rule is used in media queries to apply different styles for different media types/devices.

  Media queries can be used to check many things, such as:

  width and height of the viewport
  width and height of the device
  orientation (is the tablet/phone in landscape or portrait mode?)
  resolution
  Using media queries are a popular technique for delivering a tailored style sheet (responsive web design) to desktops, laptops, tablets, and mobile phones.

  You can also use media queries to specify that certain styles are only for printed documents or for screen readers (mediatype: print, screen, or speech).

  In addition to media types, there are also media features. Media features provide more specific details to media queries, by allowing to test for a specific feature of the user agent or display device. For example, you can apply styles to only those screens that are greater, or smaller, than a certain width.
