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
var sliderwordings = document.querySelector(".slider-wordings")
var product1 = document.getElementById("product1")
var product2 = document.getElementById("product2")
var mwproduct1 = document.getElementById("mw-product1")
var mwproduct2 = document.getElementById("mw-product2")

option.addEventListener("click",function(){
    sidenavside.style.left = "0px"
    sliderwordings.style.opacity = "0"
    product1.style.opacity ="0"
    product2.style.opacity ="0"
    mwproduct1.style.opacity ="0"
    mwproduct2.style.opacity ="0"
})
closenav.addEventListener("click",function(){
    sidenavside.style.left = "-900px"
    sliderwordings.style.opacity = "1"
    product1.style.opacity ="1"
    product2.style.opacity ="1"
    mwproduct1.style.opacity =""
    mwproduct2.style.opacity ="1"
})

//selecting slider
var slider = document.querySelector(".slider")
var rightbtn = document.getElementById("rightbtn")
var leftbtn = document.getElementById("leftbtn")
var margin = 0
rightbtn.addEventListener("click",function(){
    margin+=100
    if(margin>200)
    {
        margin = 0
    }
    slider.style.marginLeft = "-" + margin + "vw"
})

leftbtn.addEventListener("click",function(){
    margin-=100
    if(margin<0)
    {
        margin = 200
    }
    slider.style.marginLeft = "-" + margin + "vw"
})

window.addEventListener("scroll",function(){
    var windowheight = window.innerHeight
    var box = document.getElementById("box")
   
    var boxtop = box.getBoundingClientRect().top
    if(boxtop<windowheight)
    {
        box.style.opacity = "1"
    }
    else{
        box.style.opacity = "0"
    }
})