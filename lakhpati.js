document.getElementById("menuBtn").addEventListener("click", function(){
    if(document.getElementById("sideNav").style.left=="1000px"){document.getElementById("sideNav").style.left="500px";
  document.getElementById("menu").style.left="1000px";
    document.getElementById("close").style.left="845px";}else{document.getElementById("sideNav").style.left="1000px";
    document.getElementById("menu").style.left="845px";
    document.getElementById("close").style.left="1000px";}
   
});
