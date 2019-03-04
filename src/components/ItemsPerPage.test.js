import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const initialState = {
    friendlist: {
        changePagingReducer: {
            num: 2
        },
        friendsReducer: {
            friendsById: [
                {
                    name: 'Theodore Roosevelt',
                    gender: 'Male',
                    starred: true
                },
                {
                    name: 'Abraham Lincoln',
                    gender: 'Male',
                    starred: false
                },
                {
                    name: 'George Washington',
                    gender: 'Male',
                    starred: false
                }
            ]
        }
    }
};
const store = mockStore(initialState);

import ItemsPerPage from './ItemsPerPage';

describe('ItemsPerPage ', () => {
    it('renders', () => {

        const wrapper = mount(<Provider store={store}><ItemsPerPage/></Provider>);

        expect(wrapper.find(ItemsPerPage)).toHaveLength(1);
        expect(wrapper.find('select')).toHaveLength(1);
        expect(wrapper.find('option')).toHaveLength(3);

    });
});