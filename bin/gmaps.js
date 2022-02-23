const { Loader } = require('@googlemaps/js-api-loader')


const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["geometry"]
});

// // Promise
// loader
//     .load()
//     .then((google) => {
//         const mapsDistance = new google.maps.geometry.spherical.computeDistanceBetween(
//             {lat: -23.6126208, lng: -46.6812928}, {lat: -20.6126208, lng: -40.6812928}
//         );
//         console.log('google')
        
//         // new google.maps.Map(document.getElementById("map"), mapOptions);
//     })
//     .catch(e => {
//         // do something
//     });

(async function(){
    // const google = loader.load();
    // const mapsDistance = new google.maps.geometry.spherical.computeDistanceBetween({lat: -23.6126208, lng: -46.6812928}, {lat: -20.6126208, lng: -40.6812928});
    // console.log(mapsDistance)

    // Callback
    loader.loadCallback(e => {
        if (e) {
        console.log(e);
        } else {
            console.log('123')
        }
    });
    
})()
