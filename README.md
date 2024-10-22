# API

Self-hosted API.

## Dev environment variables

With prefix: `NITRO_`

```
NITRO_BASE_URL=xxx
```

## Production

Config your runtime environment variables in `nitro.config.ts`, this will overwrite same variable
named `NITRO_xxx`

For example:

```ts
export default defineNitroConfig({
  srcDir: 'server',
  logLevel: 2,
  runtimeConfig: {
    baseUrl: "your_api_deploy_location",
    port: 3001
  }
})
```

`baseUrl` replaces `NITRO_BASE_URL` in production build(runtime).

## Auto-import Directories

- server/api/
- server/routes/
- server/utils/
- server/plugins/
- server/middleware/

# License

[MIT License 2024-present @ Vincent-the-gamer](./LICENSE)
