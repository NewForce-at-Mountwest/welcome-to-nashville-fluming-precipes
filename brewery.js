function breweryNames (searchvalue){
    
    fetch(`https://api.openbrewerydb.org/breweries?by_city=nashville&by_name=${searchvalue}`)
    .then(response => response.json())
    .then(breweryInfo => {
    
        console.log(breweryInfo)
        //clears out container
        document.querySelector(".breweriesResults").innerHTML = ""
        // loops and prints to the dom
        for (let i = 0;  i < breweryInfo.length; i++) {
            console.log(breweryInfo[i].name)
            document.querySelector(".breweriesResults").innerHTML += `<div>${breweryInfo[i].name}</div>`
        }

        
    })

}
// write a code that pulls the search input and saves the value
const breweryContainer = document.querySelector(".breweriesResults")
document.querySelector("#brewerySearch").addEventListener("click", function (){
    const brewName = document.querySelector("#BreweryName").value
    breweryNames(brewName) 
    console.log(brewName)
    
})



