
document.addEventListener('DOMContentLoaded', function() {
    const voteButton = document.getElementById('voteme');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    function showPopupMessage() {
        popup.style.display = 'flex';
    }

    function closePopupMessage() {
        popup.style.display = 'none';
    }

    voteButton.addEventListener('click', showPopupMessage);
    closePopup.addEventListener('click', closePopupMessage);
});
