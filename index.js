var preloader;
function preload(opacity) {
    if (opacity <= 0) {
        showContent();
    }
    else {
        preloader.style.opacity = opacity;
        window.setTimeout(function () { preload(opacity - 0.1) }, 100);
    }
}

function showContent() {
    preloader.style.display = 'none';
    document.getElementById('content').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function () {
    preloader = document.getElementById('preloader');
    preload(1);
});

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "bhanuvenkat" && password == "bhanu@24") {
        window.location.assign("index.html"); // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

var btn = document.getElementById("btn");
btn.addEventListener('click', function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone-no").value
    var content = document.getElementById("content").value
    var body = 'Name : ' + name + '<br/>Phone Number : ' + phone + '<br/>Email : ' + email + '<br/>Message : ' + content
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "bhanuvenkat204@gmail.com",
        Password: "DF07296AAAE9162B6518AA1F5872B37F83DA",
        To: 'bhanuvenkat204@gmail.com',
        From: email,
        Subject: name,
        Body: body
    }).then(
        alert("^-^ EMAIL SENT ^-^")
    );
})

const img = ["img/collection/Watch_1.png", "img/collection/Watch_2.png", "img/collection/Watch_3.png", "img/collection/Watch_4.png", "img/collection/Watch_5.png", "img/collection/Watch_8.png", "img/collection/Watch_9.png", "img/collection/Watch_10.png", "img/collection/Watch_11.png", "img/collection/Watch_12.png"];
const price = ["Rs.25,000", "Rs.15,000", "Rs.10,000", "Rs.8,000", "Rs.55,000", "Rs.1,25,000", "Rs.25,000", "Rs.20,000", "Rs.21,000", "Rs.25,000"];
const modle = ["GA2100", "GA2200", "GA2300", "GA2400", "GA2500", "GA2600", "GA1500", "GA2800", "GA2900", "GA3000"];
var cartindex = []
var i;
function product(x) {
    i = x - 1;
    document.getElementById("product-page").style.display = "block";
    document.getElementById("product-img").src = img[x - 1];
    document.getElementById("product-price").innerHTML = price[x - 1];
    document.getElementById("modle").innerHTML = modle[x - 1];
}

function producthide() {
    document.getElementById("product-page").style.display = "none";
    document.getElementById("cart").style.display = "none";
}
var c = 0;

function cart() {
    if (c == 1) {
        document.getElementById("cart").style.display = "none";
        c = 0;
    }
    else {
        document.getElementById("cart").style.display = "block";
        c = 1;
    }
}

function checkout(){
    document.getElementById("pay").style.display="block";
    document.getElementById("cart").style.display = "none";

}

var paymentid =Math.random().toString(36).substring(2, 36+2);
function addcart() {
    document.getElementById("cart").innerHTML += `
            <a onclick="product(1)">
            <div class="cart-item">
            <img src="`+ img[i] + `" alt="">
            <h1>Casio G - Shock <br>`+ modle[i] + `<br> <span class="price">` + price[i] + `</span></h1>
        </div>`
}

function pay(){
    document.getElementById("pay").style.display="none";
    alert("^-^ PAYMENT DONE ^-^\n"+"Transaction Id : "+ paymentid)
}

