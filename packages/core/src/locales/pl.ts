import { LocaleInput } from '../index.js'

export default {
  code: 'pl',
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Poprzedni',
    next: 'Następny',
    today: 'Dziś',
    year: 'Rok',
    month: 'Miesiąc',
    week: 'Tydzień',
    day: 'Dzień',
    list: 'Plan',
  },
  weekText: 'Tydz',
  allDayText: 'Cały dzień',
  moreLinkText: 'Więcej',
  noEventsText: 'Brak wydarzeń do wyświetlenia',
} as LocaleInput
