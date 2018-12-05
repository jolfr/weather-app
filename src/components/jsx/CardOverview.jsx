import React from 'react';
import "../css/DayCard.css";
import Img from 'react-image';

const overviewColor = {
    backgroundColor: '#8c8c8c'
};

export const getGraphic = (weather) => {
    switch (weather) {
        case 'FULL CLOUD':
            return 'cloud.png';
        case 'PART CLOUD':
            return 'cloud_and_sun.png';
        case 'RAIN':
            return 'rain.png';
        case 'SNOW':
            return 'snow.png';
        case 'SUN':
            return 'sun.png';
        case 'THUNDER':
            return 'thunder.png';
        default:
            return 'sun.png';
    }
};

class CardOverview extends React.Component {
    render() {
        return (
            <div className='Card' style={overviewColor}>
                <div className='CardOverview'>
                    <h1>{this.props.day}</h1>
                    <div className='WeatherGraphicContainer'>
                        <Img src={'./weather/' + getGraphic(this.props.weather)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardOverview;