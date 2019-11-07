// ===== MAKE CONNECTION =====
var socket = io.connect("http://localhost:3000"); 

// ===== QUERY DOM =====
var message = $("#message");
var handle = $("#handle");
var button = $("#send");
var output = $("#output");
var feedback = $("#feedback");


// ===== EMIT EVENTS =====
button.on("click", function() {
    // console.log(message.val());
    socket.emit("chat", {
        message: message.val(),
        handle: handle.val()
    });
});

message.keypress(function() {
    socket.emit("typing", handle.val());
});

// ===== LISTEN FOR EVENTS =====
socket.on("chat", function(data) {
    // output.append("<p><strong>" + data.handle + ": </strong>" + data.message + "</p>" );
    var messageDiv = $("<div>").attr("id", "message-container");
    var buttonLike = $("<button>").attr("id","like").attr("data", data.message);
    var icon = $("<i>").attr("class", "fa fa-thumbs-up like");
    buttonLike.append(icon);
    messageDiv.html("<p><strong>" + data.handle + ": </strong>" + data.message + "</p>").append(buttonLike);
    // console.log(buttonLike);
    output.append($(messageDiv));
    message.val("");
        
});

socket.on("typing", function(data) {
    feedback.html("<p><em>" + data + " is typing a message...</em></p>");
    
});