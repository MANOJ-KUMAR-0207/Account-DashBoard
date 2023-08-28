var data; 
function readData()
{
  var xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET","/Scripts/data.json",false);
    xmlhttp.send();
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
        data=JSON.parse(xmlhttp.responseText);
}
readData();
console.log(data);
function dropDown() {
  document.getElementById("dropDown").classList.toggle("show");
}
function closeWarning() {
  document.getElementById("warning").remove();
  document.getElementById("infoContainer").style.marginTop = "30px";
}
function changeAccount() {
  var name_date = document.getElementById("account").value;
  var name=name_date.split("-")[0];
  var date=name_date.split("-")[1];
  document.getElementById("accountContent").innerHTML = name;
  document.getElementById("balanceDate").innerHTML=date;
}
let selectedOption = data.Grants;
function deSelectAll() {
  var optionBoxes = document.getElementById("optionNav").children;
  for (var i = 0; i < optionBoxes.length; i++)
    optionBoxes[i].classList.remove("selected");
}
function grants() 
{
  deSelectAll();
  selectedOption = data.Grants;
  updateData();
  document.getElementById("Grants").classList.add("selected");
}
function contributions() {
  deSelectAll();
  selectedOption = data.Contributions;
  updateData();
  document.getElementById("Contributions").classList.add("selected");
}
function exchange() {
  deSelectAll();
  selectedOption = data.Exchange;
  updateData();
  document.getElementById("Exchange").classList.add("selected");
}
function otherTransactions() {
  deSelectAll();
  selectedOption = data.OtherTransactions;
  updateData();
  document.getElementById("Other-Transactions").classList.add("selected");
}
function updateData() {
  document.getElementById("info").innerHTML = selectedOption.info;
  document.getElementById("enteredDate").innerHTML = selectedOption.EnteredDate;
  document.getElementById("receivedDate").innerHTML = selectedOption.ReceivedDate;
  document.getElementById("shares").innerHTML = selectedOption.NumberofShares;
  document.getElementById("amount").innerHTML = selectedOption.Amount;
  document.getElementById("status").innerHTML = selectedOption.Status;
}
var pageNumberIndex = 0;
var carouselContent = data.Carousel[pageNumberIndex];
function fillCarousel() {
  document.getElementById("carouselTitle").innerHTML = carouselContent.Title;
  document.getElementById("carouselContent1").innerHTML = carouselContent.column1Content;
  document.getElementById("carouselContent2").innerHTML = carouselContent.column2Content;
}
function nextPage() {
  pageNumberIndex++;
  pageNumberIndex = pageNumberIndex % 4;
  carouselContent = data.Carousel[pageNumberIndex];
  fillCarousel();
}
function previousPage() {
  pageNumberIndex--;
  if (pageNumberIndex < 0)
    pageNumberIndex = 3;
  carouselContent = data.Carousel[pageNumberIndex];
  fillCarousel();
}