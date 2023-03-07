function setChatColorsV() {  
	$(".linewrap [data-c]").each(function(e) {
		var color = $(this).data("c").replace("uc", "#");
		$(this).parent().closest('div').find(".username").css("color", color);
	});
}

$(function () {
    var usernameColor = "#c8c8c8";
    if(typeof localStorage.usernameColor !== "undefined") {
        usernameColor = localStorage.usernameColor;
    }

    $("#chat-controls").prepend('<input type="color" id="usernameColorBtn" value="' + usernameColor + '">');
    $("body").on("change", "#usernameColorBtn", function(e) {
        localStorage.usernameColor = $("#usernameColorBtn").val();
    });
	setChatColorsV();
	$("body .linewrap").on('DOMSubtreeModified', function(){  	
		setChatColorsV();
	});
});

(function(){
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.1/socket.io.js').done(()=>{
	document.getElementById('chatline').outerHTML = document.getElementById('chatline').outerHTML;
	$("#chatline").keydown(function(ev) {
		// Enter/return
		if(ev.keyCode == 13) {
			if (CHATTHROTTLE) {
				return;
			}
			var msg = $("#chatline").val();
			if(msg.trim()) {
				var meta = {};
				if (USEROPTS.adminhat && CLIENT.rank >= 255) {
					msg = "/a " + msg;
				} else if (USEROPTS.modhat && CLIENT.rank >= Rank.Moderator) {
					meta.modflair = CLIENT.rank;
				}

				// The /m command no longer exists, so emulate it clientside
				if (CLIENT.rank >= 2 && msg.indexOf("/m ") === 0) {
					meta.modflair = CLIENT.rank;
					msg = msg.substring(3);
				}

				if($("#usernameColorBtn").length > 0) {
					msg = $("#usernameColorBtn").val().replace("#", "uc") + msg;
				}		

				socket.emit("chatMsg", {
					msg: msg,
					meta: meta
				});
				CHATHIST.push($("#chatline").val());
				CHATHISTIDX = CHATHIST.length;
				$("#chatline").val("");
			}
			return;
		}
		else if(ev.keyCode == 9) { // Tab completion
			chatTabComplete();
			ev.preventDefault();
			return false;
		}
		else if(ev.keyCode == 38) { // Up arrow (input history)
			if(CHATHISTIDX == CHATHIST.length) {
				CHATHIST.push($("#chatline").val());
			}
			if(CHATHISTIDX > 0) {
				CHATHISTIDX--;
				$("#chatline").val(CHATHIST[CHATHISTIDX]);
			}

			ev.preventDefault();
			return false;
		}
		else if(ev.keyCode == 40) { // Down arrow (input history)
			if(CHATHISTIDX < CHATHIST.length - 1) {
				CHATHISTIDX++;
				$("#chatline").val(CHATHIST[CHATHISTIDX]);
			}

			ev.preventDefault();
			return false;
		}
	});
})})();