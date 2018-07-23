var coUl = document.getElementsByTagName('ul')[0];
var main = document.getElementById("card-main");
var card_item = document.getElementsByClassName("vr-card-item")[0];

var workUl = document.getElementsByClassName('vr-tab')[0];


//侧边栏课程选择
coUl.onclick = function (e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    console.log(target.innerText);
    if(target.innerText == "课程一：静夜思") {
        main.className = "";
        card_item.style.display = "block";
        main.className = "vr-card-main";
    }else {
        card_item.style.display = "none";
        main.className = "vr-card-resource_not";
    }
}
//作品
workUl.onclick = function(e) {
    var event = e || window.event;
    var target = event.target || event.srcElement;
    if(target.innerText == "我的作品") {
        main.className = "";
        card_item.style.display = "none";
        main.className = "vr-card-mywork";
        main.innerText = "我的作品";
    }
    else  if(target.innerText == "班级作品") {
        main.className = "";
        card_item.style.display = "none";
        main.className = "vr-card-mywork";
        main.innerText = "班级作品";
    }
    else {
        main.className = "";
        main.innerText = "";
        card_item.style.display = "block";
    }
}
//添加作品
var addworks = document.getElementById('addworks');
addworks.onclick = function() {
    window.open("addNew.html","newwindow","height=579,width = 751,"
    +"toolbar = no,menubar = no,scollbars = no,resizable =hhh no,location = no,status = no");
}
//搜索---获得输入框信息
var search = document.getElementsByClassName('vr-search__btn');
search[0].onclick = function() {
    alert('搜索');
}
//选页---最左边前页，最右边后一页
var page = document.getElementsByClassName('vr-page__item');
function chosePage() {
    for(let i = 0;i < page.length;i++) {
        page[i].onclick = function() {
            alert(i);
        }
    }
}
chosePage();