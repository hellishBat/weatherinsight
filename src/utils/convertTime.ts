// convertTime
import moment from 'moment'

export const convertTime = (unixTime: number, unixTimezoneOffset: number, format: string) => {
  switch (format) {
    case '24Hours':
      return moment
        .unix(unixTime + unixTimezoneOffset)
        .utc()
        .format('HH:mm')
      break

    case 'dayOfWeek':
      return moment
        .unix(unixTime + unixTimezoneOffset)
        .utc()
        .format('ddd')
      break

    case 'fullDate':
      return moment
        .unix(unixTime + unixTimezoneOffset)
        .utc()
        .format('MMMM Do YYYY, HH:mm')
      break
  }
}
