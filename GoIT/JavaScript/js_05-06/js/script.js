var elemTimerStart = document.getElementById('btnStart');
 elemTimerStart.addEventListener('click', StartTimer);

var elemTimerClear = document.getElementById('btnClear');
 elemTimerClear.addEventListener('click', ClearTimer);

var first = new Date(0, 0);
var mili_sec = 0;
var sec = 0;
var min = 0;
var hr = 0;
var timer;

function StartTimer(){
  elemTimerStart.classList.add('btn-warning');
  elemTimerStart.classList.remove('btn-success');
  elemTimerStart.innerHTML = 'Pause';
  timer = setInterval(Increment, 4);

  elemTimerStart.removeEventListener("click", StartTimer);
  elemTimerStart.addEventListener("click", PauseTimer);
}

function PauseTimer(){
  elemTimerStart.classList.add('btn-primary');
  elemTimerStart.classList.remove('btn-warning');
  elemTimerStart.innerHTML = 'Cont..';
  clearInterval(timer);

  elemTimerStart.removeEventListener("click", PauseTimer);
  elemTimerStart.addEventListener("click", StartTimer);
}

function ClearTimer(){
  elemTimerStart.classList.add('btn-success');
  elemTimerStart.classList.remove('btn-warning');
  elemTimerStart.innerHTML = 'Start';

  document.getElementById('myTimer').innerHTML = '00:00:00';
  document.getElementById('m_sec').innerHTML = '0';
  
  ClearTime();

  elemTimerStart.removeEventListener("click", PauseTimer);
  elemTimerStart.addEventListener("click", StartTimer);
}

function Increment(){
  first.setMilliseconds( first.getMilliseconds() + 4);
  var mili_sec = first.getMilliseconds();

    if ( mili_sec >= 996) {
      ++sec;
    }
    if (sec >= 60) {
      sec = 0;
      ++min;
    }
    if (sec < 10) {
      secShow = '0' + sec;
    } else {
      secShow = sec;
    }

    if (min >= 60) {
      min = 0;
      ++hr;
    }    
    if (min < 10) {
      minShow = '0' + min;
    } else {
      minShow = min;
    }

    if (hr < 10) {
      hrShow = '0' + hr;
    } else {
      hrShow = hr;
    }

  document.getElementById('myTimer').innerHTML = hrShow + ':' + minShow + ':' + secShow;
  document.getElementById('m_sec').innerHTML = mili_sec;
  }
  function ClearTime(){
    clearInterval(timer);
    mili_sec = 0;
    sec = 0;
    min = 0;
    hr = 0;    
  }