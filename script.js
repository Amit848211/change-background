var color = [
    "red",
    "green",
    "cyan",
    "black",
    "voilet",
    "blue",
    "yellow",
    "purple",
    "orange",
    "lightgreen",
    "lemon",
    "LawnGreen",
    "Indigo",
    "Fuchsia",
    "FireBrick",
    "DodgerBlue",
  ];
  var mrt=["1%","1.5%","2%","2.5%","3%","3.5%","10%","15%","25%","21%","13%","30%","24%","18%"]
  var mrl=["1%","1.5%","2%","2.5%","3%","3.5%","10%","15%","25%","21%","13%","30%","55%","65%","75%","70%","60%","50%","63%","35%","85%"]




  let button=document.getElementsByClassName("button")[0];
  button.addEventListener("click",changeBack);
  function changeBack(){
    // let container=document.getElementsByClassName("container")[0];
    // console.log(container);
    document.body.style.backgroundColor=color[Math.floor(Math.random() * color.length)];
    let marTop=mrt[Math.floor(Math.random() * mrt.length)];
    button.style.marginTop=marTop;
    marLeft=mrl[Math.floor(Math.random() * mrl.length)];
     button.style.marginLeft=marLeft;
    
    console.log(marTop);
    console.log(marLeft);
    
  }