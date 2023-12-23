


//const input = document.getElementById('input');

input.addEventListener('click', addingEventListener ); 

function addingEventListener() {
const input = document.getElementById('input');

input.addEventListener('click', clickAlert);

function clickAlert() {
  alert('I was clicked!');
}
}
