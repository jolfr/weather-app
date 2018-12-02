import { shallow } from '../../enzyme.js'
import React from 'react';
import DayCard from '../jsx/DayCard';
import renderer from 'react-test-renderer';

describe('Day Card Tests' , () => {

    var wrapper;

    beforeAll(() => {
        wrapper = shallow(<DayCard/>);
        wrapper.setProps({
            day: 'MONDAY',
            weather: 'SUN',
            currentTemp: 0,
            highTemp: 0,
            lowTemp: 0,
            humidity: 0,
            pressure: 0
        });
    });

    it('should have CSS',  () => {
        expect(wrapper.find('div').hasClass('Card')).toBe(true);
    });

});