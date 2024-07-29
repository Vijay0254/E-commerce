var option = document.getElementById("option")
var sidenavside = document.querySelector(".sidenav-side")
var closenav = document.getElementById("closenav")
option.addEventListener("click",function(){
    sidenavside.style.left = "0px"
})
closenav.addEventListener("click",function(){
    sidenavside.style.left = "-900px"
})