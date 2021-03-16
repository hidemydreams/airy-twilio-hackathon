import React from "react";
import { geolocated } from "react-geolocated";
import Loader from "../common/Loader/Loader";
import "./GeoLocation.scss";

class GeoLocation extends React.Component {

  state = {
    countryCity: ``,
    isPressed: false
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.coords !== this.props.coords) {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.coords.latitude},${this.props.coords.longitude}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      const data = await response.json()
      this.setState({ countryCity: data })
    }

  }
  render() {
    const { setUserLocation } = this.props
    return (
      <div className="location-label">
        {this.props.coords ? (
          <div className={this.state.isPressed ? "hide-btn" : null}>
            <button onClick={() => {
              setUserLocation(this.state.countryCity);
              this.setState({ isPressed: true })
            }}>Get My Location</button>
          </div>
        ) : (
          <div><Loader /></div>
        )}
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation);