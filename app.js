const accBtns = document.querySelectorAll('.accordion');

accBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Schließe zuerst alle anderen Panels
        accBtns.forEach(otherBtn => {
            if (otherBtn !== this) {
                otherBtn.classList.remove("active");
                otherBtn.nextElementSibling.style.maxHeight = null;
            }
        });

        // Öffne/Schließe das aktuelle Panel
        this.classList.toggle("active");
        const panel = this.nextElementSibling;

        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});
