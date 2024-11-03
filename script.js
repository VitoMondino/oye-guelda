document.addEventListener('DOMContentLoaded', () => {
    const weightInput = document.getElementById('weight');
    const warningIcon = document.getElementById('warningIcon');
    const warningMessage = document.getElementById('warning-message');
    const warningSound = document.getElementById('warningSound');

    weightInput.addEventListener('input', (e) => {
        const weight = parseFloat(e.target.value);
        
        if (weight > 70 && weight <= 200) {
            warningIcon.classList.add('spinning');
            warningMessage.classList.remove('hidden');
            warningSound.play().catch(error => {
                console.log('Audio autoplay was prevented:', error);
            });
        } else {
            warningIcon.classList.remove('spinning');
            warningMessage.classList.add('hidden');
            warningSound.pause();
            warningSound.currentTime = 0;
        }
    });
});