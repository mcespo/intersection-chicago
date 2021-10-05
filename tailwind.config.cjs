module.exports = {
  mode: 'jit',
  corePlugins: {
    container: false
  },
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [
    ({
      addComponents,
      theme
    }) => {
      addComponents({
        ".container": {
          marginInline: "auto",
          paddingInline: theme("spacing.4"),
          maxWidth: theme("screens.sm"),

          // Breakpoints
          "@screen sm": {
            maxWidth: theme("screens.sm"),
          },
          "@screen md": {
            maxWidth: theme("screens.md"),
          },
        },
      });
    },
  ],
  purge: ['./src/**/*/*.svelte']
}
