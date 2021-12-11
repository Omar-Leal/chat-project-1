import logger from 'pino'
import dayjs from 'dayjs'

/** creating the log info in server using dayjs... */
const log = logger({
  prettifier: true,
  base: {
    pid: false
  },
  timestamp: () => `,"time": "${dayjs().format()}"`,
})

export default log;
