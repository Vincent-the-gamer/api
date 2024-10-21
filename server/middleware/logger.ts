import { Logger, ILogObj } from "tslog";

const logger: Logger<ILogObj> = new Logger()

export default defineEventHandler((event) => {
    logger.info(`Request: method=${event.method}, path=${event.path}`)
})