console.log("This is javascript");
const alarmSubmit = document.getElementById('alarmSubmit');


alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('abc.mp3');

function ringBell() {
    audio.play();
}


function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
