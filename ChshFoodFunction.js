const  foodName = [ "川辣子" ,"原山拉麵" , "義式傳承" , "匠咖哩"  , "澤川蛋包飯" , "雙響丼" , "北平餡餅店" , "品蔚手作麵" , "福泉豆花"];
foodName[0] =["川辣子"] ;
foodName[1] =["原山拉麵"] ;
foodName[2] =["義式傳承"] ;
foodName[3] =["匠咖哩"] ;
foodName[4] =["澤川蛋包飯"] ;
foodName[5] =["雙響丼"] ;
foodName[6] =["北平餡餅店"] ;
foodName[7] =["品蔚手作麵"] ;
foodName[8] =["福泉豆花"] ;
foodName[9] =["吃土吧"]

const foodImg = [
    "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/P_20201219_202030_vHDR_Auto.jpg?raw=true","https://pic.pimg.tw/as660707/1617678181-51703685-g_wn.jpg" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%BE%A9%E5%BC%8F%E5%82%B3%E6%89%BF.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%8C%A0%E5%92%96%E5%93%A9.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E6%BE%A4%E5%B7%9D.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E9%9B%99%E9%9F%BF.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E8%B1%AC%E8%82%89%E9%A4%A1%E9%A4%85.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%93%81%E8%94%9A.png?raw=true" , "https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%A6%8F%E6%B3%89.png?raw=true"
];
foodImg[0]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/P_20201219_202030_vHDR_Auto.jpg?raw=true"];
foodImg[1]=["https://pic.pimg.tw/as660707/1617678181-51703685-g_wn.jpg"];
foodImg[2]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%BE%A9%E5%BC%8F%E5%82%B3%E6%89%BF.png?raw=true"];
foodImg[3]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%8C%A0%E5%92%96%E5%93%A9.png?raw=true"];
foodImg[4]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E6%BE%A4%E5%B7%9D.png?raw=true"];
foodImg[5]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E9%9B%99%E9%9F%BF.png?raw=true"];
foodImg[6]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E8%B1%AC%E8%82%89%E9%A4%A1%E9%A4%85.png?raw=true"];
foodImg[7]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E5%93%81%E8%94%9A.png?raw=true"];
foodImg[8]=["https://github.com/smilePatrinus/smilePatrinus.github.io/blob/main/%E7%A6%8F%E6%B3%89.png?raw=true"];
foodImg[9]=["https://cdn.pixabay.com/photo/2019/03/05/12/52/plant-4036130_960_720.jpg"];

const  foodAddress = [];
foodAddress[0]="500彰化縣彰化市南郭路一段165號" ;
foodAddress[1]="500彰化縣彰化市南郭路一段173號" ;
foodAddress[2]="500彰化縣彰化市南郭路一段216號500 號" ;
foodAddress[3]="500彰化縣彰化市介壽北路252號" ;
foodAddress[4]="500彰化縣彰化市南郭路一段206號" ;
foodAddress[5]="500彰化縣彰化市南郭路一段125-2號" ;
foodAddress[6]="500彰化縣彰化市南郭路一段139號" ;
foodAddress[7]="500彰化縣彰化市東民街55號" ;
foodAddress[8]="500彰化縣彰化市東民街55號" ;
foodAddress[9]="新北市中和區235055華新街109巷2號"

const  foodAddresswww = [];
foodAddresswww[0]="https://goo.gl/maps/WkpExkVrggj2EzTKA";
foodAddresswww[1]="https://goo.gl/maps/PVBULKgzY9NvkfWf9";
foodAddresswww[2]="";
foodAddresswww[3]="https://goo.gl/maps/SXJF9WeWgL5mJ3KRA";
foodAddresswww[4]="https://goo.gl/maps/V6ZykQEWSeexUSzs6";
foodAddresswww[5]="https://goo.gl/maps/5nwbu7cqo2dmwP4U8";
foodAddresswww[6]="https://goo.gl/maps/dSrmb2jnf1o8FtAz8";
foodAddresswww[7]="https://goo.gl/maps/2CNoQGzbGpCZkjwn7";
foodAddresswww[8]="https://goo.gl/maps/yPEA2sgiTwYu2cKAA";
foodAddresswww[9]="https://www.moeacgs.gov.tw/";

let randomNumber = -1 ;
let randomTemp = -1 ;
let clickTimes =-1 ;
function clickTime() {
  clickTimes++;
  if(clickTimes>50)
    randomNumber = 9 ;
}
function Duckthis() {
  /*  alert("製作中，敬請期待");*/
  randomNumber = Math.floor(Math.random() * 9);
  clickTimes++;
  if(clickTimes>50){ 
    randomNumber = 9 ; 
    document.getElementById("food").innerHTML = foodName[randomNumber];
    document.getElementById("address").innerHTML = foodAddress[randomNumber];
    document.getElementById("wwwAddress").href = foodAddresswww[randomNumber];
    document.getElementById("Foodimg").src = foodImg[randomNumber];
    document.getElementById("clicks").innerHTML = clickTimes;
  }
  else if(randomNumber == randomTemp)
  {
    clickTimes-=1;
    Duckthis();
  
  }
  else{
    document.getElementById("food").innerHTML = foodName[randomNumber];
    document.getElementById("address").innerHTML = foodAddress[randomNumber];
    document.getElementById("wwwAddress").href = foodAddresswww[randomNumber];
    document.getElementById("Foodimg").src = foodImg[randomNumber];
    document.getElementById("clicks").innerHTML = clickTimes;
    }
  }
