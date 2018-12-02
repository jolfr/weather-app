import React from 'react';
import "../css/DayCard.css";

class CardOverview extends React.Component {
    render() {
        return (
            <div className='Card'>
                <h1 className="CardOverview">{this.props.day}</h1>
            </div>
        );
    }
}

export default CardOverview;