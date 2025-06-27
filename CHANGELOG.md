# Changelog

## [4.1.0] - 2025-06-

### Added

- `$use-container-queries` Sass variable to switch between container and media queries. Defaults to `false`. ed2f77f 565ab4d @deoostfrees

### Changed

- **Breaking:** Use media queries by default. 565ab4d @deoostfrees

## [4.0.0] - 2025-03-28

### Changed

- **Breaking:** Use container queries instead of media queries. 2bdc620 @deoostfrees
- Use CSS `min` instead of `padding` on the `.container` class. f1e29c4 @deoostfrees
- Use media query range syntax. d251612 @deoostfrees

### Removed

- **Breaking:** - Deprecated `container--full-width` class.  a50824b @deoostfrees

## [3.1.0] - 2023-09-17

### Added

- Class `container--full` as a replacement for class `container--full-width` (deprecated).

### Changed

- Remove inline start and end padding only if a container is nested in a container without a class for full width.

## [3.0.0] - 2023-07-20

### Added

- Changelog section to keep track of changes.
- CSS custom properties for container widths and gutters between columns and rows.
- Demo file.
- Classes for Flexbox defaults.

### Changed

- **Breaking:** Replace Sass variables with CSS custom properties for container widths and gutters between columns and rows.
- **Breaking:** Rename Sass variables.

### Removed

- **Breaking:** Remove Sass variables for container widths and gutters between columns and rows.
