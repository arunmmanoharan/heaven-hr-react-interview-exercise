import React from 'react';
import {shallow} from 'enzyme';
import * as sinon from "sinon";

import FriendList from './FriendList';
import FriendListItem from './FriendListItem';

const friends = [
    {
        name: 'Theodore Roosevelt',
        gender: 'Male',
        starred: true,
        id: 0
    },
    {
        name: 'Abraham Lincoln',
        gender: 'Male',
        starred: false,
        id: 1
    },
    {
        name: 'George Washington',
        gender: 'Male',
        starred: false,
        id: 2
    }
];

const spy = sinon.spy();
const friendListActions = {
    addFriend: spy,
    deleteFriend: spy,
    starFriend: spy
};

describe('FriendList component', () => {

    it('has prop friends', () => {
        const wrapper = shallow(<FriendList friends={friends} actions={friendListActions}/>);

        expect(wrapper.find(FriendListItem)).toHaveLength(3);
    });
});