function enter()
{
var code = document.getElementById("my_pass").value;
var asap = "ДОМА";
var pass = "ВСТР3Ч4";
var dvas = "ПОДСТ4В4";
var kras = "МОМ3НТ";
var vras = "УБ1ЙСТВО";
var dras = "ПР4ВОСУД13";
var asas = "ХОНК";
var sasa = "БРОСОК";
if(code==asap)
{location.href="../no-index.html";}
else{
if(code==pass)
{location.href="";}
else{
if(code==dvas)
{location.href="";}
else{
if(code==kras)
{location.href="";}
else{
if(code==vras)
{location.href="";}
else{
if(code==dras)
{location.href="";}
else{
if(code==asas)
{location.href="";}
else{
if(code==sasa)
{location.href="";}
else{
location.href="no-index.html";}
}}}}}}}}
var input = document.getElementById("my_pass");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("myBtn").click();
  }
});
