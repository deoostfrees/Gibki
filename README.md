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
- [Browser support](#browser-support)

## Installation

### Download

CSS: `css/flex.min.css` minified, or `css/flex.css` un-minified

### Package managers

You can install Gibki through npm or yarn like any other dependency:

```shell
npm install gibki --save
```

```shell
yarn add gibki
```

Then you can import Gibki in your Sass codebase:

```scss
@import
  '~gibki/scss/gibki';
```

## Usage

### General

#### .container

Containers provide a means to center content. Use `.container` for a responsive width:

![](https://rqrauhvmra.com/gibki/img/container.png)

```html
<div class="container">

</div>
```

And if necessary additionally with `.container--small` for a smaller width:

![](https://rqrauhvmra.com/gibki/img/container--small.png)

```html
<div class="container container--small">

</div>
```

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

![](https://rqrauhvmra.com/gibki/img/flex__.png)

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

![](https://rqrauhvmra.com/gibki/img/flex__auto.png)

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

![](https://rqrauhvmra.com/gibki/img/nesting.png)

```html
<div class="container">
  <div class="flex">
    <div class="flex__lg-4"></div>
    <div class="flex__lg-8">
      <div class="flex">
        <div class="flex__6"></div>
        <div class="flex__auto"></div>
        <div class="flex__auto"></div>
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

![](https://rqrauhvmra.com/gibki/img/responsive-layouts.png)

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

![](https://rqrauhvmra.com/gibki/img/wrapping.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--wrap-reverse.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--nowrap.png)

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

![](https://rqrauhvmra.com/gibki/img/gutters.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--no-horizontal-gutters.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--no-vertical-gutters.png)

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

![](https://rqrauhvmra.com/gibki/img/directions.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--row-reverse.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--column.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--column-reverse.png)

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

![](https://rqrauhvmra.com/gibki/img/horizontal-alignment.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--right.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--center.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--space-between.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--space-around.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--stretch.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--stretch-individual.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--top.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--top-individual.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--bottom.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--bottom-individual.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--middle.png)

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

![](https://rqrauhvmra.com/gibki/img/flex--middle-individual.png)

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

Use `.flex--order-` classes for controlling the visual order of your content.

![](https://rqrauhvmra.com/gibki/img/reordering.png)

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

![](https://rqrauhvmra.com/gibki/img/offset.png)

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

## Browser support

Gibki supports the following browser (all the latest versions):

- Chrome
- Edge
- Firefox
- Safari
