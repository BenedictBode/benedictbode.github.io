$(function() {
    var textFilePath = "kernel.txt"; // Path to the text file
    var typingPause = 50; // Time in ms between keystrokes (5 keys per second)
    var pauseDuration = 500; // Time in ms to pause at the end of each line
    var redirectUrl = "portfolio.html"; // URL to redirect to after typing

    // Load the text from a file
    $.get(textFilePath, function(data) {
        var text = data;
        var index = 0; // Current position in text

        function typeCharacter() {
			if (index < text.length) {
				var currentChar = text.charAt(index);
				if (currentChar === "\n") {
					// Add a line break directly before the cursor
					$("<br>").insertBefore(".cursor");
				} else {
					// Add the character directly before the cursor
					$("<span>").text(currentChar).insertBefore(".cursor");
				}
				index++;
				setTimeout(typeCharacter, currentChar === "\n" ? pauseDuration : typingPause);
			} else {
				animateScreenAndRedirect();
			}
		}

        // Start typing
        typeCharacter();

        function animateScreenAndRedirect() {
            $("body").animate({ backgroundColor: "#FFFFFF" }, 1000, function() {
                window.location.href = redirectUrl; 
            });
        }
    });
});

