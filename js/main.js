
// DRAG AND DROP
function allowDrop(event, accept) {
    event.preventDefault();
    if (!accept) {
        event.dataTransfer.dropEffect = 'none';
    }
}
    
function drag(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
}
    
function drop(event, dropAreaId) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    var draggedImage = document.getElementById(data);
    var dropArea = document.getElementById(dropAreaId);
    const audioCorrect = document.getElementById('audio-correct');
    
    if (draggedImage && draggedImage.classList.contains('box')) {
        var image = new Image();
        image.src = draggedImage.src;
        image.style.position = 'relative';
        image.style.left = '50%';
        image.style.bottom = '0%';
        image.style.transform = 'translate(-50%, -40%) scale(0.7)';
        dropArea.innerHTML = '';
        dropArea.appendChild(image);
    
        var thumbsUpIcon = document.createElement('i');
        thumbsUpIcon.className = 'fa fa-thumbs-up';
        thumbsUpIcon.style.opacity = '0'; // Initially hide the icon
        dropArea.appendChild(thumbsUpIcon);
        
        void thumbsUpIcon.offsetWidth;

        thumbsUpIcon.style.transition = 'opacity 0.5s ease-in-out';
        thumbsUpIcon.style.opacity = '1';
        audioCorrect.play();

        setTimeout(function() {
            thumbsUpIcon.style.opacity = '0';

            setTimeout(function() {
                dropArea.removeChild(thumbsUpIcon);
            }, 900);
        }, 2000);
    
        // Reset opacity after dropping
        draggedImage.style.opacity = '0';
    }
}
    
   
// CLICK IT
document.addEventListener('DOMContentLoaded', function() {
    const correctLink = document.querySelector('.click-correct');
    const wrongLink = document.querySelector('.click-wrong');
    const tickIcon = document.querySelector('.tick-icon');
    const xIcon = document.querySelector('.x-icon');
    const audioCorrect = document.getElementById('audio-correct');
    const audioWrong = document.getElementById('audio-wrong');

    function showIcon(icon) {
        icon.style.opacity = '0';
        icon.style.display = 'block';
        setTimeout(function() {
            icon.style.opacity = '1';
            setTimeout(function() {
                icon.style.opacity = '0';
                setTimeout(function() {
                    icon.style.display = 'none';
                    popupContainer.style.display = 'none';
                }, 300);
            }, 1200);
        }, 100);
    }
    
    // Event listener for click-correct link
    correctLink.addEventListener('click', function(event) {
        event.preventDefault();
        showIcon(tickIcon);
        audioCorrect.play();
    });
    // Event listener for click-wrong link
    wrongLink.addEventListener('click', function(event) {
        event.preventDefault();
        showIcon(xIcon);
        audioWrong.play();
    });
});

function shuffleElements(parentElement) {
    for (let i = parentElement.children.length; i >= 0; i--) {
        parentElement.appendChild(parentElement.children[Math.random() * i | 0]);
    }
}

// Call the function to shuffle links within the div with class 'click-text'
const divToShuffle = document.querySelector('.click-text');
shuffleElements(divToShuffle);


document.getElementById('link').addEventListener('click', function(event) {
    event.preventDefault();

    document.body.classList.add('page-transition');

    setTimeout(function() {
        window.location.href = event.target.href;
    }, 500);
});

document.getElementById('backlink').addEventListener('click', function(event) {
    event.preventDefault();

    document.body.classList.add('page-transition');

    setTimeout(function() {
        window.location.href = event.target.href;
    }, 500);
});