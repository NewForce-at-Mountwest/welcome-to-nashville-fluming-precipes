function concertNames(searchValue) {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=nashville&apikey=FLRa8QGX04BWNzX3KdJoJ6YRcKIaQSxU")
        .then(r => r.json())
        .then(parsedConcerts => {
            console.log(parsedConcerts)
            document.querySelector(".concertsResults").innerHTML = ""
            // loops and prints to the dom
            for (let i = 0; i < parsedConcerts._embedded.events.length; i++) {
                console.log(parsedConcerts._embedded.events[i].name)
                if (parsedConcerts._embedded.events[i].name && parsedConcerts._embedded.events[i].name.includes(searchValue) ) {
                    document.querySelector(".concertsResults").innerHTML += `<div>${parsedConcerts._embedded.events[i].name}</div>`
                    console.log("Concert found!")
                } else { 
                    console.log("No concerts available.")
                }
            }
        })
}
const concertsContainer = document.querySelector(".concertsResults")
document.querySelector("#concertSearch").addEventListener("click", function () {
    const concertName = document.querySelector("#concertName").value
    concertNames(concertName)
    console.log(concertName)
})