import compiler from 'vue-template-babel-compiler';

export default {
  loading: false,
  router: {
    middleware: ['route'],
  },
  server: {
    host: '0',
  },
  head: {
    title: 'nuxt2-template',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/apple-icon-57x57.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/apple-icon-60x60.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/apple-icon-72x72.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/apple-icon-76x76.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/apple-icon-114x114.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/apple-icon-120x120.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/apple-icon-144x144.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/apple-icon-152x152.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-icon-180x180.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/android-icon-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon-96x96.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      //{ rel: 'manifest', href: '/manifest.json' },
    ],
    script: [
    ],
  },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/styles/common/normalize.css',
    '@/styles/common/common.less',
  ],

  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '@/plugins/vant' },
    { src: '@/plugins/axios' },
    { src: '@/plugins/auto-sign-in' },
    { src: '@/plugins/error-handler' },
    { src: '@/plugins/alert-handler' },
    { src: '@/plugins/set-cookie' },
    { src: '@/plugins/filters' },
    { src: '@/plugins/vuex-router-sync' },
    { src: '@/plugins/global-functions' },
    { src: '@/plugins/vue-infinite-loading', ssr: false },
    { src: '@/plugins/vue-awesome-swiper', ssr: false },
  ],

  components: [
    { path: '~/components/app/basic/', prefix: 'Basic' },
    { path: '~/components/app/native/', prefix: 'Native' },
    { path: '~/components/admin', prefix: 'Admin' },
  ],

  buildModules: ['@nuxtjs/eslint-module'],

  modules: ['@nuxtjs/axios', 'cookie-universal-nuxt', '@nuxtjs/style-resources'],

  axios: {
    baseURL: 'http://localhost:8080',
  },

  build: {
    transpile: [/^element-ui/],
    loaders: {
      vue: {
        compiler,
      },
    },
  },
  styleResources: {
    less: [
      '@/styles/less/typhography.less',
      '@/styles/less/colors.less',
      '@/styles/less/media.less',
    ],
  },
};
