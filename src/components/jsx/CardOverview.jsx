import React from 'react';
import "../scss/DayCard.scss";

export default class CardOverview extends React.Component {
    render() {
        return (
            <div >
                <h1 id="CardOverview">{this.props.day}</h1>
            </div>
        );
    }
}