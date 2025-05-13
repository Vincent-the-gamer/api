# API

Self-hosted API.

## Documentation

https://api.vince-g.xyz/

### Code Runner

By default, it uses `local runner` in **dev** and **prod** environment but `remote runner` in Vercel.

> [!TIP]
> You can manually choose remote runner in **dev** and **prod** environment by giving { "type"="remote" } in `codeRunner` API.

#### Local Run

Supported languages:

| Language | Variable | Note |
|  -     |   - | - |
| JavaScript | js |  |
| Wenyan-lang| wy | |
| Python 2 | py | Only work if `python` command is available. |
| Python 3 | py3 | Only work if `python3` command is available. |

#### Remote Run

Supported languages:

| Language | Variable | Note |
|  -     |   - | - |
| JavaScript | javascript |  |
| TypeScript | typescript | |
| Python | python | |
| Java | java ||
| C++ | cpp ||
| C | c ||
| Rust | rust | |

## Dev

### Dev environment variables

With prefix: `NITRO_`

```
NITRO_BASE_URL=xxx
```

### Puppeteer Config

The `/directLink` API will use `Puppeteer` sometimes, so you need to configure your `path to Chrome` in `fast-dirpy.config.ts`

```ts
import { defineConfig } from 'fast-dirpy'

export default defineConfig({
  proxy: {
    protocol: 'http',
    host: '127.0.0.1',
    port: 7890,
  },
  timeout: 20000,
  // puppeteer configs
  puppeteer: {
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true
  }
})
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
