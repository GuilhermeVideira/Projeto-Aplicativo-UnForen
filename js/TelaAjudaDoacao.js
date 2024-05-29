function toggleMenu() {
    document.getElementById("myMenu").classList.toggle('active');
    document.getElementById("overlay").classList.toggle('active');
}

function closeMenu() {
    document.getElementById("myMenu").classList.remove('active');
    document.getElementById("overlay").classList.remove('active');
}

function sendMessage() {
    var input = document.getElementById("chat-input");
    var message = input.value.trim();
    
    if (message !== "") {
        var chatMessages = document.getElementById("chat-messages");
        
        var messageElement = document.createElement("div");
        messageElement.className = "message";
        
        var authorElement = document.createElement("div");
        authorElement.className = "message-author";
        authorElement.innerHTML = '<img src="./imagens/TelaAjudaPsicologa/ImagemPerfil.png">Aline:';
        
        var textElement = document.createElement("div");
        textElement.textContent = message;
        
        messageElement.appendChild(authorElement);
        messageElement.appendChild(textElement);
        
        chatMessages.appendChild(messageElement);
        
        input.value = "";
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}