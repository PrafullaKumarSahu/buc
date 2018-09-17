$(function() {
  $('#calendar').fullCalendar({
    header: { 
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
     },
    views: {
      month: {
        titleFormat: 'YYYY, MM, DD'
      }
    },
    validRange: function(nowDate) {
      return {
        start: nowDate,
        end: nowDate.clone().add(1, 'months')
      };
    },
    navLinks: true,
    selectable: true,
    selectHelper: true,
    select: function(start, end) {
      startDate = moment(new Date(start)).format("MM-DD-YYYY");
      $('#createBookingModal .modal-header .modal-title span').text(startDate);
      $('#createBookingModal').modal('show');
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: function(start, end, timezone, callback){
      $.ajax({
        url: '/api/bookings',
        dataType: 'json',
        data: {
            start: start.unix(),
            end: end.unix(),
        },
        success: function(response){
          var events = [];
          $(response).each(function(){
            events.push({
                title: $(this).attr('title'),
                start: $(this).attr('start_time'),
                end: $(this).attr('end_time'),
            });
          });
          callback(events);
        }
      });
    },
    eventClick: function(event, jsEvent, view) {
      if ( event.end == null ){
        event.end = event.start;
      }
      startDate = moment(new Date(event.start)).format("MM-DD-YYYY");
      endDate = moment(new Date(event.end)).format("MM-DD-YYYY");
      
      $('#modalTitle').text(event.title);
      $('#modalBody .start span').text(startDate);
      $('#modalBody .end span').text(endDate);
      $('#fullCalModal').modal('show');
    },

    loading: function(bool) {
        $('#loading').toggle(bool);
    }
  });

  $('#submitButton').on('click', function(e){
      e.preventDefault();
      doSubmit();
  });

  function doSubmit(){
    //validate end date here
    endDate = new Date($('#bookingEndDate').val());
    if (! moment(endDate, 'MM/DD/YYYY', true).isValid() ){
      alert('Invalid Date');
    } else {
      eventData = {
        title: $('#bookingName').val(),
        start: new Date($('#createBookingModal .modal-header .modal-title span').text()),
        end: endDate
      };
      $.ajax({
          url: '/api/bookings/create',
          data: {
            title: eventData.title,
            start_time: eventData.start,
            end_time: eventData.end
          },
          success: function(response){
            console.log(response);
            // if ( response == 0 ){
            //   alert('Invalid Date');
            //   return false;
            // } else {
            //   return true;
            // }
          }
        });
        $('#createBookingModal form').get(0).reset();
        $("#createBookingModal").modal('hide');
        $("#calendar").fullCalendar('renderEvent', eventData, true);
        $('#calendar').fullCalendar('unselect');
    }
  }
});