import React from 'react';
import {shallow} from 'enzyme';

import FriendListItem from './FriendListItem';
import * as sinon from 'sinon';

const friend =
    {
        name: 'Theodore Roosevelt',
        gender: 'Male',
        starred: true,
        id: 0
    };

const spy = sinon.spy();
const friendListActions = {
    starFriend: spy
};

describe('FriendListItem ', () => {
    it('renders data', () => {
        const wrapper = shallow(<FriendListItem id={friend.id}
                                                name={friend.name}
                                                gender={friend.gender}
                                                starFriend={friendListActions.starFriend}/>);

        expect(wrapper.find('span')).toHaveLength(2);

    });

    it('renders star and delete button', () => {
        const wrapper = shallow(<FriendListItem id={friend.id}
                                                name={friend.name}
                                                gender={friend.gender}
                                                starFriend={friendListActions.starFriend}/>);

        expect(wrapper.find('button')).toHaveLength(2);
    })
});