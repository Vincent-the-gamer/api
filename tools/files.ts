import { readdirSync, writeFileSync } from "fs"
import { ensureFile } from "fs-extra"

export function readFileNames(dir: string): string[] {
    let files = readdirSync(dir)
    return files.filter(name => name !== ".DS_Store")
}

export async function writeFile(file: string, data: any) {
    await ensureFile(file)
    writeFileSync(file, data)
}