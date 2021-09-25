# Gibki

Gibki is an open-source and straightforward grid system based on Flexbox.

[Open in CodePen](https://codepen.io/collection/pgogaZ)

## Table of contents

- [Installation](#installation)
  - [Download](#download)
  - [Package managers](#package-managers)
- [Usage](#usage)
  - [General](#general)
  - [Nesting](#nesting)
  - [Responsive layouts](#responsive-layouts)
  - [Wrapping](#wrapping)
  - [Gutters](#gutters)
  - [Directions](#directions)
  - [Horizontal alignment](#horizontal-alignment)
  - [Vertical alignment](#vertical-alignment)
  - [Reordering](#reordering)

## Installation

### Download

CSS: `css/flex.min.css` minified, or `css/flex.css` un-minified

### Package managers

Gibki is also available on npm.

```shell
npm install gibki --save
```

## Usage

### General

#### .flex

`.flex` is the wrapper for columns.

```html
<div class="container">
  <div class="flex">

  </div>
</div>
```

#### .flex__

`.flex__` classes creates differend column sizes.

```html
<div class="container">
  <div class="flex">
    <div class="flex__2"></div>
    <div class="flex__10"></div>
    <div class="flex__8"></div>
    <div class="flex__4"></div>
    <div class="flex__7"></div>
    <div class="flex__5"></div>
  </div>
</div>
```

#### .flex__auto

`.flex__auto` creates columns that will take up however much space is left.

```html
<div class="container">
  <div class="flex">
    <div class="flex__6"></div>
    <div class="flex__auto"></div>
    <div class="flex__auto"></div>
    <div class="flex__8"></div>
    <div class="flex__auto"></div>
  </div>
</div>
```

### Nesting

To nest your content with the default grid, add a new `.flex` container and set of `.flex__` columns within an existing `.flex__` column.

```html
<div class="container">
  <div class="flex">
    <div class="flex__lg-4"></div>
    <div class="flex__lg-8">
      <div class="flex">
        <div class="flex__4"></div>
        <div class="flex__4"></div>
        <div class="flex__4"></div>
      </div>
    </div>
  </div>
</div>
```

### Responsive layouts

The grid system lets you create responsive layouts by giving you the option to define different column widths for each viewport. Four different breakpoints determine the viewports.

- &#x3E;= 500px: Small `sm`
- &#x3E;= 700px: Medium `md`
- &#x3E;= 1000px: Large `lg`
- &#x3E;= 1200px: Extra large `xl`

```html
<div class="container">
  <div class="flex">
    <div class="flex__md-6 flex__lg-3"></div>
    <div class="flex__md-6 flex__lg-3"></div>
    <div class="flex__md-6 flex__lg-3"></div>
    <div class="flex__md-6 flex__lg-3"></div>
  </div>
</div>
```

### Wrapping

By default, columns will wrap if necessary.

```html
<div class="container">
  <div class="flex">
    <div class="flex__6"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

#### .flex--wrap-reverse

The columns will wrap if necessary but in reverse order.

```html
<div class="container">
  <div class="flex flex--wrap-reverse">
    <div class="flex__6"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

#### .flex--nowrap

The columns will not wrap.

```html
<div class="container">
  <div class="flex flex--nowrap">
    <div class="flex__6"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

### Gutters

The columns have horizontal and vertical padding to create the gutters between individual columns and rows. You can remove the margin from the wrapper and the padding from the columns and rows with `.flex--no-gutters`.

```html
<div class="container">
  <div class="flex flex--no-gutters">
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
  </div>
</div>
```

You can also only remove the horizontal gutters with `.flex--no-horizontal-gutters`.

```html
<div class="container">
  <div class="flex flex--no-horizontal-gutters">
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
  </div>
</div>
```

Or only remove the vertical gutters with `.flex--no-vertical-gutters`.

```html
<div class="container">
  <div class="flex flex--no-vertical-gutters">
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
    <div class="flex__md-6"></div>
  </div>
</div>
```

### Directions

The following classes define the direction in which the columns are placed in the wrapper. By default, columns are set left to right in `ltr` and right to left in `rtl`.

```html
<div class="container">
  <div class="flex">
    <div class="flex__4"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

#### .flex--row-reverse

`row-reverse` sets the direction, right to left in `ltr` and left to right in `rtl`.

```html
<div class="container">
  <div class="flex flex--row-reverse">
    <div class="flex__4"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

#### .flex--column

`.flex--column` behaves the same way as `.flex--row` but top to bottom.

```html
<div class="container">
  <div class="flex flex--column">
    <div class="flex__4"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

#### .flex--column-reverse

`.flex--column-reverse` behaves the same way as `.flex--row-reverse` but bottom to top.

```html
<div class="container">
  <div class="flex flex--column-reverse">
    <div class="flex__4"></div>
    <div class="flex__8"></div>
  </div>
</div>
```

### Horizontal alignment

The following classes define how columns are aligned along the main axis. It helps distribute extra space between the items when they don't reach their maximum size. By default, columns are positioned at the beginning of the container.

```html
<div class="container">
  <div class="flex">
    <div class="flex__3"></div>
    <div class="flex__3"></div>
    <div class="flex__3"></div>
  </div>
</div>
```

#### .flex--right

The columns are positioned at the end of the container.

```html
<div class="container">
  <div class="flex flex--right">
    <div class="flex__3"></div>
    <div class="flex__3"></div>
    <div class="flex__3"></div>
  </div>
</div>
```

#### .flex--center

The columns are positioned at the center of the container.

```html
<div class="container">
  <div class="flex flex--center">
    <div class="flex__3"></div>
    <div class="flex__3"></div>
    <div class="flex__3"></div>
  </div>
</div>
```

#### .flex--space-between

The columns are evenly spread horizontally; the first column is at the beginning of the container, the last column on the end of the container. Thus, space gets distributed between the columns.

```html
<div class="container">
  <div class="flex flex--space-between">
    <div class="flex__3"></div>
    <div class="flex__3"></div>
    <div class="flex__3"></div>
  </div>
</div>
```

#### .flex--space-around

The columns are positioned with equal space before, between, and after them.

```html
<div class="container">
  <div class="flex flex--space-around">
    <div class="flex__3"></div>
    <div class="flex__3"></div>
    <div class="flex__3"></div>
  </div>
</div>
```

### Vertical alignment

The following classes define how columns are aligned along the cross axis when they don't reach their maximum size.

#### .flex--stretch

This is the default value. You don't need to add the class to the wrapper; it stretches the height of the columns to fill the container but still respects `min-width` and `max-width`.

```html
<div class="container">
  <div class="flex">
    <div class="flex__4"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

You can apply `.flex--stretch` to individual columns if necessary.

```html
<div class="container">
  <div class="flex flex--top">
    <div class="flex__4 flex--stretch"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

#### .flex--top

The columns are positioned at the top of the container.

```html
<div class="container">
  <div class="flex flex--top">
    <div class="flex__4"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

You can also apply `.flex--top` to individual columns.

```html
<div class="container">
  <div class="flex">
    <div class="flex__4 flex--top"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

#### .flex--bottom

The columns are positioned at the bottom of the container.

```html
<div class="container">
  <div class="flex flex--bottom">
    <div class="flex__4"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

You can also apply `.flex--bottom` to individual columns.

```html
<div class="container">
  <div class="flex">
    <div class="flex__4 flex--bottom"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

#### .flex--middle

The columns are positioned at the vertical center of the container.

```html
<div class="container">
  <div class="flex flex--middle">
    <div class="flex__4"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

You can also apply `.flex--middle` to individual columns.

```html
<div class="container">
  <div class="flex">
    <div class="flex__4 flex--middle"></div>
    <div class="flex__4"></div>
    <div class="flex__4"></div>
  </div>
</div>
```

### Reordering

Use `.flex--order-` classes for controlling the visual order of your content. Please use this with care.

```html
<div class="container">
  <div class="flex">
    <div class="flex__6 flex--order-5"></div>
    <div class="flex__6 flex--order-6 flex--order-lg-3"></div>
    <div class="flex__6 flex--order-2"></div>
    <div class="flex__6 flex--order-3 flex--order-lg-6"></div>
    <div class="flex__6 flex--order-4"></div>
    <div class="flex__6 flex--order-1"></div>
  </div>
</div>
```

#### Offsetting columns

Offset a column by adding `.flex--offset-` classes.

```html
<div class="container">
  <div class="flex">
    <div class="flex__2"></div>
    <div class="flex__8 flex--offset-2"></div>
    <div class="flex__md-8 flex--offset-md-4"></div>
    <div class="flex__6 flex__lg-4"></div>
    <div class="flex__6 flex--offset-lg-2"></div>
  </div>
</div>
```
