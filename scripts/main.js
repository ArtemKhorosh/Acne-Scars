//YouTube Video

// Get the modal
const modalVideo = document.getElementById('modalVideo');

// Get the button that opens the modal
const modalVideoBtn = document.querySelectorAll('.btn-modal');

// When the user clicks the button, open the modal 
modalVideoBtn.forEach(function (e) {
    e.addEventListener('click', function (event) {
        // const btn = event.target;
        const video_id = e.dataset.video;

        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/' + video_id;
        iframe.className = 'youtube';
        modalVideo.appendChild(iframe);

        modalVideo.style.display = "block";
    });
}
);

// When the user clicks on <button> (x) or anywhere outside of the modal, close the modal
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('close-modal')) {
        modalVideo.style.display = "none";
        // modalVideo.lastElementChild.remove();
        modalVideo.removeChild(modalVideo.lastElementChild);

    }
}, false);

//Section FAQ

var acc = document.getElementsByClassName("faq-item-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}