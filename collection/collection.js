//selecting upper container and cross
var uppercontainer = document.querySelector(".uppercontainer")
var cross = document.getElementById("cross")

cross.addEventListener("click",function(){
    uppercontainer.style.display = "none"
})

//selecting side nav, option and closenav
var option = document.getElementById("option")
var sidenavside = document.querySelector(".sidenav-side")
var closenav = document.getElementById("closenav")
var search = document.querySelector(".search")
option.addEventListener("click",function(){
    sidenavside.style.left = "0px"
    search.style.opacity = "0"
})
closenav.addEventListener("click",function(){
    sidenavside.style.left = "-900px"
    search.style.opacity = "1"
})

//search
var inp = document.getElementById("inp")
var dress = document.querySelectorAll(".dress")
inp.addEventListener("keyup",function(){
    var entervalue = inp.value.toUpperCase()
    dress.forEach(function(element){
        var itemtext = element.textContent.toUpperCase()
        if(itemtext.indexOf(entervalue)<0)
        {
            element.style.display = "none"
        }
        else{
            element.style.display = "block"
        }
    })
})

//checking occasion
// var check = document.querySelectorAll(".check")
// var dress = document.querySelectorAll(".dress")
// check.addEventListener("click",function(){
    
//     check.forEach(function(element1){
//         var entervalue1 = element1.textContent.toUpperCase()
//         dress.forEach(function(element){
//             var checktext = element.textContent.toUpperCase()
//             if(checktext.indexOf(entervalue1)<0)
//             {
//                 element.style.display = "none"
//             }
//             else{
//                 element.style.display = "block"
//             }
//         })
    
//     })
// })
