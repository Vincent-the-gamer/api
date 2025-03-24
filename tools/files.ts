import { readdirSync } from "node:fs"
import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"

export let __dirname = dirname(
    fileURLToPath(import.meta.url)
)

export function readFileNames(dir: string): string[] {
    let files = readdirSync(dir)
    return files.filter(name => name !== ".DS_Store")
}

export function getPublicDir(event: any): string {
    const { env } = useRuntimeConfig(event)
    let _path: string
    switch(env) {
        case "dev":
            _path = path.resolve(__dirname, "../../server/public")
            break
        case "prod":
            _path = path.resolve(__dirname, "../public")
            break
        case "vercel":
            _path = _path = path.resolve(__dirname, "./chunks/public")
            break
        default:
            break
    }
    return _path
}