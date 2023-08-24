function dropDown() 
{
  document.getElementById("dropDown").classList.toggle("show");
  console.log("show");
}
function closeWarning()
{
  document.getElementById("warning").remove();
  document.getElementById("info").style.marginTop ="30px";
}