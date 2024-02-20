document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.getElementById("menu-btn");
    var menuList = document.getElementById("menu-list");
  
    menuBtn.addEventListener("click", function() {
      menuList.classList.toggle("visible");
    });
  });
  
  