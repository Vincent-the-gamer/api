export function useBaseUrl(event: any): string {
    const { baseUrl, env } = useRuntimeConfig(event)
    const vercelBase = 'https://vince-api.vercel.app'

    let base = baseUrl

    if (env === 'vercel') {
        base = vercelBase
    }

    return base
}