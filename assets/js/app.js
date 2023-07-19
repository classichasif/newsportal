// search show

const searchBtn = document.getElementById("search_btn")
const searchForm = document.getElementById("search_form")

searchBtn.addEventListener("click", function(){
  searchForm.classList.toggle("showSearch")
})

window.addEventListener("click", function(e){
  let eventTarget = e.target
  if(!eventTarget.closest("#search_btn") && !eventTarget.closest("#search_form")){
    searchForm.classList.remove("showSearch")
  }
})



// //   socket year
// let socketYear = document.getElementById("socket_year")

// let PresentYear = (year) =>{
//   let date = new Date()
//   let PreYear = date.getFullYear()
//   year.innerText = PreYear
// }

// PresentYear(socketYear)

// // stciky year
// var header = document.getElementsByClassName("cls__main_header")[0];
// var sticky = header.offsetTop;


// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > sticky) {
//         header.classList.add("sticky");
//     } else {
//         header.classList.remove("sticky");
//     }
// });
