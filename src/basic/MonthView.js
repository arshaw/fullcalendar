
fcViews.month = MonthView;

function MonthView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	BasicView.call(t, element, calendar, 'month');
	var opt = t.opt;
	var option = calendar.option;
	var renderBasic = t.renderBasic;
	var formatDate = calendar.formatDate;
	
	
	
	function render(date, delta) {
		if (delta) {
			addMonths(date, delta);
			date.setDate(1);
		}
		var start = cloneDate(date, true);
		start.setDate(1);
		var end = addMonths(cloneDate(start), 1);
		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var firstDay = opt('firstDay');
		var nwe = opt('weekends') ? 0 : 1;
		var weekendDays = option('weekendDays');
		var firstDayDelta;
		if (nwe) {
			skipWeekend(visStart, weekendDays);
			skipWeekend(visEnd, weekendDays, -1, true);
			
			// find the first day not part of the week-end
			var previous = weekendDays[0]-1;
			for (var i=0; i<weekendDays.length; i++) {
			  if (weekendDays[i] != previous + 1) {
			    firstDayDelta = (previous + 1) % 7;
  			  break;
		    }
		    previous = weekendDays[i];
			}
			if (!firstDayDelta)
	      firstDayDelta = (weekendDays[weekendDays.length-1] + 1) % 7;
		}
		else {
  		firstDayDelta = firstDay;
		}
		addDays(visStart, -((visStart.getDay() - firstDayDelta + 7) % 7) );
		addDays(visEnd, (7 - visEnd.getDay() + firstDayDelta) % 7 );
		var rowCnt = Math.round((visEnd - visStart) / (DAY_MS * 7));
		if (opt('weekMode') == 'fixed') {
			addDays(visEnd, (6 - rowCnt) * 7);
			rowCnt = 6;
		}
		t.title = formatDate(start, opt('titleFormat'));
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(6, rowCnt, nwe ? 7-option('weekendDays').length : 7, true);
	}
	
	
}
