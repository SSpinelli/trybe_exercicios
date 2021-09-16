function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
const ulPai = document.querySelector('#days');

function createDaysOfMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const days = dezDaysList[index];
    const daysListItem = document.createElement('li');
    daysListItem.innerHTML = days;
    daysListItem.classList.add('day');
    if(days === 24 || days === 25 || days === 31) {
      daysListItem.classList.add('holiday');
    }
    if(days === 4 || days === 11 || days === 18 || days === 25) {
      daysListItem.classList.add('friday');
    }
   
    ulPai.appendChild(daysListItem);
  }
}
createDaysOfMonth();
// Exercício 02
function holidayBtn(string) {
  const btn = document.createElement('button');
  const divPai = document.querySelector('.buttons-container');
  btn.id = 'btn-holiday';
  btn.innerText = string;
  divPai.appendChild(btn);
}
holidayBtn('Feriados');
// Exercício 03
function holidayColorShow() {
  const holidays = document.getElementsByClassName('holiday');
  for (let index = 0; index < holidays.length; index += 1) {
    if (holidays[index].style.background === 'white') {
      holidays[index].style.background = '#229977';
      holidays[index].style.color = 'white';
    } else {
      holidays[index].style.background = 'white';
      holidays[index].style.color = '#777';
    }
  }
}
document.getElementById('btn-holiday').addEventListener('click', holidayColorShow)
// Exercício 04
function fridayBtn(string) {
  const btn = document.createElement('button');
  const paiDoBtn = document.querySelector('.buttons-container');
  btn.id = 'btn-friday';
  btn.innerHTML = string;

  paiDoBtn.appendChild(btn);
}
fridayBtn('Sexta-feira');
// Exercício 05
function fridayTextMania() {
  const itsFridayThen = document.getElementsByClassName('friday')
  for(let index = 0; index < itsFridayThen.length; index += 1) {
    const fridays = [4, 11, 18, 25]
    if(itsFridayThen[index].innerText  ^= "4 11 18 25") {
      itsFridayThen[index].innerText = 'SEXTOUUU!'
    } else {
      itsFridayThen[index].innerText = fridays[index];
    }
  }
}
document.getElementById('btn-friday').addEventListener('click', fridayTextMania)
// Exercicio 06
const days = document.getElementsByClassName('day');
for(index = 0; index < days.length; index += 1) {
    days[index].addEventListener('mouseover', zoomTheDay)
    days[index].addEventListener('mouseleave', unZoomTheDay)
    days[index].addEventListener('click', coloringTheCalendar)
}
function zoomTheDay(mouseOver) {
  mouseOver.target.style.fontSize = '50px'
}
function unZoomTheDay(mouseLeave) {
  mouseLeave.target.style.fontSize = '20px'
}
// Exercício 07
function myTasks(string) {
  const task = document.createElement('span');
  const divPai = document.querySelector('.my-tasks')
  task.innerText = string
  divPai.appendChild(task)
}
myTasks('cozinhar')
// Exercício 08
function giveTaskAColor(cor) {
  const colorForTask = document.createElement('div')
  const divPai = document.querySelector('.my-tasks')

  colorForTask.classList.add('task')
  colorForTask.style.background = cor
  divPai.appendChild(colorForTask)
}
giveTaskAColor('green')
// Exercício 09
function taskSelector(input) {
  if (input.target.classList[1] === 'task-selected') {
    input.target.classList.remove('task-selected')
  } else {
    input.target.classList.add('task-selected')
  }
}
document.querySelector('.task').addEventListener('click' ,taskSelector)
// Exercício 10
function coloringTheCalendar(input) {
  const taskColor = document.querySelector('.task-selected').style.background;
  if (input.target.style.background === 'white') {
    console.log('entrei')
    input.target.style.background = taskColor;
    input.target.style.color = 'white'
  } else {
    input.target.style.background = 'white';
    input.target.style.color = '#777'
  }
}
// Exercício Bônus
