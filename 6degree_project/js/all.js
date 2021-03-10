var xhr = new HMLHttpRequest();
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=abcdexx@gmail.com&password=12345678');


/*
document.querySelector('.list li').dataset

var list = document.querySelector('.list li');

// 確認點擊的農夫,以及相關的資訊

function  checkList(e){
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log('農夫編號是'+num);
    console.log('有'+dog+'隻狗');
}

list.addEventListener('click', checkList, false)
*/
/*
// setItem, getItem 基本操作

var btn = document.querySelector('.btnClass');

// 從localstorage取出該值
var call = document.querySelector('.btnCall'); 


function saveName(e){
    // console.log('qwee'); //test
    var str = document.querySelector('.textClass').value;
    // console.log(str);   //test
    // 重點:將資料存到localstorage - setItem
    localStorage.setItem('myName',str);
    // 到chrome的 Application > Local Storage > file://
}

btn.addEventListener('click',saveName);

// 從localstorage取出該值 - getItem
call.addEventListener('click',function(){
    var str = localStorage.getItem('myName');
    alert('你的名字叫做'+str)
})

// localStorage: Application > Storage >　Local Storage

*/




// 事件監聽優化-從父元素來監聽子元素內容
// 先選取全部的父元素,在透過 e.target.nodeName 去過濾不需要的元素


/*
// 網頁座標 screen, page, client的差異
// 1. screen  是真的螢幕的解析度的座標點
// 2. page  以整個網頁寬高為主
// 3. client 是以瀏覽器窗口
var screenX = document.querySelector('.screenX');        
var screenY = document.querySelector('.screenY');   
var pageX = document.querySelector('.pageX');
var pageY = document.querySelector('.pageY');
var clientX = document.querySelector('.clientX');
var clientY = document.querySelector('.clientY');

function getPosition(e){
    screenX.textContent = e.screenX;                    
    screenY.textContent = e.screenY;      
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
}

var el = document.body;
el.addEventListener('mousemove', getPosition, false);
*/

/*
// mousemove
// http://jsbin.com/venuqoreqi/edit?html,css,console,output


var el = document.querySelector('.box');

el.addEventListener('mousemove',function(){
    alert('1234');
},false)
*/


/*
// blur-離開焦點時進行事件觸發
// 建立function 2
function count(){
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamNumId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeNumId').value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum + cokeNum
}
// 建立function 1
function checkContent(e){
    var str =  e.target.value;
    if(str==''){
        alert('此欄位不可為空')
    }
}
var el = document.getElementById('countId');
el.addEventListener('click',count,false);

// focus 所在焦點
// blur  離開焦點
var ham = document.getElementById('hamNumId');
ham.addEventListener('blur',checkContent,false);
var coke = document.getElementById('cokeNumId');
coke.addEventListener('blur',checkContent,false);
*/

/*
// var body 直接選取整個body的內容
var body = document.body;
//console.log(body);

function goRocket(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 49:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            // 改變速度可以在.rocket中的transition中去改參數 1s> 5s
            // 也可以透過chrome > element > transition 中去查看cubic-bezier參數的其他可能值(拉曲線),或改成其他模式
            break;
        case 97:
            // 97是數字鍵上的1
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break; 

        case 50:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;    

        case 50:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;    

    } 
}
*/
/*
// 這一行先寫,上面的function才會和HTML產生連結
// 透過keyCode可以知道每個鍵盤的相對位置 ex. 1-49, 2-50, 3-51, blank-32, enter-13
body.addEventListener('keydown',goRocket,false);
*/




