import { shallow } from '../../enzyme.js'
import React from 'react';
import CardOverview from '../jsx/CardOverview';
import renderer from 'react-test-renderer';

describe('Card Overview Tests' , () => {

    it('should have CSS',  () => {
        const wrapper = shallow(<CardOverview/>);
        expect(wrapper.find('h1').hasClass('CardOverview')).toBe(true);
        expect(wrapper.find('div').hasClass('Card')).toBe(true);
    });

});