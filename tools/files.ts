import path, { dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { readdirSync } from "node:fs"

/**
 * Get file names by relative dir of project directory.
 * @param relativeDir relative dir of project base dir.
 * @returns file names array
 */
export function getFileNamesByDirectory(relativeDir: string): string[] {
    const __dirname = dirname(
        fileURLToPath(import.meta.url)
    )
    const projectDir = path.join(__dirname, "../../")
    
    let files = readdirSync(
        path.join(projectDir, relativeDir)
    )
    return files.filter(name => name !== ".DS_Store")
}