/*
// change - 表單內容更動內容時觸發
// 集大成的一段!!

var area = document.getElementById('areaId');
var list = document.querySelector('.list');
var country = [
    {
        farmer:'查理',
        place:'前鎮區'
    },{
        farmer:'卡斯柏',
        place:'苓雅區'    
    },{
        farmer:'小花',
        place:'苓雅區'
    }
]

// 'change' 當使用下拉式選單就會觸發change的事件
var len = country.length;
// console.log(len);
function updateList(e){
   // alert('q12')
   var select = e.target.value;
   // console.log(select);
   var str = '';
   for(var i=0; len>i;i++){
       // console.log(country[i].farmer);
       if(select == country[i].place){
           str += '<li>'+country[i].farmer+'</li>'
       }
   }
   list.innerHTML = str;
}
area.addEventListener('change',updateList,false);
*/


// 帶入e進去可以查詢各種狀態
// target可以了解目前所在元素位置
/*
var el = document.querySelector('.header');
el.addEventListener('click',function(e){
    console.log(e.target);
},false)
*/
// 可以確認點擊的位置
/*
var el = document.querySelector('.header');
el.addEventListener('click',function(e){
    console.log(e.target.nodeName);
},false)
*/

/*
var el = document.querySelector('.link');

el.addEventListener('click',function(e){
    //取消元素的默認行為

    //原本點連結會跳轉到指定網頁

    //也常用在submit按鈕,取消默認行為,先透過我的js去查詢表單有無錯誤,post去傳送
    e.preventDefault();
    // 比較 : e.stopPropagation() 只執行自己監聽的行為
    console.log('test');
})
*/

/*
// 中止冒泡事件 stopPropagation()
var el = document.querySelector('.box');
el.addEventListener('click',function(e){
    e.stopPropagation();
    alert('box');
    console.log('box');
},false);


var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(){
    alert('你沒有點到box');
    console.log('你沒有點到box');
},false);
*/



// addEventListener('事件',函數, false/true)
// false(事件氣泡 event bubbling)-代表:從指定元素往外找 - 較合乎一般邏輯
// true(事件捕抓 event capturing)-從最外層開始找,外面開始找到指定元素
/*
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('box');
    console.log('box');
},false);

// 從指定元素往外找 box --> body
var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(){
    alert('body');
    console.log('body');
},false);
*/

/*
var el = document.querySelector('.box');
el.addEventListener('click',function(){
    alert('box');
    console.log('box');
},true);

// 從最外層開始找 body --> box
var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(){
    alert('body');
    console.log('body');
},true);
*/

/*
// 綁定事件的語法差異
// 根本差異 onclick 不能綁定兩個事件

var elOn=document.querySelector('.btnOn');
elOn.onclick = function(){
    alert('on-1');
}


// 就算綁定兩個 alert / event  也只會出現最後一個
// 事件靈活性低

var elOn=document.querySelector('.btnOn');
elOn.onclick = function(){
    alert('on-2');
}


var elAdd=document.querySelector('.btnAdd');
elAdd.addEventListener('click',function(){
    alert('add-1');
},false)

// 事件監聽
// 綁定的兩個事件都會出現,後者不會取代前者

var elAdd=document.querySelector('.btnAdd');
elAdd.addEventListener('click',function(){
    alert('add-2');
},false)
*/

/*
// addEventListener 

var el = document.querySelector('.btn');

// ('語法 ex.click', 函數 function(e){}, false - 與處理事件有關)
el.addEventListener('click',function(e){
    alert('Baby!');
},false)
*/



/*
// 觀念篇-各種事件綁定的差異
// onclick是一個舊的寫法,但現在都還會碰到
// 新的寫法改用 addEventListener - 監聽 


var btn = document.querySelector('.btn');


btn.onclick = function(){
    alert('SayHi');
}

// addEventListener
var btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    alert('SaveTheWorld!')
},false)
*/
/*
// w3C school - HTML DOM Events
// https://www.w3schools.com/jsref/dom_obj_event.asp

var el = document.querySelector('.btn');

// 在function中帶入參數 e 
// 透過console.log(e)去看這個參數
// console 中,就會出現 MouseEvent 的參數 
// 利用座標就可以製作遊戲

el.onclick = function(e){
    console.log(e);
    alert("hello");
}
*/





