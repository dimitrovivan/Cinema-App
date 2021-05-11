const notificationElement = document.querySelector('.notification-container');


export const showNotification = {

    error: (message) => {
        notificationElement.classList.remove('success');
        notificationElement.classList.add('show', 'error');
        notificationElement.textContent = message;

        setTimeout( () => {
            notificationElement.classList.remove('show');
        },2300)
    },

    success: (message) => {
        notificationElement.classList.remove('error');
        notificationElement.classList.add('show', 'success');
        notificationElement.textContent = message;

        setTimeout( () => {
            notificationElement.classList.remove('show');
            notificationElement.classList.remove('success');

        },2000)
    }

}
    
    