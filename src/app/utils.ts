export function formatDate(date: Date | string): string | number | Date {
    console.log('date to transform', date)
    console.log('type of date to transform', typeof date)
    let newDate: Date | string
    switch(typeof date) {
      case 'object':
        date = date as Date
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        newDate = `${day}-${month}-${year}`
      break;
      case 'string':
        date = date as string
        const parts = date.split('-')
        newDate = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]))
      break;
    }
    console.log('transformed date', newDate)
    console.log('type of transformed date', typeof newDate)
    return newDate
  }