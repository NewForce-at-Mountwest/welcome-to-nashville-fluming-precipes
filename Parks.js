function parkNames(parkInput) {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`, 
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



// parkNames("community_center")
// parkNames("dog_park")
// parkNames("hiking_trails")
// parkNames("restrooms_available")

//// Some starter code
// const container = document.querySelector("#addressList")

// document.querySelector("#saveEntry").addEventListener("click", event => {
//     /*
//         Collect the user put by selecting the input fields, one
//         at a time, and accessing the `value` property
//     */
//     const personName = document.querySelector("#fullName").value
//     const personAddress = document.querySelector("#address").value

//     // Once you have collected all the values, update the DOM
//     // with some HTML
//     container.innerHTML += `
//         <section>
//             <h1>${personName}</h1>
//             <div>${personAddress}</div>
//         </section>
//     `

// })

const searchContainer = document.querySelector(".parksResults")

document.querySelector("#buttonClick").addEventListener("click", event => {
    const Parks = document.querySelector("#parkName").value
    console.log("You clicked on the park button")
    parkNames(Parks)
    console.log(Parks)
    

   
})


