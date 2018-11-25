import React from 'react';
import { storiesOf } from '@storybook/react';
import CardOverview from '../jsx/CardOverview';

storiesOf('Weather App/Card Overview/Days', module)
    .add('Monday', () => (
        <CardOverview day = 'MONDAY'/>
        ));