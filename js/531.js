/* JS Page */

window.onload = function () {

//Tax 1RM figures and multiply by 90%
var element1 = document.getElementById("rm1").innerHTML * 0.9;
var element2 = document.getElementById("rm2").innerHTML * 0.9;
var element3 = document.getElementById("rm3").innerHTML * 0.9;
var element4 = document.getElementById("rm4").innerHTML * 0.9;

//Take the 90% 1RM figure and input it in the Max cells
document.getElementById("max1").innerHTML = element1;
document.getElementById("max2").innerHTML = element2;
document.getElementById("max3").innerHTML = element3;
document.getElementById("max4").innerHTML = element4;

//


}



