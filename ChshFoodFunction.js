const foodName = [ "川辣子" ,"原山拉麵"];
const foodImg = [
    "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/P_20201219_202030_vHDR_Auto.jpg?raw=true","https://pic.pimg.tw/as660707/1617678181-51703685-g_wn.jpg"
];
let randomNumber = 0;
function Duckthis() {
  /*  alert("製作中，敬請期待");*/
  randomNumber = Math.floor(Math.random() * 2);
  document.getElementById("food").innerHTML = foodName[randomNumber];
  document.getElementById("Foodimg").src = foodImg[randomNumber];
  }
