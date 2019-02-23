// location

const cities = [
    {
        backgroundUrl:  "url('img/city1.jpg')",
        text: "Lagos"
    },
    {
       backgroundUrl:  "url('img/city2.jpg')",
       text: "Ogun"
   },
   {
       backgroundUrl: "url('img/city3.jpg')",
       text: "Rivers"
   },
   {
       backgroundUrl:  "url('img/apart1.jpg')",
       text: "Abuja"
   },
   {
       backgroundUrl:  "url('img/apart9.jpg')",
       text: "Enugu"
   }
];

let cityTemp = document.getElementById("city-template");
let cityWrap = document.querySelector(".city-wrap");

console.log(cityTemp);
console.log(cityWrap);



//loop through the cities
for(let i=0; i< cities.length; i++) {
   let info = document.importNode(cityTemp.content, true);
   console.log(info);
   info.querySelector(".city").style.backgroundImage = cities[i].backgroundUrl;
   console.log(info);
   info.querySelector(".city").textContent =  cities[i].text;

  
   cityWrap.appendChild(info);

   console.log(cityWrap);
}
 
 
 //  lagos apartments
const lagosApartments = [
    {
        imgUrl: 'img/apart1.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart2.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart3.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart4.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
     {
        imgUrl: 'img/apart5.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart6.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart7.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    },
    {
        imgUrl: 'img/apart8.jpg',
        cost: "$3,500",
        location: "Lekki, Lagos",
        beds: 5,
        baths: 5,
        toilets: 5,
    }
];



let temp = document.getElementById("apartment-template");
let apartments = document.querySelector(".apartments");
 console.log(temp);


//loop through each aprtment and add to apartments
for(let i=0; i< lagosApartments.length; i++) {
    let apartment = document.importNode(temp.content, true);
    apartment.querySelector(".image").src = lagosApartments[i].imgUrl;
    apartment.querySelector(".cost").textContent =  lagosApartments[i].cost;
    apartment.querySelector(".location").textContent =  lagosApartments[i].location;
    apartment.querySelector(".beds").textContent =  lagosApartments[i].beds + " Beds";
    apartment.querySelector(".baths").textContent =  lagosApartments[i].baths + " Baths";
    apartment.querySelector(".toilets").textContent = lagosApartments[i].toilets + " Toilets";
    apartments.appendChild(apartment);

    console.log(apartments);
}



// toggle nav menu

document.querySelector(".menu-toggle").addEventListener("click" , (e) => {
     document.querySelector(".menu").style.width = "50%";
     document.querySelector(".closebtn").style.display = "block";
})

document.querySelector(".closebtn").addEventListener("click" , (e) => {
    document.querySelector(".menu").style.width = "0px";
    document.querySelector(".closebtn").style.display = "none";
})



// Latets News

const newsApartments = [
    {
        imgUrl: 'img/apart9.jpg',
        header: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci amet minima pariatur excepturi",
    },
    {
        imgUrl: 'img/apart10.jpg',
        header: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci amet minima pariatur excepturi",
    },
    {
        imgUrl: 'img/apart11.jpg',
        header: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci amet minima pariatur excepturi",
    },
    {
        imgUrl: 'img/apart11.jpg',
        header: "Lorem ipsum dolor sit amet",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, adipisci amet minima pariatur excepturi",
    }
];

let newsTemp = document.getElementById("news-template");
let news = document.querySelector(".news");



//loop through each aprtment and add to apartments
for(let i=0; i< newsApartments.length; i++) {
    let info = document.importNode(newsTemp.content, true);
    info.querySelector(".img").src = newsApartments[i].imgUrl;
    info.querySelector(".news-header").textContent =  newsApartments[i].header;
    info.querySelector(".news-content").textContent =  newsApartments[i].description;
   
    news.appendChild(info);

    console.log(news);
}


//Comments
const comments =[
    {
        author: "Jide Ola",
        comment: "This site has been very helpful",
        authorImageUrl:'img/apart9.jpg'
    },
     {
        author: "Tobi Eze",
        comment: "Great work guys!!",
        authorImageUrl:'img/apart11.jpg'
    },
    {
        author: "Bisi Ezenwa",
        comment: "This site has been very helpful",
        authorImageUrl:'img/apart10.jpg'
    },
    {
        author: "Ada Ibrahim",
        comment: "This site has been very helpful",
        authorImageUrl:'img/apart5.jpg'
    },
];

let commentsTemp = document.getElementById("comments-template");
let commentsWrap = document.querySelector(".comments");

console.log(commentsTemp);
console.log(commentsWrap);



//loop through the comments
for(let i=0; i< comments.length; i++) {
    let info = document.importNode(commentsTemp.content, true);
    info.querySelector(".author-image").src = comments[i].authorImageUrl;
    info.querySelector(".author").textContent =  comments[i].author;
    info.querySelector(".comment").textContent =  comments[i].comment;
   
    commentsWrap.appendChild(info);

    console.log(news);
}
// comment slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("comments-wrap");
  
  if (n > slides.length) {
      slideIndex = 1
    }    
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "inline-block";  
}


 
