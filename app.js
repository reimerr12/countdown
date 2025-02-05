const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2024,6,16,11,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${weekday}, ${date}nd ${month} ${year} ${hours}:${mins}am`

//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;

  //1s=1000ms
  //1min = 60s
  //1hour = 60min
  //1day = 24hours

  //values in ms

  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;

  let days = t/oneDay;
  days = Math.floor(days);
  let hours = (t%oneDay)/oneHour;
  hours = Math.floor(hours);
  let minutes = Math.floor(t % oneHour/oneMin);
  let seconds = Math.floor(t % oneMin/1000);

  // set values array
  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item<10){
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`
  }
}

//countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();











