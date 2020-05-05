function parkNames(parkInput) {
    fetch(`
    https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, 
  )
    .then((response) => response.json())
    .then((parksInfo) => {
      console.log(parksInfo);
    for(let i = 0; i < parksInfo.length;i++){
        console.log(parksInfo[i].park_name)
        
        const resultsContainer = document.querySelector("#buttonClick")
        // document.querySelector(".parksResults").innerHTML =``
        document.querySelector(".resultsContainer").innerHTML += `
        <div>
            <h4>${parksInfo[i].park_name}</h4>
            <p>Community Center:${parksInfo[i].community_center}</p>
            <p>Hiking Trails:${parksInfo[i].hiking_trails}</p>
            <p>Restrooms available:${parksInfo[i].restrooms_available}</p>
            <p>Dog Park:${parksInfo[i].dog_park}</p>
        </div>`
    }
    })}



parkNames("community_center")
parkNames("dog_park")
parkNames("hiking_trails")
parkNames("restrooms_available")

{/* <section class="searchContainer">Search for stuff to do today</section><br>
    <input placeholder="Search Parks" type="text" class="Parks" id = "parkName">
    <button id = "buttonClick">search</button> */}

const searchContainer = document.querySelector("#buttonClick")

document.querySelector("#buttonClick").addEventListener("click", event => {
    const Parks = document.querySelector("#buttonClick").value
    console.log("You clicked on the park button")

    
    

   
})