// 1.將array轉為string
// 2.將string轉為array
// 學以上兩點是因為 local storage 只會保存 string 資料






/*
// XSS : cross-site scripting 跨網站指令攻擊 !!
// 不要相信任何前端來的東西

// innerHTML 有資安上危機,容易被植入script code, 每次跑text段內的文字, script code都會被讀入
// 攻擊的方式很多 : 例如改寫裡面所有的 "=" 

// 可以信任的資料  var farms = [];
// 不可以信任的資料  包含大小於符號 < >

// innerHTML 與 createElement 通常都會互用.但是表單的部分要特別注意

document.getElementById('send').onclick = function() {
    var str = document.getElementById('content').value;

    document.getElementById('main').innerHTML = str;
    document.getElementById('main2').innerHTML = str + "yesman";
}
*/



/*
// createElement 的寫法
// 步驟一:用 createElement 去產生節點
// 步驟二:動態增加 - 產生節點內容 str.tectContent = '1234'
//        or 透過 setAttribute 動態增加屬性  
// 步驟三:增加子節點 - 用 document.querySelector 去找出要加載在哪個節點
// 步驟四:用 appendChild 加載在該節點底下(增加子節點)

var str = document.createElement('em');
str.textContent = '1234';
str.setAttribute('class','blue');
//console.log(str);
document.querySelector('.title').appendChild(str);
*/

// 上下段對調

/*
var farms = [
    {
        farmer:'Kevin',
        dogs:['dog1','dog2'],
    } ,
    {
        farmer:'Jack',
        dogs:['dog3'],
    }
 ];

// 用 appendChild 增加子節點
// appendChild和innerHTML不同,不會刪除原本的內容,會加在後面

 var el = document.querySelector('.list');
 var farmLen = farms.length;
 for(var i=0;i<farmLen;i++){
     var str = document.createElement('li');
     str.textContent = farms[i].farmer;
     //console.log(farms[i].farmer)     
     el.appendChild(str);
 } 
*/


/*
var farms = [
   {
       farmer:'Kevin',
       dogs:['dog1','dog2'],
   } ,
   {
       farmer:'Jack',
       dogs:['dog3'],
   }
];


var el = document.querySelector('.list');
var farmLen = farms.length;
var str ='';
for(var i=0;i<farmLen;i++){
    var content = '<li>'+farms[i].farmer+'</li>';
    str += content;
    el.innerHTML = str; 
};
*/


/*
// '+變數+' '字串-變數-字串' 寫法
var el = document.querySelector('.list');
var link = 'http://www.yahoo.com';
var name = '查理'
el.innerHTML = '<li><a href="'+link+'">查理</a></li>'


var el2 = document.querySelector('#list2');
var link2 = 'http://www.google.com';
var name2 = '金剛'
el2.innerHTML = '<li><a href="'+link2+'">'+name2+'</a></li>'
*/



// innerHTML 外面用 "" 裡面用 ''  or 相反 外'' 內 ""
// innerHTML 特性,會清空原本HTML的內容,然後再塞JS的東西進去!(重要!)

/*
var el = document.querySelector('#main');
el.textContent = '1234  ';
el.textContent = "<h1 class='red'>1234</h1>";
*/

/*
var el2 = document.querySelector('#main2');
//el2.innerHTML = "<h1 class='blue'>1234</h1>";
// ? css的部分讀不到 - 寫錯 css 之間的分隔不用, or ;
var str = "<h1 id='blue'>1234555</h1>";
// innerHTML 會清空先前的資料
el2.innerHTML = str+str;
*/

