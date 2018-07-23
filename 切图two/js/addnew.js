var close = document.getElementById('close-btn');
close.onclick = function() {
    alert('y');
    window.close();
}
//删除作者
var aList = document.querySelectorAll('ul li');
var delauthor = document.querySelectorAll('ul li img');
var aLen = delauthor.length;
function delAuthor() {
    for(let i = 0; i < aLen; i++) {
        delauthor[i].onclick = function() {
            aList[i].remove();
        }
    }
}
delAuthor();
var addauthor = document.getElementById('addauthor');
function addAuthor() {
   addauthor.onclick = function() {
       alert('添加作者');
   }
}
addAuthor();
//提交
var submit = document.getElementById('submit-btn');
function submitNew() {
    submit.onclick = function() {
        alert('提交');
    }
}
submitNew();