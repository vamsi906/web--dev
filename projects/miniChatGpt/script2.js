const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
    "hi": ["Hello! How can I assist you today?", "Hey there!"],
    "hello": ["Hey!", "Hi there! How's it going?"],
    "how are you": ["I'm doing great! Thanks for asking.", "I'm just a bot, but I'm feeling fantastic!"],
    "bye": ["Goodbye! Take care!", "See you later!"],
    "help": ["Sure, I can help! What do you need assistance with?"],
    "what is 10 times 2": ["20", "10 times 2 is 20!"]
};

// Function to get a bot response
function getBotResponse(input) {
    input = input.toLowerCase();
    return botResponses[input] ? botResponses[input][Math.floor(Math.random() * botResponses[input].length)] : "Oops! I didn't quite catch that.";
}

// Function to create and append a message bubble
function appendMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    messageElement.classList.add(sender === "You" ? 'user-msg' : 'bot-msg');

    // Smooth appearance animation
    messageElement.style.opacity = 0;
    chatBox.appendChild(messageElement);
    setTimeout(() => messageElement.style.opacity = 1, 100);

    // Auto-scroll to the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to send and display the message
function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return; // Prevent sending empty messages

    appendMessage("You", userMessage);

    // Simulate bot typing delay
    setTimeout(() => {
        const botResponse = getBotResponse(userMessage);
        appendMessage("Bot", botResponse);
    }, 700); // 700ms delay for a natural feel

    userInput.value = ''; // Clear input field
}

// Event Listeners for sending messages
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
