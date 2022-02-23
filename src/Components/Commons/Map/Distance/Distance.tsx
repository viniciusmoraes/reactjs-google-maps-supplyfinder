import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Badge} from 'react-bootstrap'

import { Loader } from '@googlemaps/js-api-loader';

interface IDistanceProps {
    destination: any;
    origin: any;
}

const loader = new Loader({
    apiKey: "AIzaSyAdyTk7naYMEsrxFVaCMFAep0p2JIU3U_s",
    version: "weekly",
    libraries: ["geometry"]
});

const Distance: React.FC<IDistanceProps> = (props) => {
    const [distance, setDistance] = useState(0.0);
    useEffect(() => {
        // Promise
        loader
            .load()
            .then((google) => {
                let _destination = new google.maps.LatLng(props.destination.lat, props.destination.long);
                let _origin = new google.maps.LatLng(props.origin.lat,props.origin.lng);

                const distanceGmaps = google.maps.geometry.spherical.computeDistanceBetween(_origin, _destination);
                const distanceKm = distanceGmaps / 1000;
                
                setDistance(Number(distanceKm.toFixed(1)))
            })
            .catch(e => {
                // do something
                setDistance(0)
            });
    }, [])

    return (
        <Badge bg="secondary">{`${distance} km`}</Badge>
    )

}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {})(Distance);