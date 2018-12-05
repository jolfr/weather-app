import React from 'react';
import PropTypes from 'prop-types';
import CardOverview from './CardOverview';
import CardDetail from './CardDetail'
import "../css/DayCard.css";

class DayCard extends React.Component {
    render() {
        return (
            <div className='Card'>
                <CardOverview>

                </CardOverview>

                <CardDetail>

                </CardDetail>
            </div>
        );
    }
}

export default DayCard;

DayCard.propTypes = {
    day : PropTypes.oneOf(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']).isRequired,
    weather : PropTypes.oneOf(['FULL CLOUD', 'PART CLOUD', 'RAIN', 'SNOW','SUN','THUNDER']).isRequired,
    currentTemp : PropTypes.number.isRequired,
    highTemp : PropTypes.number.isRequired,
    lowTemp : PropTypes.number.isRequired,
    humidity : PropTypes.number.isRequired,
    pressure : PropTypes.number.isRequired,
};