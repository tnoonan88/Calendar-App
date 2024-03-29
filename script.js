var plannerEl = document.getElementById('planner');
var currentDayEl = document.getElementById('currentDay');
var today = moment().format('dddd, MMMM do');
var currentTime = moment().format('H');

var planSchedule = [
    { time: "9 AM", military: 9, event: "" },
    { time: "10 AM", military: 10, event: "" },
    { time: "11 AM", military: 11, event: "" },
    { time: "12 PM", military: 12, event: "" },
    { time: "1 PM", military: 13, event: "" },
    { time: "2 PM", military: 14, event: "" },
    { time: "3 PM", military: 15, event: "" },
    { time: "4 PM", military: 16, event: "" },
    { time: "5 PM", military: 17, event: "" },
  ];

$('#currentDay').text(today);

var colorRow = function(timeSlot) {
    console.log(timeSlot)
    console.log(currentTime)
    if (timeSlot > currentTime) {
        return 'future'
    }
    else if (timeSlot < currentTime) {
        return 'past'
    }
    else {
    return 'present'
    }
}
planSchedule.forEach(function(timeSlot, index) {
    var timeLabel = timeSlot.time;
    var blockColor = colorRow(timeSlot.military);
    var row = 
    `<div class="time-slot" id="${index}">
    <div class="row no-gutters input-group">
    <div class="col-sm col-lg-1 input-group-prepend hour justify-content-sm-end pr-3 pt-3">${timeLabel}</div>
    <textarea class="form-control ${blockColor} ">${timeSlot.event}</textarea>
    <div class="col-sm col-lg-1 input-group-append">
    <button class="saveBtn btn-block" type="submit"><i class="fas fa-save"></i></button>
    </div>
    </div>
    </div>`;

    $('#planner').append(row);
});

var saveBtnArray = $('.saveBtn');

saveBtnArray.map(function(button){
    saveBtnArray[button].addEventListener('click', function() {
        console.log('hit')
    })
})