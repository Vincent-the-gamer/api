import { readdirSync } from "node:fs"
import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"

let __dirname = dirname(
    fileURLToPath(import.meta.url)
)

export function readFileNames(dir: string): string[] {
    let files = readdirSync(dir)
    return files.filter(name => name !== ".DS_Store")
}

export function getPublicDir(event: any): string {
    const { env } = useRuntimeConfig(event)
    let _path: string
    if(env == "dev") {
        _path = path.resolve(__dirname, "../../server/public")
    } else {
        _path = path.resolve(__dirname, "../public")
    }
    return _path
}
