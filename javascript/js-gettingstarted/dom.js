let textArea = document.getElementById('text-area');
let okButton = document.querySelector('#ok-button');

// textArea.innerText = 'hello world';
textArea.style.display = 'none'; // hides the paragraph.

okButton.addEventListener('click', function() {
    textArea.style.display = 'block'; // displays the paragraph.
});


// REMOVING AND ADDING ELEMENTS:
// P.STYLE.DISPLAY = 'NONE'; // REMOVES ELEMENT FROM PAGE.
// P.STYLE.DISPLAY = 'BLOCK'; // ADDS ELEMENT BACK.