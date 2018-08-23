$(function() {
  $('#calendar').fullCalendar({
    header: { 
//      center: 'month,agendaWeek',
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
     }, // buttons for switching between views
    views: {
      month: { // name of view
        titleFormat: 'YYYY, MM, DD'
        // other view-specific options here
      }
    },
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      var title = prompt('Booking Title:');
      var eventData;
      if (title) {
        eventData = {
          title: title,
          start: start,
          end: end
        };
        $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
      }
      $('#calendar').fullCalendar('unselect');
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2018-08-01'
      },
      {
        title: 'Long Event',
        start: '2018-08-07',
        end: '2018-08-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-08-11',
        end: '2018-08-13'
      },
      {
        title: 'Meeting',
        start: '2018-08-12T10:30:00',
        end: '2018-08-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-08-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-08-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-08-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-08-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-08-28'
      }
    ],
    eventClick: function(event) {
      // opens events in a popup window
        var booking = window.open("", "BookingDetails", "width=200,height=100");
        booking.document.write("<p>" + event.title + "</p>");
      return false;
    },

    loading: function(bool) {
      $('#loading').toggle(bool);
    }
  });
});