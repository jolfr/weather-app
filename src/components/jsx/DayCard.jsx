import React from 'react';
import PropTypes from 'prop-types';
import CardOverview from 'CardOverview';
import CardDetail from 'CardDetail';

export default class DayCard extends React.Component {
    render() {
        return (
            <div>
                <CardOverview>

                </CardOverview>

                <CardDetail>

                </CardDetail>
            </div>
        );
    }
};

DayCard.propTypes = {
    day : PropTypes.oneOf(['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']).isRequired,
    weather : PropTypes.oneOf(['SUN', 'RAIN', 'WIND', 'SNOW']).isRequired,
    currentTemp : PropTypes.number.isRequired,
    highTemp : PropTypes.number.isRequired,
    lowTemp : PropTypes.number.isRequired,
    humidity : PropTypes.number.isRequired,
    pressure : PropTypes.number.isRequired,
};