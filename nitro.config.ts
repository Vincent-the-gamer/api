// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  logLevel: 2,
  errorHandler: '~/error',
  runtimeConfig: {
    /**
     * env:
     * production: "prod"
     * deploy on vercel: "vercel"
     */
    env: 'vercel',
    baseUrl: 'your_api_deploy_location',
  },
  compatibilityDate: '2024-11-16',
  // Cross Origin
  routeRules: {
    '/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Method': 'PUT,POST,GET,DELETE,OPTIONS',
      },
    },
  },
})
