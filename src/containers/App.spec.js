import React from 'react';
import {shallow} from 'enzyme';

import App from './App';
import FriendListApp from './FriendListApp';

describe('App', () => {
    it('should render correctly in "debug" mode', () => {
        const wrapper = shallow(<App debug/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render FriendListApp component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(FriendListApp)).toHaveLength(1)
    })
});
