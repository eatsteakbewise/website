function checkStorage() {
  console.log("Checking storage")
  var notification = document.getElementById("notification");
  if(localStorage["notification-visable"] == "false")
      {
        notification.style.display = "none";
        console.log("Notification found")
      }
   else {
    console.log("Could not find notification in local storage, displaying notification")        
  }
};

function setStyle() {
  notif.style.display = 'none';
}

function removeNotification() {    
    notification.parentNode.removeChild(notification);
    localStorage.setItem("notification-visable", "false");
    console.log("Notification removed")  
}

