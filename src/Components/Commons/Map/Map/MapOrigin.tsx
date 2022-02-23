import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { Loader } from '@googlemaps/js-api-loader';

interface IMapProps {
    destination: any;
}

const loader = new Loader({
    apiKey: "",
    version: "weekly",
    libraries: ["geometry"]
});


const MapOrigin: React.FC<IMapProps> = (props) => {
    const divMapStyle = {
        height: '320px',
        width: '100%'
    }

    const mapOptions = {
        center: {
            lat: props.destination.lat,
            lng: props.destination.long
        },
        zoom: 16
    };

    useEffect(() => {
    
        // Promise
        loader
            .load()
            .then((google) => {
                //let _destination = new google.maps.LatLng(props.destination.lat, props.destination.long);
                //let _origin = new google.maps.LatLng(props.origin.lat, props.origin.lng);
                const map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions);
                const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  
                const marker = new google.maps.Marker({
                    position: {
                        lat: props.destination.lat,
                        lng: props.destination.long
                    },
                    icon: image
                })

                marker.setMap(map)

            })
            .catch(e => {
            });
    }, [])

    return (
        <div style={divMapStyle} id="map"></div>
    )

}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {})(MapOrigin);