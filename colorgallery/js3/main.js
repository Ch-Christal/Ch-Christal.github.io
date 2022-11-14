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
        setInnerHTML();
    } else {
        setwrongInnerHTML();
    }
}
function check2() {
    var username = document.getElementById("uname2");
    if (uname2.value == "青" ) {
        setInnerHTML();
    } else {
        setwrongInnerHTML();
    }
}
function check3() {
    var username = document.getElementById("uname3");
    if (uname3.value == "黄" ) {
        setInnerHTML();
    } else {
        setwrongInnerHTML();
    }
}
function check4() {
    var username = document.getElementById("uname4");
    if (uname4.value == "黑" ) {
        setInnerHTML();
    } else {
        setwrongInnerHTML()
    }
}

function check5() {
    var username = document.getElementById("uname5");
    if (uname5.value == "白" ) {
        setInnerHTML();
    } else {
        setwrongInnerHTML()
    }
}

function setInnerHTML(){
    test1.innerHTML = "恭喜，回答正确！"; //点击按钮将内容插入到p标签内！
}
function setwrongInnerHTML(){
    test1.innerHTML = "回答错误，请重试！"; //点击按钮将内容插入到p标签内！
}
