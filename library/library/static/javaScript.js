function loadAboutUs() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "about", true);
    xhttp.send();
  }
 
  function afterContact(){
    alert("Your message sent successfully")
  }
  function afterRegister(){
    alert("Your account is created successfully")
  }