/*
// 在querySelector下
// setAttribute 新標籤 用來建立 href 連結
// 其他標籤 ex.textContent 
// setAtrtribute 和 getAttribute 不同!!

var el = document.querySelector('.titleClass a');
el.setAttribute('href','http://www.hotmail.com');

// 動態加上文字(id),使其可以讀取css渲染功能
// 原本的class='str'還在,另外生成一個strId

var el2 = document.querySelector('.str');
el2.textContent = 555;
el2.setAttribute('id','strId');

// 查詢一個屬性的內容 
// setAttribute, tectContent, innerHTML

var el3 = document.querySelector('.titleClass a').setAttribute('href');
console.log(el3);

var el4 = document.querySelector('.titleClass a').textContent;
console.log(el4);

var el5 = document.querySelector('.titleClass').innerHTML;
console.log(el5);
*/

/*
// querySelectorAll()
// 多筆資料回傳一筆陣列,將html標籤給陣列化

var el = document.querySelectorAll('.titleClass em');
console.log(el);

el[0].textContent = '99999';
el[1].textContent = '66666';
el[2].textContent = '너무보고 싶어';

console.log(el.length);

var elLen = el.length;
for(var i=0;i<elLen;i++){
    el[i].textContent = i +'123';
}

// 縮短程式碼
// 方法一: var el
/*
var el = document.getElementById('titleId');
el.textContent='138884';
*/

