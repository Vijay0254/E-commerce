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
var checkbox = document.querySelectorAll(".check")
checkbox.forEach((element) =>{
    element.addEventListener("click",function(event){
        var val = element.id.toUpperCase().trim()
        dress.forEach((e) =>{
        var it = e.dataset.item.toUpperCase()
        console.log(it)
        if(it == val)
        {
            e.style.display = "block"
        }
        else{
            e.style.display = "none"
        }
        })
    })
})

var checkc = document.querySelectorAll(".checkc")
checkc.forEach((element) =>{
    element.addEventListener("click",function(event){
        var val = element.id.toUpperCase().trim()
        dress.forEach((e) =>{
        var it = e.dataset.color.toUpperCase()
        console.log(it)
        if(it == val)
        {
            e.style.display = "block"
        }
        else{
            e.style.display = "none"
        }
        })
    })
})
var checka = document.querySelectorAll(".checka")
checka.forEach((element) =>{
    element.addEventListener("click",function(event){
        var val = element.id.toUpperCase().trim()
        dress.forEach((e) =>{
        var it = e.dataset.arrival.toUpperCase()
        console.log(it)
        if(it == val)
        {
            e.style.display = "block"
        }
        else{
            e.style.display = "none"
        }
        })
    })
})

var all = document.getElementById("all")
all.addEventListener("click",function(){
    location.reload()
})