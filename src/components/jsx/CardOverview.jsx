import React from 'react';
import "../css/DayCard.css";

export default class CardOverview extends React.Component {
    render() {
        return (
            <div >
                <h1 className="CardOverview">{this.props.day}</h1>
            </div>
        );
    }
}