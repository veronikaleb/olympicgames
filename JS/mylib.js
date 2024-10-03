document.addEventListener('DOMContentLoaded', () => {
    // 1. Відображення поточного часу
    function updateDateTime() {
        const now = new Date();
        const dateTimeString = now.toLocaleString();
        document.getElementById('datetime').textContent = 'Current time and date: ' + dateTimeString;
    }
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Ініціалізуємо при завантаженні

   // 2. Оновлення даних відвідувачів
// 2. Update visitor data
const visitorsData = JSON.parse(localStorage.getItem('visitors')) || [];
const sessionId = sessionStorage.getItem('sessionId');

function updateVisitorData() {
    if (!sessionId) {
        const timestamp = Date.now();
        visitorsData.push(timestamp);
        localStorage.setItem('visitors', JSON.stringify(visitorsData));
        sessionStorage.setItem('sessionId', 'active');  // Mark session as counted
        console.log('Visitor data updated');
    } else {
        console.log('Visitor already counted in this session');
    }
}

function updateCounterDisplay() {
    const totalVisitorsElement = document.getElementById('totalVisitors');
    const onlineVisitorsElement = document.getElementById('onlineVisitors');

    if (totalVisitorsElement && onlineVisitorsElement) {
        totalVisitorsElement.textContent = visitorsData.length;

        const currentTime = Date.now();
        const onlineVisitors = visitorsData.filter(timestamp => currentTime - timestamp <= 5 * 60 * 1000).length;
        onlineVisitorsElement.textContent = onlineVisitors;

        console.log('Visitor counter updated');
    } else {
        console.error('Counter elements not found');
    }
}

updateVisitorData();
updateCounterDisplay();
    // 3. Кнопка прокрутки наверх
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.onscroll = function() {
        toggleScrollToTopButton();
    };

    function toggleScrollToTopButton() {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
// 4

const feedbackForm = document.getElementById('feedbackForm');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

feedbackForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    showPrompt(`Your feedback: <br> Name: ${name} <br> Email: ${email} <br> Feedback: ${message}`, function(value) {
        modalContent.innerHTML = value;
        openModal();
    });
});

function showPrompt(text, callback) {
    // Емуляція модального вікна за допомогою модальної форми
    const userInput = text;
    if (callback) {
        callback(userInput); // Повертає текст, введений користувачем
    }
}

function openModal() {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
});

//5
$(function(){
	
    const boxes = document.querySelectorAll('.box');
    
    window.addEventListener('scroll', checkBoxes);
    
    checkBoxes(); // shows initial box(es) 
    
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5 * 4);
      
      boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      })
    }
    });
 //6
  
});