document.getElementById('submitWish').addEventListener('click', function() {
    const wishInput = document.getElementById('wishInput');
    const wishText = wishInput.value.trim();
    
    if (wishText) {
        const wishesList = document.getElementById('wishesList');
        const newWish = document.createElement('div');
        newWish.textContent = wishText;
        wishesList.appendChild(newWish);
        wishInput.value = ''; // Clear the input field
    } else {
        alert("Please enter a wish before submitting.");
    }
});
