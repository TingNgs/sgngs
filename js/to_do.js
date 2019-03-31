formatGoogleCalendar.init({
  calendarUrl:
    'https://www.googleapis.com/calendar/v3/calendars/xnxgxsx1997@gmail.com/events?key=AIzaSyBSYBPSURoOqLRWRZRe-ZQT9lUgLrd960Y',
  past: false,
  upcoming: true,
  sameDayTimes: true,
  dayNames: true,
  pastTopN: -1,
  upcomingTopN: 3,
  itemsTagName: 'li',
  upcomingSelector: '#events-upcoming',
  recurringEvents: true,
  upcomingHeading: '<h2>Upcoming events</h2>',
  pastHeading: '<h2>Past events</h2>',
  format: [
    '*date*',
    ': ',
    '*summary*',
    ' — ',
    '*description*',
    ' in ',
    '*location*'
  ],
  timeMin: '2016-06-03T10:00:00-07:00',
  timeMax: '2020-06-03T10:00:00-07:00'
});
