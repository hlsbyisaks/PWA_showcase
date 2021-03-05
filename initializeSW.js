//SW and push initialization
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}


//Prompt permission push notifications
Notification.requestPermission(function(status) {
  console.log('Notification permission status:', status);
});

//Runs a push from script!
pushMessages = ['Hello world!','Hi..','yeees helloo', 'Ok, thats enough', '...']
let pushCounter = 0
function displayNotification() {
  if (Notification.permission == 'granted') {
    navigator.serviceWorker.getRegistration().then(function(reg) {
      reg.showNotification(pushMessages[pushCounter]);
      if (pushCounter < pushMessages.length-1)pushCounter += 1
    });
  }
}