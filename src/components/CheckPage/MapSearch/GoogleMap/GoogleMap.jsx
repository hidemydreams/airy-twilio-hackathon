import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMap.scss";

class SimpleMap extends Component {

    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 9
    };

    componentDidUpdate(prevProps) {
        if (prevProps.latitude !== this.props.latitude) {
            this.setState({ center: { lat: this.props.latitude, lng: this.props.longitude } })
        }
    }

    render() {
        return (
            // Important! Always set the container height explicitly
            <div className="googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;


