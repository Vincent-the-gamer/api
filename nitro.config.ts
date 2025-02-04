// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  logLevel: 2,
  runtimeConfig: {
    baseUrl: 'your_api_deploy_location',
  },
  compatibilityDate: '2024-11-16',
  // Cross Origin
  routeRules: {
    '/**': {
      cors: true,
    },
  },
})
