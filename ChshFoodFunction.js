const foodName = [ "川辣子" ,"原山拉麵" , "義式傳承" , "匠咖哩"  , "澤川蛋包飯" , "雙響丼" , "北平餡餅店" , "品蔚手作麵" , "福泉豆花"];
const foodImg = [
    "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/P_20201219_202030_vHDR_Auto.jpg?raw=true","https://pic.pimg.tw/as660707/1617678181-51703685-g_wn.jpg" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%BE%A9%E5%BC%8F%E5%82%B3%E6%89%BF.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%8C%A0%E5%92%96%E5%93%A9.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E6%BE%A4%E5%B7%9D.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E9%9B%99%E9%9F%BF.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E8%B1%AC%E8%82%89%E9%A4%A1%E9%A4%85.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%93%81%E8%94%9A.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%A6%8F%E6%B3%89.png?raw=true"
];
let randomNumber = 0;
function Duckthis() {
  /*  alert("製作中，敬請期待");*/
  randomNumber = Math.floor(Math.random() * 9);
  document.getElementById("food").innerHTML = foodName[randomNumber];
  document.getElementById("Foodimg").src = foodImg[randomNumber];
  }
