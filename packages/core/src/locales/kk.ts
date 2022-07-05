import { LocaleInput } from '@fullcalendar/common'

export default {
  code: 'kk',
  week: {
    dow: 1,  // Monday is the first day of the week.
    doy: 7,  // The week that contains Jan 1st is the first week of the year.
  },
  buttonText: {
    prev: 'Алдыңғы',
    next: 'Келесі',
    today: 'Бүгін',
    month: 'Ай',
    week: 'Апта',
    day: 'Күн',
    list: 'Күн тәртібі',
  },
  weekText: 'Апта',
  allDayText: 'Күні бойы',
  moreLinkText(n) {
    return '+ тағы ' + n
  },
  noEventsText: 'Оқиғалар табылмады',
} as LocaleInput
