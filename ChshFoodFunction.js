const foodName = [ "川辣子" ,"原山拉麵"];
const foodImg = [
    "https://pic.pimg.tw/fatchien33/1580797090-836611416_l.jpg","https://pic.pimg.tw/as660707/1617678181-51703685-g_wn.jpg"
];
let randomNumber = 0;
function Duckthis() {
  randomNumber = Math.floor(Math.random() * 2);
  document.getElementById("food").innerHTML = foodName[randomNumber];
  document.getElementById("Foodimg").src = foodImg[randomNumber];
  }
