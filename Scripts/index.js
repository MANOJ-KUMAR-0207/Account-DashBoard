const jsonObject = `{
  "Grants" : 
  {
    "info" : "Vanguard New Jersey Long-Term Tax-Exempt Fund Admiral Shares of Grants.",
    "EnteredDate" : "30/07/1987",
    "ReceivedDate" : "06/06/1990",
    "NumberofShares" : "50",
    "Type" : "VBS Security",
    "Amount" : "$30,000.00",
    "Status" : "Entered"
  },
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
  },
  "Carousel": [
    {
        "Title" : "Featured-1",
        "column1Content" : "Learn what are grants",
        "column2Content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae praesentium, doloremque quaerat aliquid eveniet, aperiam et rem, beatae minima necessitatibus delectus adipisci debitis sed cum magni voluptatum quisquam nesciunt qui libero veniam pariatur iste? Voluptatibus, nisi?"
    },
    {
        "Title" : "Featured-2",
        "column1Content" : "Learn more about Conribution",
        "column2Content" : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ut maiores cum maxime rem error eligendi facere. Modi, provident quae."
    },
    {
        "Title" : "Featured-3",
        "column1Content" : "Learn how exchange works and backend process of it",
        "column2Content" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eligendi dolorum, quae rem culpa commodi explicabo quisquam quis beatae vitae perferendis maiores voluptates? Sequi quas ullam dolore saepe! Odit illum ullam quos exercitationem ut nam doloremque omnis dolores ratione esse, vel at natus a cum!"
    },
    {
        "Title" : "Featured-4",
        "column1Content" : "Learn the concept of Shares",
        "column2Content" : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, rem sapiente soluta accusamus placeat atque velit temporibus, voluptas, porro doloribus cum vitae vero. Beatae explicabo nulla quas quo facere ad repudiandae necessitatibus ducimus illo, impedit, hic quod libero. Fugit atque at provident pariatur esse dolores accusamus veritatis asperiores a impedit."
    }
  ]
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
var pageNumberIndex=0;
var carouselContent=data.Carousel[pageNumberIndex];
function fillCarousel()
{
  document.getElementById("carouselTitle").innerHTML=carouselContent.Title;
  document.getElementById("carouselContent1").innerHTML=carouselContent.column1Content;
  document.getElementById("carouselContent2").innerHTML=carouselContent.column2Content;
}
function nextPage()
{
    pageNumberIndex++;
    pageNumberIndex=pageNumberIndex%4;
    carouselContent=data.Carousel[pageNumberIndex];
    fillCarousel();
}
function previousPage()
{
  pageNumberIndex--;
  if(pageNumberIndex<0)
     pageNumberIndex=3;
  carouselContent=data.Carousel[pageNumberIndex];
  fillCarousel();
}