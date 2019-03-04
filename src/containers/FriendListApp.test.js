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

import FriendListApp from './FriendListApp';
import {FriendList, AddFriendInput, PaginationContainer, ItemsPerPage} from '../components';

describe('FriendListApp', () => {

    it('should render h1 tag', () => {

        const wrapper = mount(<Provider store={store}>
            <FriendListApp/></Provider>);

        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render AddFriendInput component', () => {
        const wrapper = mount(<Provider store={store}>
            <FriendListApp/></Provider>);

        expect(wrapper.find(AddFriendInput).exists()).toEqual(true);
    });

    it('should render FriendList component', () => {
        const wrapper = mount(<Provider store={store}>
            <FriendListApp/></Provider>);

        expect(wrapper.find(FriendList).exists()).toEqual(true);
    });

    it('should contain PaginationContainer component', () => {
        const wrapper = mount(<Provider store={store}>
            <FriendListApp/></Provider>);

        expect(wrapper.find(PaginationContainer).exists()).toEqual(true);
    });

    it('should render ItemsPerPage component', () => {
        const wrapper = mount(<Provider store={store}>
            <FriendListApp/></Provider>);

        expect(wrapper.find(ItemsPerPage).exists()).toEqual(true);
    });
});