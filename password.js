function show_pass(){
    var x = document.getElementById("p1");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}