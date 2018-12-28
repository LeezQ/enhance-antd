// doczrc.js
import { css } from 'docz-plugin-css';

export default {
  title: 'My Cool Project',
  typescript: true,
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/antd/3.11.6/antd.min.css',
        },
      ],
    },
  },
  plugins: [
    css({
      preprocessor: 'less',
      cssmodules: true,
      loaderOpts: {
        /* whatever your preprocessor loader accept */
      },
    }),
  ],
};
