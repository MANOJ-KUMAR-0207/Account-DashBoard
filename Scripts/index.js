const jsonObject = `{
  "Grants" : 
  {
    "info" : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares of Grants.",
    "EnteredDate" : "30/07/1987",
    "ReceivedDate" : "06/06/1990",
    "NumberofShares" : "50",
    "Type" : "VBS Security",
    "Amount" : "$30,000.00",
    "Status" : "Entered"},
  "Contributions" : {
      "info" : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares of Contributions.",
      "EnteredDate" : "10/07/1987",
      "ReceivedDate" : "06/08/2000",
      "NumberofShares" : 580,
      "Type" : "VBS Security",
      "Amount" : "$700,00.00",
      "Status" : "Exit"
  },
  "Exchange" : {
      "info" : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares of Exchange.",
      "EnteredDate" : "30/07/2018",
      "ReceivedDate" : "06/06/2021",
      "NumberofShares" : 50,
      "Type" : "VBS Security",
      "Amount" : "$10,000.00",
      "Status" : "Entered"
  },
  "OtherTransactions" : {
      "info" : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares of Other Transactions.",
      "EnteredDate" : "10/04/1997",
      "ReceivedDate" : "06/08/2000",
      "NumberofShares" : 180,
      "Type" : "VBS Security",
      "Amount" : "$100,000.00",
      "Status" : "Exit"
  }
}`
var data = JSON.parse(jsonObject);
function dropDown() 
{
  document.getElementById("dropDown").classList.toggle("show");
}
function closeWarning() {
  document.getElementById("warning").remove();
  document.getElementById("infoContainer").style.marginTop = "30px";
}
function changeAccount() {
  var accountNumber = document.getElementById("account").value;
  document.getElementById("accountContent").innerHTML = accountNumber;
}
let selectedOption=data.Grants;
function deSelectAll()
{
  var optionBoxes=document.getElementById("optionNav").children;
  for(var i=0;i<optionBoxes.length;i++)
    optionBoxes[i].classList.remove("selected");
}
function grants()
{
  deSelectAll();
  selectedOption=data.Grants;
  updateData();
  document.getElementById("Grants").classList.add("selected");
}
function contributions()
{
  deSelectAll();
  selectedOption=data.Contributions;
  updateData();
  document.getElementById("Contributions").classList.add("selected");
}
function exchange()
{
  deSelectAll();
  selectedOption=data.Exchange;
  updateData();
  document.getElementById("Exchange").classList.add("selected");
}
function otherTransactions()
{
  deSelectAll();
  selectedOption=data.OtherTransactions;
  updateData();
  document.getElementById("Other-Transactions").classList.add("selected");
}
function updateData()
{
  document.getElementById("info").innerHTML=selectedOption.info;
  document.getElementById("enteredDate").innerHTML=selectedOption.EnteredDate;
  document.getElementById("receivedDate").innerHTML=selectedOption.ReceivedDate;
  document.getElementById("shares").innerHTML=selectedOption.NumberofShares;
  document.getElementById("amount").innerHTML=selectedOption.Amount;
  document.getElementById("status").innerHTML=selectedOption.Status;
}