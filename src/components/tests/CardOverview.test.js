import { shallow } from '../../enzyme.js'
import React from 'react';
import CardOverview from '../jsx/CardOverview';
import {getGraphic} from "../jsx/CardOverview";

import renderer from 'react-test-renderer';

describe('Card Overview Tests' , () => {

    describe('Card Overview Tests' , () => {
        it('should return FULL CLOUD', function () {
            const weather = 'FULL CLOUD';
            const ret = 'cloud.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return PART CLOUD', function () {
            const weather = 'PART CLOUD';
            const ret = 'cloud_and_sun.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return RAIN', function () {
            const weather = 'RAIN';
            const ret = 'rain.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return SNOW', function () {
            const weather = 'SNOW';
            const ret = 'snow.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return SUN', function () {
            const weather = 'SUN';
            const ret = 'sun.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return THUNDER', function () {
            const weather = 'THUNDER';
            const ret = 'thunder.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
        it('should return default', function () {
            const weather = 'ELSE';
            const ret = 'sun.png';
            expect(getGraphic(weather)).toMatch(ret);
        });
    });

    it('should have CSS',  () => {
        const wrapper = shallow(<CardOverview/>);
        expect(wrapper.find('h1').hasClass('CardOverview')).toBe(true);
        expect(wrapper.find('div').hasClass('Card')).toBe(true);
    });

});