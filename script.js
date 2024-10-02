// Insert styles dynamically into the document
const styles = `
  .notification-icon {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 50px;
    height: 50px;
    background-color: #007BFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.5s ease, opacity 0.3s ease;
  }
   .notification-container.show {
    display: block;
    opacity: 1;
    transform: translateY(0); /* Slide up into view */
  }

  .bell-icon {
    font-size: 24px;
  }

  .notification-container {
    font-family: "Poppins", sans-serif;
    transition-property: transform;
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 300px;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    display: none;
    transform: translateY(00vw); 
    transition: opacity 0.4s ease, transform 1s ease;
  }

  .notification-icon:hover {
    transform: scale(1.1);
  }


  .notification-title {
    margin-top: 0;
  }

  .notification-list {
    transition-property: transform;
     transition-duration: 600ms;
  transition-timing-function: ease;
    list-style: none;
    padding: 0;
  }

  .notification-item {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  }

  .cancel-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';


document.head.appendChild(fontLink);
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


const notificationIcon = document.createElement('div');
notificationIcon.classList.add('notification-icon');


const bellIcon = document.createElement('span');
bellIcon.innerHTML = '🔔';
bellIcon.classList.add('bell-icon');
notificationIcon.appendChild(bellIcon);


document.body.appendChild(notificationIcon);

const notificationContainer = document.createElement('div');
notificationContainer.classList.add('notification-container');

const notificationTitle = document.createElement('h3');
notificationTitle.innerText = 'Notifications';
notificationTitle.classList.add('notification-title');

const notifications = [
  'You have a new message!',
  'Your order was shipped!',
  'New products have been updated.',
];

const notificationList = document.createElement('ul');
notificationList.classList.add('notification-list');

notifications.forEach(notification => {
  const notificationItem = document.createElement('li');
  notificationItem.innerText = notification;
  notificationItem.classList.add('notification-item');
  notificationList.appendChild(notificationItem);
});

notificationContainer.appendChild(notificationTitle);
notificationContainer.appendChild(notificationList);

const cancelIcon = document.createElement('span');
cancelIcon.innerHTML = '❌';
cancelIcon.classList.add('cancel-icon');
notificationContainer.appendChild(cancelIcon);

document.body.appendChild(notificationContainer);

notificationIcon.addEventListener('click', () => {
  notificationIcon.style.display = 'none'; 
  notificationContainer.style.display = 'block';
});

cancelIcon.addEventListener('click', () => {
  notificationContainer.style.display = 'none'; 
  notificationIcon.style.display = 'flex'; 
});
