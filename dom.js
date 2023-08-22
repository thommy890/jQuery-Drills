$(document).ready(function () {
    var textInput = $("#textInput");
    var submitButton = $("#btnSubmit");
    var itemList = $("#itemList");

    // Enable or disable the button based on text input
    textInput.on("input", function () {
        if ($(this).val().trim() === "") {
            submitButton.prop("disabled", true);
        } else {
            submitButton.prop("disabled", false);
        }
    });

    $("#myForm").submit(function (event) {
        event.preventDefault();

        var inputValue = textInput.val();
        var liElement = $("<li>").text(inputValue);

        itemList.append(liElement);
        textInput.val(""); // Clear the input field
        submitButton.prop("disabled", true); // Disable the button after submitting
    });

    itemList.on("click", "li", function () {
        var randomColor = getRandomColor();
        $(this).css("color", randomColor);
    });

    itemList.on("dblclick", "li", function () {
        $(this).remove();
    });

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
