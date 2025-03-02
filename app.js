let delegation = document.querySelector('#delegation');

delegation.addEventListener('click', (event) => {
    if (event.target.classList.contains('accordion')) {
        // Schließe alle anderen Panels
        let allPanels = document.querySelectorAll('.panel');
        let allButtons = document.querySelectorAll('.accordion');

        allPanels.forEach(panel => {
            if (panel !== event.target.nextElementSibling) {
                panel.style.maxHeight = null; // Schließe das Panel
            }
        });

        allButtons.forEach(button => {
            if (button !== event.target) {
                button.classList.remove('active'); // Entferne die 'active'-Klasse
            }
        });

        // Öffne oder schließe das angeklickte Panel
        let panel = event.target.nextElementSibling;
        event.target.classList.toggle('active');

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null; // Schließe das Panel
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px'; // Öffne das Panel
        }
    }
});



// const accBtns = document.querySelectorAll('.accordion');

// accBtns.forEach(btn => {
//     btn.addEventListener('click', function() {
//         // Schließe zuerst alle anderen Panels
//         accBtns.forEach(otherBtn => {
//             if (otherBtn !== this) {
//                 otherBtn.classList.remove("active");
//                 otherBtn.nextElementSibling.style.maxHeight = null;
//             }
//         });

//         // Öffne/Schließe das aktuelle Panel
//         this.classList.toggle("active");
//         const panel = this.nextElementSibling;

//         if(panel.style.maxHeight) {
//             panel.style.maxHeight = null;
//         } else {
//             panel.style.maxHeight = panel.scrollHeight + 'px';
//         }
//     });
// });

// ************************************** 

 const seidbarBtn = document.querySelector('.seidbarBtn')
 const seidbarmenu = document.querySelector('.seidbarmenu')
 
// Füge dem Button einen Klick-Event-Listener hinzu
 seidbarBtn.addEventListener('click',function(){
     seidbarmenu.classList.toggle('show')
    seidbarBtn.classList.toggle('open')
 })

