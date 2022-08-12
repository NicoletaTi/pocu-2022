function store() {
    //stores items in the localStorage
    var message = document.getElementById("emailMessage").value;
    var key = document.getElementById("submitEmail").value;
    const messageObj = {
      message: message,
    };
    window.localStorage.setItem(key, JSON.stringify(messageObj));
    alert("The message has been sent");
  }
  window.onload = function () {
    document.getElementById("Form").onsubmit = store;
  };


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  