/*
// 方法二:var el = querySelector('CSS選取樣式');
var el = document.querySelector('#titleId');
el.textContent = 'ABABABA';

var el2 = document.querySelector('.titleClass');
el2.textContent = '5566';

var el = document.querySelector('#titleId2 em');
el.textContent = '678';


/*
// https://opendata.epa.gov.tw/
// http://opendata.epa.gov.tw/Data/Contents/RainTenMin/
// 接三個資料,並過濾出想要的資料
// codepen, jsbin

var data2 = //天氣資料

console.log(data2.length);


//查詢10分鐘內哪個地區有下雨
for(var i=0;i<data2.length;i++){
    if(data2[i].Rainfall10min > 0){
        var county = data2[i].County;
        var township = data2[i].Township;
        var rain = data2[i].Rainfall10min;
        console.log(county+""+township+':'+rain);
    }
}


//查詢過去12小時內哪個地區有下雨
for(var i=0;i<data2.length;i++){
    if(data2[i].Rainfall12hr > 0){
        var county = data2[i].County;
        var township = data2[i].Township;
        var rain = data2[i].Rainfall12hr;
        var time = data2[i].PublishTime;
        var unit = data2[i].Unit;
        console.log(county+""+township+':'+rain+"降雨量"+","+time + "," + unit);
    }
}

//查詢過去1小時內哪個site有下雨
for(var i=0;i<data2.length;i++){    
    if(data2[i].Rainfall1hr > 0){
    var township = data2[i].Township;
    var sitename = data2[i].SiteName;
    var rain1 = data2[i].Rainfall1hr;
    console.log(township + sitename);       
    }
}





/*
// 多多利用政府資料開放平台 api
// 維護者很重要!! 確保更新
// 利用json view goolge chrome 插件
// 按右鍵檢視網頁原始碼(或無痕tab)進行複製
// 直接在前往資源的json按鈕上選擇無痕視窗
// 前後{}還有裡面的資料要清掉,確保[{},{}]陣列的格式
// 寫for迴圈可以用vscode的內建提示


var data = [{"seq":1,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"95536627758"},{"seq":2,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"29401707979"},{"seq":3,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"2950438948"},{"seq":4,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"23568957306"},{"seq":5,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"1228888909"},{"seq":6,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1653422816"},{"seq":7,"資料年期別":"100年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":8,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"84782951922"},{"seq":9,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"36985910854"},{"seq":10,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"3203409794"},{"seq":11,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"30442934653"},{"seq":12,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"1635879397"},{"seq":13,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1703687010"},{"seq":14,"資料年期別":"101年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":15,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"91743485094"},{"seq":16,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"48690776516"},{"seq":17,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"3977780739"},{"seq":18,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"40520835250"},{"seq":19,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"2216234751"},{"seq":20,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1975925776"},{"seq":21,"資料年期別":"102年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":22,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"67715769927"},{"seq":23,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"47996150231"},{"seq":24,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"4387112749"},{"seq":25,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"40494497738"},{"seq":26,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"1590802735"},{"seq":27,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1523737008"},{"seq":28,"資料年期別":"103年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"1"},{"seq":29,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"49438169577"},{"seq":30,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"51815944658"},{"seq":31,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"6030580655"},{"seq":32,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"40062888260"},{"seq":33,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"3624117460"},{"seq":34,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"2098358283"},{"seq":35,"資料年期別":"104年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":36,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"34830931370"},{"seq":37,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"46772912409"},{"seq":38,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"6385313814"},{"seq":39,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"35070928044"},{"seq":40,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"3723428844"},{"seq":41,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1593241707"},{"seq":42,"資料年期別":"105年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":43,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"43903732337"},{"seq":44,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"52038448568"},{"seq":45,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"6697705926"},{"seq":46,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"39324430545"},{"seq":47,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"3742111982"},{"seq":48,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"2274200115"},{"seq":49,"資料年期別":"106年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"},{"seq":50,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"免稅地","資料單位":"元","值":"48964380180"},{"seq":51,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"應稅地","資料單位":"元","值":"46458707329"},{"seq":52,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"自用住宅用地","資料單位":"元","值":"6708763035"},{"seq":53,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率20%","資料單位":"元","值":"34623508296"},{"seq":54,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率30%","資料單位":"元","值":"3180135143"},{"seq":55,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地稅率40%","資料單位":"元","值":"1946300855"},{"seq":56,"資料年期別":"107年","統計項目":"調整後原規定地價或前次移轉現值","稅率別":"一般用地其他稅率","資料單位":"元","值":"0"}]
console.log(data[0]["資料年期別"]); 

//var year = "資料年期別";
//console.log(data[0][year]); 
//console.log(data.length);

for (var i=0;i<data.length;i++) {
   if(data[i]["統計項目"]="調整後原規定地價或前次移轉現值"){
       console.log(data[i]["資料年期別"]);
   }
    
}


for(var i=0;i<data.length;i++){
   if(data[i]["資料年期別"]="99年"){
       console.log("稅率別:"+data[i]["稅率別"]);
   }
}




/*
// break
// 只要滿足條件就停止

var farms =[{
    farmer : 'Peter',
    field : 4,
    chick: 150,
    banana: 1000
},{
    farmer :'Joy',
    field : 6,
    chick : 50,
    banana: 2000
},{
    farmer :'Bill',
    field : 10,
    chick : 220,
    banana: 3200   
}];

var farmsTotal = farms.length;
//console.log(farmsTotal)
for (var i=0;i<farmsTotal;i++){
    if(farms[i].chick>50){
        console.log(farms[i].farmer+'的小雞剛好夠');
        farms[i].chick -= 50;
        console.log(farms[i].farmer+'的小雞剩下'+farms[i].chick);
        // break 只要有條件滿足就會停止了
        break; 
    };
    
};

/*
//計算今年香蕉採收總數

var farms =[{
    farmer : 'Peter',
    field : 4,
    chick: 150,
    banana: 1000
},{
    farmer :'Joy',
    field : 6,
    chick : 50,
    banana: 2000
},{
    farmer :'Bill',
    field : 10,
    chick : 220,
    banana: 3200   
}];

var farmsTotal = farms.length;
//console.log(farmsTotal)
var bananaTotal = 0;
for (var i=0;i<farmsTotal;i++){
    bananaTotal += farms[i].banana;
}

console.log('今年村子的香蕉採收量'+bananaTotal);


/*
//
i = i +1
i += 1

//
var total = 501
total++

total+=1



/*
//撈出小雞總數超過100隻以上

var farms =[{
    farmer : 'Peter',
    field : 4,
    chick: 150
},{
    farmer :'Joy',
    field : 6,
    chick : 50
},{
    farmer :'Bill',
    field : 10,
    chick : 220   
}];

var farmsTotal = farms.length;
console.log(farmsTotal);

for (var i=0;i<farmsTotal;i++){
    //console.log(farms[i].chick);
    if(farms[i].chick>100){
        console.log(farms[i].farmer+'的小雞超過100隻')
    }
};

/*
var farms =[{
    farmer : 'Peter',
    field : 4
},{
    farmer :'Joy',
    field : 6
}];

var farmLength = farms.length
console.log(farmLength);

for(var i=0;i<farmLength;i++){
    console.log('第'+(i+1)+'個農場主人是'+farms[i].farmer)
}


/*
for(var i=0;i<10;i++){
    console.log(i+'*'+i+'='+i*i);
}

/*
//for 迴圈-相同性質的資料可以透過for迴圈跑出來
//初始狀態-條件-更新內容 (初-條-更)
for (var i=0;i<=10;i++){
    console.log(i);
};


/*
var warnLight = 'yellow';

function light(str){
    alert('請注意現在是'+str+'色警戒');
};

switch(warnLight){

    case 'red':
        alert('紅色');
        break;

    case 'blue':
        alert('藍色');
        break;
    
    case 'yellow':
        alert('黃色');
        break;
    
    default:
        alert('彩色');
};
*/



