function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (!isEmpty(username) && !isEmpty(password)) {

        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";

        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";

        return true;
    } else {
        var meassge = document.getElementById("errLogin");
        var errUsername = document.getElementById("errUsername");
        var errPassword = document.getElementById("errPassword");

        errUsername.style.color = "red";
        errUsername.display = "inline";
        errUsername.style.fontWeight = "900";
        errPassword.style.color = "red";
        errPassword.display = "inline";
        errPassword.style.fontWeight = "900";



        if (isEmpty(username) && isEmpty(password)) {

            errUsername.innerHTML = " * you have full up username   ";

            errPassword.innerHTML = " * you have full up password    ";

        } else if (isEmpty(username)) {
            errUsername.innerHTML = " * you have full up username    ";

        } else {
            errPassword.innerHTML = " * you have full up password     ";

        }

        return false;
    }

}
//-------------------------------------------------------------------------------------

//------------- username method 
function isEmpty(a) {
    if (a.length == 0) {

        return true;
    } else {
        return false;
    }
}

//-----------------------------------------------------------------------------
function validateFeedback() {

    // && IsVaaildEmail(email) &&    !IsVaaildEmail(email)
    if (IsContenct() & IsVaaildName() & IsVaaildEmail() & IsPhoneNumber() & IsSelected()) {

        return true;

    } else {




        return false;
    }
}

function IsVaaildName() {
    var name = document.getElementById("errName");
    name.style.color = "red";
    name.display = "inline";
    if (isEmpty(document.getElementById("name").value) || document.getElementById("name").value.search(/^[A-Za-z'\-\._ ]{4,}$/) != 0) {
        name.display = "block";
        name.style.fontWeight = "900";
        name.style.fontSize = "18px";
        name.style.marginLeft = "90px";
        name.innerHTML = "* name sould  at least 4 charactor english char and no digit";

        return false;
    } else {
        name.innerHTML = "";
        name.display = "none";
        return true;
    }
}


function IsVaaildEmail() {
    var emailErr = document.getElementById("errEmail");
    var t = document.getElementById("em").value.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != 0;
    if (t || isEmpty(document.getElementById("em"))) {
        emailErr.style.color = "red";
        emailErr.display = "block";
        emailErr.style.fontWeight = "900";
        emailErr.style.marginLeft = "160px";

        emailErr.style.fontSize = "18px";

        emailErr.innerHTML = "   * Email sould like this example@copmay.domain and not Empty ";

        return false;
    } else {


        emailErr.innerHTML = "";
        emailErr.display = "none";
        return true;

    }


}

function IsPhoneNumber() {
    var Rphone = document.getElementById("phone").value.search(/^(05\d{8}|9665\d{8})$/) != 0;
    var m = document.getElementById("phoneErr");
    if (Rphone || isEmpty(document.getElementById("phone"))) {
        m.style.color = "red";
        m.display = "block";
        m.style.fontWeight = "900";
        m.style.fontSize = "18px";
        m.style.marginLeft = "220px";
        m.style.marginRight = "40px";
        m.style.textAlign = "left";

        m.innerHTML = "* phone like this 05xxxxxxxxxx  ";


        return false;
    } else {

        m.innerHTML = "";
        m.display = "none";
        return true;
    }

}

function IsContenct() {
    var t = document.getElementById("msgErr");

    var str = document.getElementById("msg").value;
    var res = (str.trim() == "");

    if (res) {
        t.style.color = "red";


        t.display = "block";
        t.style.fontWeight = "900";
        t.innerHTML = "*please write a detail  ";
        return false;
    } else {


        msg.innerHTML = "";
        msg.display = "none";
        return true;
    }
}

function IsSelected() {
    var t = document.getElementById("sub").value == "Chose your Subnect";

    var m = document.getElementById("selErr");
    m.style.color = "red";
    m.display = "block";
    m.style.fontWeight = "900";
    m.style.marginLeft = "200px";


    if (t) {
        m.innerHTML = "* select subject  from bellow ";
        return false;
    } else {

        m.innerHTML = "";
        m.display = "none";
        return true;
    }
}

function checkDigit() {


    var str = document.getElementById("name").value;
    var h = str.substr(str.length - 1, str.length);

    var m = h.search(/[0-9]/g) != 0;
    var t = str.search((/[0-9]/g)) != 0;

    if (m) {
        var name = document.getElementById("errName");

        name.display = "none";
        name.innerHTML = " ";

    } else {
        var name = document.getElementById("errName");
        name.style.color = "red";
        name.display = "inline";
        name.style.fontWeight = "900";
        name.display = "inline";
        name.innerHTML = "* Please Remove Digit " + h + "</br>";
    }


}
//-------------------------
function checkDiget2() {
    var str = document.getElementById("name").value;

    var t = str.search((/^[A-Za-z][A-Za-z]*$/)) == 0;


    if (t) {
        var name = document.getElementById("errName");

        name.display = "none";
        name.innerHTML = " ";

    } else {
        var name = document.getElementById("errName");

        name.style.color = "red";
        name.display = "inline";
        name.style.fontWeight = "900";
        name.display = "inline";
        name.fontSize = "16px";
        name.innerHTML = "* full up filed or remomve number " + "</br>";
    }

}
//------------------------
function changeBack1() {
    var t = document.getElementById("name");
    t.style.backgroundColor = "yellow";
}

function changeBack2() {
    var m = document.getElementById("name");
    m.style.backgroundColor = "white";
}

function changeBack3() {
    var t = document.getElementById("em");
    t.style.backgroundColor = "yellow";
}

function changeBack4() {
    var m = document.getElementById("em");
    m.style.backgroundColor = "white";
}


function changeBack5() {
    var t = document.getElementById("phone");
    t.style.backgroundColor = "yellow";
}

function changeBack6() {
    var m = document.getElementById("phone");
    m.style.backgroundColor = "white";
}



function changeBack7() {
    var t = document.getElementById("sub");
    t.style.backgroundColor = "yellow";
}

function changeBack8() {
    var m = document.getElementById("sub");
    m.style.backgroundColor = "white";
}



function changeBack9() {
    var t = document.getElementById("msg");
    t.style.backgroundColor = "yellow";
}

function changeBack10() {
    var m = document.getElementById("msg");
    m.style.backgroundColor = "white";
}

function changeBack11() {
    var t = document.getElementById("username");
    t.style.backgroundColor = "yellow";
}

function changeBack12() {
    var m = document.getElementById("username");
    m.style.backgroundColor = "white";
}

function changeBack13() {
    var t = document.getElementById("password");
    t.style.backgroundColor = "yellow";
}

function changeBack14() {
    var m = document.getElementById("password");
    m.style.backgroundColor = "white";
}