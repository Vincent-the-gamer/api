// https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  logLevel: 2,
  runtimeConfig: {
    baseUrl: "your_api_deploy_location",
    port: 3001
  }
})
