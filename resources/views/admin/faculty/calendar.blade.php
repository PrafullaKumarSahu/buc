@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Menu</div>
                <div class="card-body">
                    <ul class="nav flex-column">
                         <li class="nav-item">
                            <a class="nav-link" href="{{ route('home') }}">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('faculty.calendar') }}">Faculty Calendar</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body full-calendar">
                    <div id='calendar'></div>
                    <div id="createBookingModal" class="modal fade">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Add an Event</h4>
                                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span> <span class="sr-only">close</span></button>
                                </div>
                                <div id="modalBody" class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="bookingName">Booking Title</label>
                                            <input class="form-control" type="text" placeholder="Booking Name" id="bookingName">
                                        </div>

                                        <div class="form-group">
                                            <label for="booingStartDate">Start Date</label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" id="booingStartDate" class="form-control" placeholder="mm/dd/yyyy">
                                                <div class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label for="bookingDueDate">Due Date</label>
                                            <div class="input-group date" data-provide="datepicker">
                                                <input type="text" id="bookingDueDate" class="form-control" placeholder="mm/dd/yyyy">
                                                <div class="input-group-addon">
                                                    <span class="glyphicon glyphicon-calendar"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <!--<div class="form-group">
                                            <textarea class="form-control" type="text" rows="4" placeholder="Booking Description" id= "eventDescription"></textarea>
                                        </div>-->
                                    </div>
                                    <div class="modal-footer">
                                        <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                                        <button type="submit" class="btn btn-primary" id="submitButton">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fullCalModal" class="modal fade">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h4 id="modalTitle" class="modal-title"></h4>
                                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span> <span class="sr-only">close</span></button>
                                        </div>
                                        <div id="modalBody" class="modal-body">
                                            <p class="start">Start At: <span></span></p>
                                            <p class="end">End At: <span></span></p>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                            <button class="btn btn-primary"><a id="eventUrl" target="_blank">Event Page</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
        </div>
    </div>
</div>
@endsection
