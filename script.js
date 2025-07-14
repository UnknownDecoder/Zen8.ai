const chatForm = document.getElementById('chat-form');
const userInput = document.querySelector('.user-input');
const messagesDiv = document.getElementById('messages');
const sendBtn = document.querySelector('.sendBtn')
var wrapped = document.querySelector('.wrapped');
var cont = document.querySelector('.container');

userInput.addEventListener('input', () => {
    if (userInput.value.trim() === '') {
        sendBtn.disabled = true;
    } else {
        sendBtn.disabled = false;
    }
})

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        displayMessage(message, "user");
        userInput.value = '';
        sendBtn.disabled = true;
    }
    setTimeout(() => getResponse(message), 2000);

}


sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        sendMessage()
    }
});


function getResponse(msg) {
    fetch(`https://decoder-brain.onrender.com/chat?msg=${encodeURIComponent(msg)}`)
        .then(res => res.json())
        .then(data => {
            displayMessage(data.reply, data.name)
        }).catch((error) => console.log(error))
}

function displayMessage(text, sender) {
  const msgDiv = document.createElement('div');
  if (sender==="user") {
      msgDiv.classList.add('message', 'user-message');
  } else {
      msgDiv.classList.add('message')
  }
  msgDiv.textContent = text;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}


function loading(){
    wrapped.style.display = 'none';
    cont.style.display = 'flex';
}


// if u wanna decrease or increase the loading time
setTimeout(loading, 3000)


let label = document.querySelector('.label');
let sidebar = document.querySelector('.sidebar')
label.addEventListener('click',()=>{
  
})
