import React from 'react';
import { storiesOf } from '@storybook/react';
import CardOverview from '../jsx/CardOverview';

storiesOf('Weather App/Card Overview/Weather', module)
    .add('FULL CLOUD', () => (
        <CardOverview
            day = 'SUNDAY'
            weather = 'FULL CLOUD'
            currentTemp = '50'
            highTemp = '55'
            lowTemp = '45'
            humidity = '75'
            pressure = '30.5'
        />
    ))
    .add('PART CLOUD', () => (
        <CardOverview
            day = 'SUNDAY'
            weather = 'PART CLOUD'
            currentTemp = '50'
            highTemp = '55'
            lowTemp = '45'
            humidity = '75'
            pressure = '30.5'
        />
    )).add('RAIN', () => (
    <CardOverview
        day = 'SUNDAY'
        weather = 'RAIN'
        currentTemp = '50'
        highTemp = '55'
        lowTemp = '45'
        humidity = '75'
        pressure = '30.5'
    />
    )).add('SNOW', () => (
    <CardOverview
        day = 'SUNDAY'
        weather = 'SNOW'
        currentTemp = '50'
        highTemp = '55'
        lowTemp = '45'
        humidity = '75'
        pressure = '30.5'
    />
    )).add('SUN', () => (
    <CardOverview
        day = 'SUNDAY'
        weather = 'SUN'
        currentTemp = '50'
        highTemp = '55'
        lowTemp = '45'
        humidity = '75'
        pressure = '30.5'
    />
    )).add('THUNDER', () => (
    <CardOverview
        day = 'SUNDAY'
        weather = 'THUNDER'
        currentTemp = '50'
        highTemp = '55'
        lowTemp = '45'
        humidity = '75'
        pressure = '30.5'
    />
    ));

storiesOf('Weather App/Card Overview/Days', module);