/*
// switch 和 else if 差別 : 後者在跑的時候整個瀏覽器都會跑過,前者匹配完switch後,跑到break就結束了!
// 要switch 最好在很多條件的時候用比較好
// switch通常用在你已經知道條件的時候

var prefer = '米粉';

function eat(food){
    console.log('我現在想吃'+food);
};



switch(prefer){
    case '牛排':
        eat('牛排No.1');
        break;
    case '沙拉':
        eat('沙拉No.1');
        break;
    case '火鍋':
        eat('火鍋No.1');
        break;
    default:
        eat('拉麵No.1');
        break;
};


/*
var hungry = 8 ;
//飢餓程度1~10

function eat(food){
    console.log(food);
};

if(hungry <= 3){
    eat('沙拉');
}else if(hungry > 3 && hungry < 7){
    eat('香腸'); 
}else if(hungry >7 && hungry <9){
    eat('便當');
}else {
    eat('隨便');
};


/*
var hungry = '飽足';
if (hungry == '飢餓') {
    console.log('我好餓!'); 
} else {
    console.log('我在禁食!');
};


/*
var amVip = false ;
var myOrd = 1250 ;
var presentCheck = amVip == true && myOrd >1000 ;
//alert(presentCheck)
var orCheck = amVip == true || myOrd > 1000 ;
//alert(orCheck)
document.getElementById('andId').textContent = presentCheck ;
document.getElementById('orId').textContent = orCheck;


/*
var isID = true;
var isIn = false;

isID == true;
isID == true && isIn ==true 
//兩個條件都要滿足
isID == true && isIn == true;


var isID = true;
var isIn = true;
var isPaper = true;
isID == true && isIn == true && isPaper == true

var billFull = 1200;
var isVip = false ;
billFull > 1000 || isVip == true



/*
var nowPeople = 1;
var totalPeople = 2;
var allPeopleNoHereCheck = totalPeople !== nowPeople;
console.log(allPeopleNoHereCheck);
document.getElementById('totalId').textContent = allPeopleNoHereCheck;
*/


/*
var myMonth = 5;
var thisMonth = 12;
// == 會先回傳 true 或 false 的值 (!), 然後再透過 = 賦值給 birthdayCheck
var birthdayCheck = myMonth == thisMonth;
document.getElementById('totalId').textContent = birthdayCheck;
*/


/*
//邏輯運算子+布林值 --->  expr1 && expr2 如果expr1可以轉換為false,就返回expr1.

// = 只有一個等號,代表賦值
var aAge = 18;
var bAge = 18;

// == 兩個等號代表寬鬆相等,比較用的
aAge == bAge;
*/


