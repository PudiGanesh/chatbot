let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let inputEl = document.getElementById("userInput");
let btnEl = document.getElementById("sendMsgBtn");

function chatBot(chatContEl) {
    let lenOfList = chatbotMsgList.length;
    let msgBot = chatbotMsgList[Math.ceil(Math.random() * lenOfList) - 1];

    let contEl = document.createElement("div");
    contEl.classList.add("msg-from-chatbot-container");
    chatContEl.appendChild(contEl);

    let spanEl = document.createElement("span");
    spanEl.classList.add("msg-from-chatbot");
    spanEl.textContent = msgBot;
    contEl.appendChild(spanEl);
}

btnEl.onclick = function() {
    let inputvalue = inputEl.value;

    let chatContEl = document.getElementById("chatContainer");
    let contdivEl = document.createElement("div");
    contdivEl.classList.add("msg-to-chatbot-container");
    chatContEl.appendChild(contdivEl);

    let span2El = document.createElement("span");
    span2El.textContent = inputvalue;
    span2El.classList.add("msg-to-chatbot");
    contdivEl.appendChild(span2El);


    inputEl.value = "";
    chatBot(chatContEl);
}
