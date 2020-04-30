function parkNames(parkInput) {
    
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${parkInput}=Yes`,)

    .then((response) => response.json())
    .then((parksInfo) => {
    
        console.log(parksInfo);
    });
}
parkNames("playgrounds")