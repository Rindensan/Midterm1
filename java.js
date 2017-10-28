var ctrl = document.getElementById("controls")
var back = document.getElementById("background")
var title = document.getElementById("title")
var desc = document.getElementById("desc")
var url = ""
var titltext = ""
var destext = ""
var imagey = 0
var imagex = 0
var imagesize = 300
var colorchange = 0

/*----------FUNCTIONS----------------*/

function MoveBG(left,top){
    imagey = imagey + top;
    back.style.backgroundPositionY = imagey + "px";       
    imagex = imagex + left;
    back.style.backgroundPositionX = imagex + "px"; 
}

function ChangeBG(changed){
    imagesize = imagesize + changed;
    back.style.height = imagesize + "px";
}

function transferInput(){
    var val = document.getElementById("backgroundURL").value
    

        if (val == "horse"){
            url="img/bg1.jpg"
            ;}
        else if (val == "night"){
            url="img/bg2.jpg"
            ;}
        else if (val == "mountain"){
            url="img/bg3.jpg"
            ;}
        else if (val.indexOf("epic")){
            url="img/bg4.jpg"
            ;}
    
        else{
            url = val;
        }
}

function expandMenu(){
    if (ctrl.style.bottom == "0px"){
        ctrl.style.bottom = "-90px"}
    else{
        ctrl.style.bottom = "0px"}
    
}

function changeColor(){
    colorchange = textcolor.value;
    title.style.color = colorchange;
    desc.style.color = colorchange;
}

function changeDescription(){
    destext = desctext.value;
    desc.innerHTML = destext;  
}

function changeTitle(){
    titltext = titletext.value;
    title.innerHTML = titltext;     
}

function createImage(){
    var newbackground = document.createElement("div")
    var newtitle = document.createElement("div")
    var newdesc = document.createElement("div")
    
    newbackground.className = "backgrounds col-xs-12 col-sm-6 col-md-4 col-lg-3";
    newtitle.className = "titles";
    newdesc.className = "descs";
    
    newtitle.style.cssText ="color:"+colorchange+";";
    newdesc.style.cssText ="color:"+colorchange+";";
    newbackground.style.cssText = "background-image: url("+url+"); background-position: "+imagex+"px "+imagey+"px; margin: 0px 0px 0px 0px";
    
    newbackground.appendChild(newtitle);
    newbackground.appendChild(newdesc);
    
    document.getElementById("display").appendChild(newbackground);

    newtitle.innerHTML = titltext;
    newdesc.innerHTML = destext;
}

/*------------Menu Button-----------------*/
document.getElementById("Menu").addEventListener("click", function(){
    expandMenu()   
});


/*-------------Background URL-------------------*/
document.getElementById("backgroundURL").addEventListener("keyup", function(ev){
    if (ev.keyCode == 13){
    transferInput();
    back.style.backgroundImage = "url("+url+")"
    }
    
});

/*----------------Change Title and Description----------*/

document.getElementById("titletext").addEventListener("change", function(){
    changeTitle()
    
});


document.getElementById("desctext").addEventListener("change", function(){
    changeDescription()   
});


document.getElementById("textcolor").addEventListener("change", function(){
    changeColor()  
});


/*------------Change the Image position and Height------------*/

window.addEventListener("keydown",function(ev){
   console.log(ev.keyCode);
    if (ev.keyCode == 38){
        MoveBG(0,10)
    }
    
    else if (ev.keyCode == 39) {
       MoveBG(-10,0)       
       
   }
    else if (ev.keyCode == 40) {
       MoveBG(0,-10)        
   }
    
    else if (ev.keyCode == 37) {
       MoveBG(10,0)     
   }
    
    
    else if (ev.keyCode == 187){
        ChangeBG(+10)
    }
    
    else if (ev.keyCode == 189){
        ChangeBG(-10)
    }
    
});

/*---------------------Create Backgrounds---------------*/
document.getElementById("add").addEventListener("click", function(){
    createImage()    
});

