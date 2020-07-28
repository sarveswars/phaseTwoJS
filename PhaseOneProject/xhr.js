let worksSection = document.getElementById('schedule');

//store the request url
let requestURL = 'https://sarveswars.github.io/phaseTwoJS/PhaseOneProject/main.json';

let request = new XMLHttpRequest();

request.open("GET", requestURL);

request.responseType = "json";

request.send();

request.onload = function(){
  let dailyWorks = request.response;
  console.log(dailyWorks);
  workInfo(dailyWorks);
};

function workInfo(jsonObj){
  let workInfo = jsonObj['dailyWorks'];
  for(let i = 0; i < workInfo.length; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'col-md-3');
    let work = document.createElement('h3');
    let time = document.createElement('p');
    let image = document.createElement('img');

    image.setAttribute('src', 'https://sarveswars.github.io/phaseTwoJS/PhaseOneProject/images/' + workInfo[i].image);
    image.setAttribute('alt', workInfo[i].work);
    work.textContent = workInfo[i].work;
    time.textContent = workInfo[i].time;

    div.appendChild(work);
    div.appendChild(time);
    div.appendChild(image);

    worksSection.appendChild(div);

  }

}
