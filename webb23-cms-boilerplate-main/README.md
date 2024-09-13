/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    // Tailwind CSS for utility-first CSS framework
    require('tailwindcss')(),

    // Autoprefixer to add vendor prefixes for better browser support
    require('autoprefixer')(),

    // Uncomment and configure if using postcss-preset-env
    // PostCSS Preset Env enables modern CSS features with fallbacks
    // require('postcss-preset-env')({
    //   stage: 0, // Configure the stage of CSS features
    //   features: {
    //     'nesting-rules': true // Enable nesting rules in CSS
    //   }
    // })
  ],
};

export default config;
