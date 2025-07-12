const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const messagesDiv = document.getElementById('messages');
var wrapped = document.querySelector('.wrapped');
var cont = document.querySelector('.container');


chatForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const message = userInput.value.trim();
  if (message !== '') {
    displayMessage(message);
    userInput.value = '';
  }
});

function displayMessage(text) {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', 'user-message'); // Add second class
  msgDiv.textContent = text;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


function loading(){
    wrapped.style.display = 'none';
    cont.style.display = 'flex';
}


// if u wanna decrease or increase the loading time
setTimeout(loading, 7000)


let label = document.querySelector('.label');
let sidebar = document.querySelector('.sidebar')
label.addEventListener('click',()=>{
  
})
