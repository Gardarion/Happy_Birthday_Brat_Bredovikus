function enter()
{
var code = document.getElementById("my_pass").value;
var asap = "Gray";
var pass = "123456";
var dvas = "НОРМАЛЬНЫЙ БРАТ";
var dddd = "НОРМАЛЬНЫЙ БРАТ!";
var vvvv = "Нормальный брат!";
var aaaa = "Нормальный брат";
var kras = "БредоТест";
var vras = "Тёмный лес";
var rrrr = "Темный лес";
var urod = "Пароль неверный! Штизебрат?";
if(code==asap)
{location.href="coderavengray.html";}
else{
if(code==pass)
{location.href="atiumenmister.html";}
else{
if(code==dvas || code==dddd || code==vvvv || code==aaaa)
{location.href="normalniybrat.html";}
else{
if(code==kras)
{location.href="opros.html";}
else{
if(code==vras || code==rrrr)
{location.href="kvest.html";}
else{
  alert(urod);}
}}}}}
var input = document.getElementById("my_pass");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
