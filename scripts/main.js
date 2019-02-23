// var a = [1,2,3,5,6,34,23,12,0,12,-12];
// var min = Infinity;
// for(var i=0; i<=a.length; i++){
//     if(min > a[i]){
//         var min = a[i];
//     }
// }
// console.log(min) Рішено найменше значення:-)
// var a = [1,2,3,5,6,34,23,12,0,12,-12];
// var min1 = Infinity;
// var min2 = Infinity;
// for(var i=0; i<=a.length; i++){
//     if(min1 > a[i]){
//         var min1 = a[i];
//     }
//     if (min2 > min1 && min2 > a[i] && i+2 <= a.length){
//         var min2 = a[i];
//         console.log(min2);
//     }
//
// }
// console.log("Перше мін значення = " + min1);
// console.log("Друге мін значення = " + min2);
// var a = [1,2,3,5,6,34,23,12,0,12,-12];
// var min = Infinity;
// var max = -Infinity;
// for(var i=0; i<=a.length; i++){
//     if(min > a[i]){
//         var min = a[i];
//     }
//     if(max < a[i]){
//         var max = a[i];
//     }
// }
// console.log('Мінімальне значення =  ' + min);
// console.log('Максимальне значення = ' + max);
// var c = a.indexOf(min);
// var d = a.indexOf(max);
// a[c] = max;
// a[d] = min;
// console.log(a) Мін і макс місцями
// var newTab;
// function openTab() {
//     newTab = window.open('https://slack.com/','', 'width=250, height=250');
//     newTab.focus();
// }
// function resizeTab() {
//     newTab.resizeTo(500,500);
//     newTab.focus();
// }
$( document ).ready(function () {
    $("#button").click(function () {
        var user = {};
        user.username = $("#email").val();
        user.password = $("#password2").val();
        $.ajax({
            method: "GET",
            url: "https://mainacademydemo1.azurewebsites.net/api/User/Login",
            data: user
        })
            .done(function (msg) {

            });
    });
});
    $("#register").click(function () {


        let username = $("#username").val();
        let phone = $("#phone").val();
        let addressLine1 = $("#addressLine1").val();
        let password = $("#password1").val();
        let conPassword = $("#confirmpassword").val();
        validate(username,phone,addressLine1,password,conPassword);
        $.ajax({
            method: "GET",
            url: "https://mainacademydemo1.azurewebsites.net/api/User/Login",
            data: user
        })
            .done(function (msg) {
                    console.log(msg);
            });
        function validate(username,phone,addressLine1,password,conPassword) {
            valPassword(password)
            valNumber(phone)
        }
        function valPassword(pasw) {
            let patt = new RegExp("^(?=.*\\d)(?=.*[#$@!%&*?])[A-Za-z\\d#$@!%&*?]{8,}$");
            let res = patt.test(pasw);
            if (res !==true){
                $("#danger-password").text("Password should contain at least one figure and Upper case letter");
                return false;
            }
            else {
                return true;
            }
        };
        function valNumber(phone) {

            let patt = new RegExp("^\\d{3}-\\d{3}-\\d{4}$");
            let res = patt.test(phone);
            if (res !==true){
                $("#phone-span").text("Your phone number is invalid");
                return false;
            } else {
                return true;
            }

        }
    });