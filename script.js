
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const topnavLinks = document.getElementsByClassName("topnav-links")[0]

toggleButton.addEventListener("click",()=>{
  topnavLinks.ClassList.toggle("active")
})
