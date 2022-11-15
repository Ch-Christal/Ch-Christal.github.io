function Show1() {
    document.getElementById('modal11').classList.remove('hide1');
}
function Show2() {
    document.getElementById('modal12').classList.remove('hide2');
}
function Show3() {
    document.getElementById('modal13').classList.remove('hide3');
}
function Show4() {
    document.getElementById('modal14').classList.remove('hide4');
}
function Show5() {
    document.getElementById('modal15').classList.remove('hide5');
}
function Hide1() {
    document.getElementById('modal11').classList.add('hide1');
}
function Hide2() {
    document.getElementById('modal12').classList.add('hide2');
}
function Hide3() {
    document.getElementById('modal13').classList.add('hide3');
}
function Hide4() {
    document.getElementById('modal14').classList.add('hide4');
}
function Hide5() {
    document.getElementById('modal15').classList.add('hide5');
}
function check1() {
    var username = document.getElementById("uname1");
    if (uname1.value == "赤" ) {
        set1InnerHTML();
    } else {
        set1wrongInnerHTML();
    }
}
function check2() {
    var username = document.getElementById("uname2");
    if (uname2.value == "青" ) {
        set2InnerHTML();
    } else {
        set2wrongInnerHTML();
    }
}
function check3() {
    var username = document.getElementById("uname3");
    if (uname3.value == "黄" ) {
        set3InnerHTML();
    } else {
        set3wrongInnerHTML();
    }
}
function check4() {
    var username = document.getElementById("uname4");
    if (uname4.value == "黑" ) {
        set4InnerHTML();
    } else {
        set4wrongInnerHTML();
    }
}

function check5() {
    var username = document.getElementById("uname5");
    if (uname5.value == "白" ) {
        set5InnerHTML();
    } else {
        set5wrongInnerHTML();
    }
}

function set1InnerHTML(){
    test1.innerHTML = "恭喜你，回答正确！"; //点击按钮将内容插入到p标签内！
}
function set1wrongInnerHTML(){
    test1.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}
function set2InnerHTML(){
    test2.innerHTML = "恭喜你，回答正确！"; //点击按钮将内容插入到p标签内！
}
function set2wrongInnerHTML(){
    test2.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}
function set3InnerHTML(){
    test3.innerHTML = "恭喜你，回答正确！"; //点击按钮将内容插入到p标签内！
}
function set3wrongInnerHTML(){
    test3.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}
function set4InnerHTML(){
    test4.innerHTML = "恭喜你，回答正确！"; //点击按钮将内容插入到p标签内！
}
function set4wrongInnerHTML(){
    test4.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}
function set5InnerHTML(){
    test5.innerHTML = "恭喜你，回答正确！"; //点击按钮将内容插入到p标签内！
}
function set5wrongInnerHTML(){
    test5.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}