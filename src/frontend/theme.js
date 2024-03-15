export const theme = {
  // Color Palette
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    error: '#e74c3c',
    background: '#f8f9fa',
    text: {
      light: '#f8f9fa', // For dark backgrounds
      dark: '#343a40',  // For light backgrounds
      error: '#e74c3c',
    },
    // Add more colors as needed
  },

  // Typography
  typography: {
    fontBase: '"Open Sans", sans-serif', // Base font family
    fontSizeBase: '1rem', // Base font size
    fontSizeLarge: '1.25rem',
    fontSizeSmall: '0.875rem',
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightBold: 700,
    // Add more typography-related styles
  },

  // Spacing
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    // Add more spacing sizes as needed
  },

  // Breakpoints for responsive design
  breakpoints: {
    xs: '0',     // Extra small devices (portrait phones)
    sm: '576px', // Small devices (landscape phones)
    md: '768px', // Medium devices (tablets)
    lg: '992px', // Large devices (desktops)
    xl: '1200px', // Extra large devices (large desktops)
    // Add more breakpoints if needed
  },

  // Borders
  borders: {
    radiusSmall: '4px',
    radiusMedium: '8px',
    radiusLarge: '12px',
    // Define border styles as needed
  },

  // Shadows
  shadows: {
    small: '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.24)',
    medium: '0px 4px 6px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.24)',
    large: '0px 10px 20px rgba(0, 0, 0, 0.12), 0px 6px 6px rgba(0, 0, 0, 0.24)',
    // Add more shadow styles as needed
  },
};
