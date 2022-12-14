fetch( "http://localhost:3000/films")
.then(function(response){
return response.json();})
.then(function(data){
//console.log(data);

//THe Giant Gila Monster
let th = document.querySelector('.container')
//console.log(th);
 let runTime = document.createElement('p');
 //console.log(data[0].runtime);
 runTime.id="rantime"
 runTime.innerText = `RunTime: ${data[0].runtime}`
 th.appendChild(runTime);
 

let movie = document.querySelector('.container1')
//console.log(movie);
let movieTitle = document.createElement('p');
//console.log(data[0].title);
movieTitle.id="showtitle"
movieTitle.innerText = `MovieTitle: ${data[0].title}`
movie.appendChild(movieTitle);

let capacity = document.querySelector('.container2')
//console.log(capacity);
let capacityNum = document.createElement('p');
//console.log(data[0].capacity);
capacityNum.id="cepecity"
capacityNum.innerText = `MovieCapacity: ${data[0].capacity}`
capacity.appendChild(capacityNum);

let showtime = document.querySelector('.container3')
//console.log(showtime);
let showtimeNum = document.createElement('p');
//console.log(data[0].showtime);
showtimeNum.id="shoetime"
showtimeNum.innerText = `Showtime: ${data[0].showtime}`
showtime.appendChild(showtimeNum);

let tickets_sold = document.querySelector('.container4')
//console.log(tickets_sold);
let ticketsoldNum = document.createElement('p');
//console.log(data[0].tickets_sold);
ticketsoldNum.id="tecet"
ticketsoldNum.innerText = `Tickets Sold :${data[0].tickets_sold}`
tickets_sold.appendChild(ticketsoldNum);

let description = document.querySelector('.container5')
//console.log(description);
let descriptionDet = document.createElement('p');
//console.log(data[0].description);
descriptionDet.id="desc"
descriptionDet.innerText = `Description :${data[0].description}`
description.appendChild(descriptionDet);


let poster = document.querySelector('.container6')
//console.log(poster);
let posterDis = document.createElement('img');
posterDis.src = `${data[0].poster}`
posterDis.id='poster'
poster.appendChild(posterDis);

let first = document.querySelector('#gila')
first.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[0].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[0].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[0].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[0].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[0].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[0].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[0].runtime}`



})

let second = document.querySelector('#fate')
second.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[1].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[1].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[1].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[1].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[1].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[1].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[1].runtime}`

})

let third = document.querySelector('#chasers')
third.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[2].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[2].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[2].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[2].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[2].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[2].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[2].runtime}`

})

let four = document.querySelector('#touch')
four.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[3].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[3].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[3].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[3].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[3].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[3].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[3].runtime}`

})
let five = document.querySelector('#martians')
five.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[4].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[4].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[4].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[4].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[4].capacity}`
    fournnerHTML = `Run Time: ${data[4].runtime}`

})
let six = document.querySelector('#beast')
six.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[5].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[5].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[5].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newSh4owtime.innerHTML =`Showtime: ${data[5].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[5].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[5].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[5].runtime}`

})
let seven = document.querySelector('#sky')
seven.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[6].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[6].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[6].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[6].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[6].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[6].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[6].runtime}`

})
let eight = document.querySelector('#kilshrew')
eight.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[7].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[7].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[7].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[7].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[7].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[7].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[7].runtime}`

})
let nine = document.querySelector('#monbas')
nine.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[8].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[8].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[8].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[8].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[8].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[8].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[8].runtime}`

})
let ten = document.querySelector('#giant')
ten.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[9].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[9].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[9].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[9].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[9].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[9].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[9].runtime}`

})
let eleven = document.querySelector('#caper')
eleven.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[10].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[10].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[10].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[10].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[10].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[10].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[10].runtime}`

})
let twelve = document.querySelector('#super')
twelve.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[11].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[11].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[11].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[11].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[11].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[11].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[11].runtime}`

})
let thirteen = document.querySelector('#rebel')
thirteen.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[12].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[12].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[12].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[12].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[12].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[12].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[12].runtime}`

})
let fourteen = document.querySelector('#diabolik')
fourteen.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[13].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[13].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[13].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[13].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[13].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[13].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[13].runtime}`

})
let fifteen = document.querySelector('#village')
fifteen.addEventListener('click', function(){
    let newPoster = document.querySelector('#poster')
    newPoster.src = `${data[14].poster}`

    let newDescription = document.querySelector('#desc')
    newDescription.innerHTML = `Description: ${data[14].description}`

    let newTickets = document.querySelector('#tecet')
    newTickets.innerHTML =`Tickets Sold: ${data[14].tickets_sold}`
    
    let newShowtime = document.querySelector('#shoetime')
    newShowtime.innerHTML =`Showtime: ${data[14].showtime}`

    let newCapacity = document.querySelector('#cepecity')
    newCapacity.innerHTML = `Movie Capacity: ${data[14].capacity}`
    
    let newTitle= document.querySelector('#showtitle')
    newTitle.innerHTML = `Movie Title: ${data[14].title}`
    
    let newrunTime= document.querySelector('#rantime')
    newrunTime.innerHTML = `Run Time: ${data[14].runtime}`

})

})
