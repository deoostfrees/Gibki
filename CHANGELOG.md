# Changelog

All notable changes to this project will be documented in this file.

## [3.1.0] - 2023-08-

### Added

- Add class `container--full` as replacement for class `container--full-width` (deprecated).

### Changed

- Remove inline start and end padding only if a container is nested in a container without a class for full width.

## [3.0.0] - 2023-07-20

### Added

- Add changelog section to keep track of changes.
- Add CSS custom properties for container widths and gutters between columns and rows.
- Add demo file.
- Add classes for Flexbox defaults.

### Changed

- **Breaking:** Replace Sass variables with CSS custom properties for container widths and gutters between columns and rows.
- **Breaking:** Rename Sass variables.
- Update the development dependencies to the latest versions.

### Removed

- **Breaking:** Remove Sass variables for container widths and gutters between columns and rows.
