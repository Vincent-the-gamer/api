# API

Self-hosted API.

## Documentation

https://api.vince-g.xyz/

### Meizi("Girl" in Chinese)

Parameters:

```
key: "type"
options: [
    "common",
    "ayachi_nene",
    "mitsukasa_ayase",
    "murasame",
    "tomotake_yoshino"
]
```

if your "type" key is not in the options, or leave it empty, you'll get a random type and random picture.

### Code Runner

#### Local Run

Supported languages:

| Language | Variable | Note |
|  -     |   - | - |
| JavaScript | js |  |
| Wenyan-lang| wy | |
| Python 2 | py | Only work if `python` command is available. |
| Python 3 | py3 | Only work if `python3` command is available. |

#### Deploy on Vercel

Supported languages:

| Language | Variable | Note |
|  -     |   - | - |
| JavaScript | javascript |  |
| TypeScript | typescript | |
| Python | python | |
| Java | java ||
| C++ | cpp ||
| C | c ||

## Dev

### Dev environment variables

With prefix: `NITRO_`

```
NITRO_BASE_URL=xxx
```

### Log

This repo is using `tslog` as logger.

```log
2025-02-19 07:24:41.294 INFO    /.nitro/dev/index.mjs:84        Request: method=GET, path=/123
2025-02-19 07:24:41.296 ERROR   /.nitro/dev/index.mjs:74        Error: Error: Cannot find any route matching /123.
    at createError (file:///Users/<user_name>/VSCodeWorkSpace/api/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs:78:15)
    at matchHandler (file:///Users/<user_name>/VSCodeWorkSpace/api/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs:2164:16)
    at Object.handler (file:///Users/<user_name>/VSCodeWorkSpace/api/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs:2203:19)
    at Object.handler (file:///Users/<user_name>/VSCodeWorkSpace/api/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs:1978:31)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async Server.toNodeHandle (file:///Users/<user_name>/VSCodeWorkSpace/api/node_modules/.pnpm/h3@1.13.0/node_modules/h3/dist/index.mjs:2270:7)

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
    baseUrl: 'your_api_deploy_location',
    port: 3001
  }
})
```

`baseUrl` replaces `NITRO_BASE_URL` in production build(runtime).

## Deploy

Get your Node.js environment ready, and

```shell
NITRO_PORT=xxxx node .output/server/index.mjs
```

You can move your `.output` folder to anywhere and use any port.

## License

[MIT License 2024-present @ Vincent-the-gamer](./LICENSE)
