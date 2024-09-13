/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('tailwindcss')(),
    require('autoprefixer')(),
    // Uncomment and configure if using postcss-preset-env
    // require('postcss-preset-env')({
    //   stage: 0,
    //   features: {
    //     'nesting-rules': true
    //   }
    // })
  ],
};

export default config;
