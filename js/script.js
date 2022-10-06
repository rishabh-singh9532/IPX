
  let detail ={
    "name":"Rahul singh"
    
  }
  let detail1={
    "project":"glitch"
  }


var output= document.getElementById('output2');
output.innerHTML= detail.name;


var output1= document.getElementById('output1');
output1.innerHTML= detail1.project;














// fetch('./data.json')
// .then(function (response){
//   return response.json();
// })
// .then(function (data){

//   for(var i=0; i<data.length; i++){
//     document.getElementById("output2").innerHTML +=
//     data[i].id + "=>" + data[i].firstname + " " + data[i].lastname
//   }
// })
// .catch(function (err){
//   console.log(err)
// })






















    var swiper = new Swiper(".review-slider", {
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop:true,
        // effect: "flip",
        grabCursor: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
           
          },
          768: {
            slidesPerView: 2,
          
          },
          1024: {
            slidesPerView: 3,
           
          },
        },
       
       
      });





const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
  


const accordionn = document.getElementsByClassName('containerr');

for (i=0; i<accordionn.length; i++) {
  accordionn[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
  



profile = document.querySelector(' .header .flex  .profile');

document.querySelector('#user-btn').onclick = () => {

    profile.classList.toggle('active');
    navbar.classList.remove('active');
 
}

window.onscroll =()=>{
    navbar.classList.remove('active');
    profile.classList.remove('active');
}