import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getNearbySuppliers } from '../../../../Actions'
import { Loader } from '@googlemaps/js-api-loader';

interface IMapProps {
    nearbySuppliers: any;
    getNearbySuppliers: any;
    origin: any;
    destination: any;
}

const loader = new Loader({
    apiKey: "AIzaSyAdyTk7naYMEsrxFVaCMFAep0p2JIU3U_s",
    version: "weekly",
    libraries: ["geometry"]
});

const MapMarkers: React.FC<IMapProps> = (props) => {
    const { nearbySuppliers, origin, destination } = props;
    const divMapStyle = {
        height: '320px',
        width: '100%'
    }

    useEffect(() => {
        props.getNearbySuppliers()

        // Promise
        loader
            .load()
            .then((google) => {
                let _origin = new google.maps.LatLng(destination.lat, destination.long);
                const mapOptions = {
                    center: {
                        lat: props.destination.lat,
                        lng: props.destination.long
                    },
                    zoom: 14
                };
                
                const map = new google.maps.Map(document.getElementById("mapMarkers") as HTMLElement, mapOptions);

                //@ts-ignore
                const tourStops = nearbySuppliers;
                const infoWindow = new google.maps.InfoWindow();
                let imageDestination = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
                let imageTour = {
                    path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                    fillColor: "blue",
                    fillOpacity: 0.6,
                    strokeWeight: 0,
                    rotation: 0,
                    scale: 2,
                    anchor: new google.maps.Point(15, 30),
                  };

                let marker = new google.maps.Marker({
                    map,
                    position: {
                        lat: props.destination.lat,
                        lng: props.destination.long
                    },
                    icon: imageDestination
                })

                //@ts-ignore
                tourStops.forEach(([position, title], i: any) => {
                    
                    if (position.lat !== undefined) {
                        let tour = new google.maps.LatLng(position.lat, position.lng);

                        marker = new google.maps.Marker({
                            position: tour,
                            map,
                            icon: imageTour,
                            title: `${i + 1}. ${title}`,
                            label: `${i + 1}`,
                            optimized: false,
                        });

                        // Add a click listener for each marker, and set up the info window.
                        marker.addListener("click", () => {
                            infoWindow.close();
                            infoWindow.setContent(marker.getTitle());
                            infoWindow.open(marker.getMap(), marker);
                        });

                        //marker.setMap(map)

                        console.log(marker)

                    }
                });
            })
            .catch(e => {
                // do something

            });

    }, [])

    return (
        <div>
            <h3>Nearby Suppliers</h3>

            <div style={divMapStyle} id="mapMarkers"></div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    nearbySuppliers: state.suppliersState.nearbySuppliers,

})

export default connect(mapStateToProps, { getNearbySuppliers })(MapMarkers);