/*
var farm = [
    {
        farmer : '卡斯柏' ,
        cat : [ 'kiki1' , 'kiki2' ] ,
        dog : 'mimi' ,
        duck : 20 ,
        chick : 30 ,
        totalanimal : function(){
            // this (靠北 JS 之 This 到底是什麼辣 https://www.youtube.com/watch?v=tpheRywjVQk  
            //   文件 https://paper.dropbox.com/doc/JS-This-Xw50EZtMFNqG0wUxKeIaz)
            var sum = this.duck + this.chick;
            console.log('卡斯柏的農場有' + sum + '隻動物!');
       }
    }
    ,
    {
        farmer : '維克' ,
        cat : [ 'mita' ] ,
        dog : 'R.I.P' ,
        duck : 32 ,
        chick : 33 ,
        totalanimal : function(){
            //錯誤方法,無法呼叫要用 this or var  
            var sum = duck + chick;
            console.log('維克的農場有' + sum +'隻動物!')
        }
    }
];

farm[0].totalanimal();
farm[1].totalanimal();
*/

/*
//物件+陣列的設計
//將物件放在字串內

var farms = [{      
    farmer:'Michael',
    dogs:['doby', 'Gogo'],
    chick:15,
    cornfield:[8,5,6],
    broccolifield:[6,6,6,6],
    scarecorw:9   
},{
    farmer:'Tony', 
    dogs:['Victory'],
    chick:22,
    cornfield:[8,7,1],
    broccolifield:[3,6,2,9],
    scarecorw:8
}];


//讀取陣列資料
console.log(farms[0].dogs[1]); 
*/



/*
//物件+function
//物件 - API,後端資料庫,JSON

var farm = {
    farmer:'Michael',
    chick:15,
    duck:3,
    dog:['AA','BB'],
    goDinner: function (){  //物件內建function
        console.log(farm.farmer + '該回家吃晚飯!');  // ; 注意, farm.farmer 因為沒有 var
        },  // , 注意
    poultryTotal: function (){  //物件內建function
        var num = farm.chick + farm.duck;
        console.log('我的農場總共有' + num + '隻家禽!');
    },    
};

console.log(farm.poultryTotal());
*/


/*
//物件
var farm = {
    farmer:'Michael', //用逗號
    dogs:['doby', 'Gogo'],
    chick:15,
    cornfield:[8,5,6],
    broccolifield:[6,6,6,6],
    scarecorw:9
}

console.log(farm);

//用 . 的方式來獲取陣列內的內容
console.log(farm.chick);

console.log(farm.cornfield);

console.log(farm.dogs[0]);
*/


/*
//在空陣列中新增內容 .push

var cornfield = [];
cornfield.push(5);
console.log(cornfield);

//一次增加多個數字

var cornfield = [];

cornfield.push(5);
cornfield.push(8);
cornfield.push(9);

console.log(cornfield);

//更改array中的數字

cornfield[2] = 7;
console.log(cornfield);

//查看array長度 .length
console.log(cornfield.length);
//組合字串
console.log('我總共有' + cornfield.length + '個');
*/

/*
//array
var confield1 = 8;
var confield2 = 5;
var confield3 = 6;

var cornfield = [8,5,6];
console.log(cornfield[0]); //js 從0開始算


var cornfield = [8,5,6];
console.log(cornfield[2]);
*/

/*
//老師寫的

document.getElementById('countId').onclick = function(){
    hamPrice = 50;
    cokePrice = 20;
    var numBurger =parseInt(document.getElementById('burgerId').value)*hamPrice; //.value 取值
    //alert(numBurger);
    var numCoke = parseInt(document.getElementById('cokeId').value)*cokePrice; 
    //var numCoke = document.getElementById('cokeId').type;  //.type 取類型 
    //alert(numCoke);
    //alert(numBurger+numCoke);  //確定是文字串的相加---> parseInt() 
    document.getElementById('totalId').textContent = numBurger + numCoke;
}
*/


/*
document.getElementById('countId').onclick = function(){      
    //alert('fire!')  
    var numBurger;
    var numCoke;
    var total;
    numBurger = parseInt(document.getElementById('burgerId').value);
    //alert('burger');
    numCoke = parseInt(document.getElementById('cokeId').value);
    //alert('coke');
    total =   numBurger*80 + numCoke*2;
    document.getElementById('totalId').textContent = total ;
}
*/





/*
var total; //全域變數

function count(oneNum, twoNum){
    total = oneNum*twoNum;
    console.log("總價格 " + total); 
}

count(8,99);
*/

/*
function count(oneNum, twoNum){
    var total = oneNum*twoNum;  //total 區域變數,跑完就會在記憶體中銷毀
    console.log("總價格 " + total); 
}

count(8,99);
*/


/*
function order(bugerWant, drink) {
    var bugerWant;
    var drink;
    var burgerPrice = 90;
    var drinkPrice =20;
    var totalPay = bugerWant*burgerPrice + drink*drinkPrice;
    return totalPay

}

order(19,26);
*/


/*
//老師的寫法-失敗中
//打招呼
function greet(){
    var greetNote = '歡迎光臨,請問您要點什麼?漢堡剩下最後8個喔!'
    document.getElementById('greetId').textContent = greetNote;
    console.log(greetNote)
}
greet();


//點餐的回應
funciton order(bugerWant, drink){
    var total = (bugerWant*90) + (drink*20);
    document.getElementById('receiveId').textContent = total;
}
order(19,26);
*/


/*
//按照自己思路第二次寫的
//打招呼部分

function greet(bugerWant, drink) {
  var greet = '親 : )歡迎光臨,請問您要點什麼?漢堡剩下最後88個喔!';
  document.getElementById('greetId').textContent = greet;
};

greet();


//點餐部分

function order(bugerWant, drink) {
    var bugerWant;
    document.getElementById('bugerWantId').textContent = bugerWant;
    
    var drink;
    document.getElementById('drinkId').textContent = drink;
    
    var burgerPrice = 90;
    var drinkPrice =20;

    var totalPay = bugerWant*burgerPrice + drink*drinkPrice;
    document.getElementById('receiveId').textContent = totalPay;

}

order(19,26);
*/


//按照自己思路第一次寫的

/*  
var burgerLeft = 8;
var bugerWant = 7;
var drink = 1;

var burgerPrice = 30;
var drinkPrice = 10;

var total;
if(burgerLeft >= bugerWant){
    total = bugerWant*burgerPrice +  drink*drinkPrice;
}  else {
    total = burgerLeft*burgerPrice +  drink*drinkPrice;
}


document.getElementById('burgerLeftId').textContent = burgerLeft;
document.getElementById('bugerWantId').textContent = bugerWant;
document.getElementById('drinkId').textContent = drink;
document.getElementById('receiveId').textContent = total;
*/

/*
var cookiePrice = 35;
var myMoney = 15;
var total = cookiePrice - myMoney;

//alert(total);

document.getElementById('cp').textContent = cookiePrice;
document.getElementById('mm').textContent = myMoney;
*/

/*
console.log('hello world!')


var price = 3 ;
var total = price*3 ;
//console.log(total);

document.getElementById('price').textContent = total ;

var polite = 'Hello ' ;
var indexName = '伺服器' ;
var totalPolite = polite + indexName;


document.getElementById('myName').textContent = totalPolite ;
*/



/*
alert('hello world!')
document.getElementById('title1').textContent = '修改後的標題';
*/

/*
var cookiePrice = 35;
alert(cookiePrice);
cookiePrice = 25;
alert(cookiePrice);
*/

/*
var price = 30;
document.getElementById('price').textContent = price;
*/

/*
var indexName = '伺服器' ;
alert(indexName);
*/

