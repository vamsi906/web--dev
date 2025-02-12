const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const botResponses = {
    "hi": ["Hello! How’s your day going? 😊", "Hey there! What’s up?", "Hi! Need help with something?"],
    "hello": ["Hey! How can I help?", "Hi! How’s your day?", "Hello! Nice to see you!"],
    "how are you": ["I’m great! How about you?", "Feeling awesome! What about you?", "I’m just a bot, but I’m doing well!"],
    "what are you doing": ["Just chatting with you! 😊", "Waiting for your next message!", "Thinking about AI stuff!"],
    "what’s up": ["Not much, just chilling here. You?", "Same old, same old! What about you?", "Just enjoying our conversation!"],
    "how was your day": ["Pretty good! What about yours?", "My day is going well! Thanks for asking.", "Just another day in AI land!"],
    "bye": ["Goodbye! Have a great day! 👋", "See you later! Take care!", "Bye! Hope to chat again soon!"],
    "thank you": ["You’re welcome! 😊", "Anytime! Happy to help.", "No problem!"],
    "what can you do": [
        "I can chat, tell jokes, answer questions, and even give fun facts! 😊",
        "I can assist with general knowledge, tech-related queries, and casual chats!",
        "I can provide information, tell jokes, and keep you entertained!"
    ],
    "who created you": ["I was created by a smart developer like you! 😊", "A programmer brought me to life!", "A human coded me!"],
    "tell me a joke": [
        "Why don’t skeletons fight each other? Because they don’t have the guts! 😂",
        "What do you call fake spaghetti? An impasta! 😆",
        "Why did the computer catch a cold? Because it left its Windows open! 🤖"
    ],
    "tell me a fun fact": [
        "Did you know? The longest word in the English language is 189,819 letters long! 😲",
        "Bananas are berries, but strawberries aren't! 🍓🍌",
        "A day on Venus is longer than a year on Venus! 😲"
    ],
    "do you like me": ["Of course! You’re awesome! 😊", "Yes! I love chatting with you!", "I enjoy talking with you!"],
    "are you human": ["I’m a chatbot, but I try my best to be human-like! 😊", "Nope, I’m all AI! But I love chatting!"],
    "what is your favorite color": ["I like green! It reminds me of growth. 🌿", "Blue! It’s calm and peaceful. 💙", "I like all colors!"],
    "how old are you": ["I was created recently, so I’m quite young! 😊", "I’m just a few lines of code old!", "Age is just a number, right?"],
    "are you smart": ["I try my best! 😊", "I know a lot, but I’m always learning!", "I have a lot of knowledge, but humans are smarter!"],
    "do you have emotions": ["I don’t have real emotions, but I can understand yours! 😊", "I can simulate emotions, but I don’t feel them."],
    "what’s your favorite food": ["I don’t eat, but I’d love to try pizza! 🍕", "Food? I run on data!"],
    "can you learn": ["I don’t learn on my own, but my developers improve me!", "Right now, I work with pre-programmed responses!"],
    "what’s the meaning of life": ["42! (Just kidding 😆)", "To be happy and make others happy!", "That’s a deep question! What do you think?"]
};


function getBotResponse(input) {
    input = input.toLowerCase();
    return botResponses[input] 
        ? botResponses[input][Math.floor(Math.random() * botResponses[input].length)] 
        : "I’m not sure about that. Can you ask me something else? 🤔";
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
        appendMessage("Bhai_AI", botResponse);
    }, 700); // 700ms delay for a natural feel

    userInput.value = ''; // Clear input field
}

// Event Listeners for sending messages
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') 
        sendMessage();
});
