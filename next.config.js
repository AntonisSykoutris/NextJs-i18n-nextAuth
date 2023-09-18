const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);

module.exports = withNextIntl({
  // Other Next.js configuration ...
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com'], // Add 'tailwindui.com' to the list of allowed domains
  },
});
