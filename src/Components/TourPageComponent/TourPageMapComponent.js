import React from 'react';
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';

const TourPageMap = ({locations}) => {
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoia3NoaXRpajI4IiwiYSI6ImNrOHVhdDhwdTA0c28zZ3BscmlsbjN2ODcifQ.txZpgBN4OCYIqq1UFl_Kwg',
    scrollZoom: false,
  });
  const calcCenterCoordinates = () => {
    const middleIndex = parseInt(locations.length / 2);
    const centerCoordinates = [];
    console.log(middleIndex);
    centerCoordinates.push(locations[middleIndex].coordinates[0]);
    centerCoordinates.push(locations[middleIndex].coordinates[1]);
    return centerCoordinates;
  };
  const centerCoordinates = calcCenterCoordinates();

  return (
    <Map
      style={'mapbox://styles/kshitij28/ck8ub5uht16ya1iqojchemdli'}
      className='tour-page--map'
      zoom={[7]}
      center={[centerCoordinates[0], centerCoordinates[1]]}>
      {locations.map((location) => (
        <Marker
          key={location._id}
          coordinates={[location.coordinates[0], location.coordinates[1]]}
          anchor='bottom'>
          <div className='marker'>
            <h2 className='marker--text'>
              <input type='checkbox' className='marker--text__checkbox' />
              <span className='marker--text__close-button'>X</span>
              <p className='marker--text__description u-margin-bottom-extra-small'>
                Day {location.day}: {location.description}
              </p>
            </h2>
          </div>
        </Marker>
      ))}
    </Map>
  );
};

export default TourPageMap;
