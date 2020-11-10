
var prev = document.getElementById("yo-prev")           //上一張按鈕
var next = document.getElementById("yo-next")           //下一張按鈕

var items = document.getElementsByClassName("yo-item")  //所有項目

var index= 0;           //編號


//函式按鈕:下一張
function btnNext(){
    index++;

    if (index == items.length) index=0;
    console.log(index);  //測試012012012
    showItem();          //顯示項目
    reset();             //重設
    swithbutton();
}

//函式按鈕:上一張
function btnPrev() {
    index--;                //編號遞減

    if(index== -1) index=items.length-1;  // 如果編號超出範圍 編號等於 長度-1
    console.log(index);  //測試210210210
    showItem();
    reset();
    swithbutton();
}

next.onclick = btnNext;         //點擊函式
prev.onclick = btnPrev;         //點擊函式


//顯示項目函式
function showItem() {
    for( var i = 0;i < items.length;i++){
        items[i].classList.remove("yo-active");
    }

    items[index].classList.add("yo-active");
}

// 取得屬性("屬性名稱")
var duration = document.getElementById("yo-slider").getAttribute("data-slider-duration");
console.log(duration);

// 設定間隔呼叫函式 (函式名稱，時間)
var auto = setInterval(btnNext,duration);


//為防止在自動撥放時和點擊衝突，造成圖片跳很快
function reset(){
    clearInterval(auto);                   //先清除時間
    auto = setInterval (btnNext,duration); //重新自動播放
}

//取得所有小按鈕
var btns = document.getElementById("yo-button");

// 迴圈執行每顆按鈕點擊事情
for(var i=0 ; i<btns.length ; i++)
    //匿名函式 function(){}
    btns[i].onclick = function(){
        index = this.getAttribute("data-slider-item")-1;  // 編號 = 點擊按鈕的屬性-1


        showItem();
        reset();
        swithbutton();
    }

    // 小按鈕啟動效果切換
    function swithbutton(){
        for (var i=0;i<btns.length;i++);
        btns[i].classList.remove("yo-button-active")

        btns[index].classList.add("yo-button-active");
    }