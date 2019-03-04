import React from 'react';
import {shallow} from 'enzyme';
import * as sinon from 'sinon';

const spy = sinon.spy();

const addFriendProp = spy;

import AddFriendInput from './AddFriendInput';

describe('AddFriendInput ', () => {
    it('renders', () => {
        const wrapper = shallow(<AddFriendInput addFriend={addFriendProp}/>);

        expect(wrapper.find('.form-control')).toHaveLength(2);
        expect(wrapper.find('input')).toHaveLength(1);
        expect(wrapper.find('select')).toHaveLength(1);
        expect(wrapper.find('option')).toHaveLength(3);
        expect(wrapper.find('button')).toHaveLength(1);
    });
});