import * as types from '../constants/ActionTypes';
import {combineReducers} from 'redux';

const initialState = {
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
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_FRIEND:
            return {
                ...state,
                friendsById: [
                    ...state.friendsById,
                    {
                        name: action.name,
                        gender: action.gender,
                        starred: false
                    }
                ],
            };
        case types.DELETE_FRIEND:
            return {
                ...state,
                friendsById: state.friendsById.filter((item, index) => index !== action.id)
            };
        case types.STAR_FRIEND:
            let friends = [...state.friendsById];
            let friend = friends.find((item, index) => index === action.id);
            friend.starred = !friend.starred;
            return {
                ...state,
                friendsById: friends
            };

        default:
            return state;
    }
};

const initialPagingOption = {
    num: 2
};

export const changePagingReducer = (state = initialPagingOption, action) => {
    switch (action.type) {
        case types.CHANGE_ITEMS_PER_PAGE: {
            return {
                ...state,
                num: action.num
            };
        }
        default:
            return state;
    }
};

export default combineReducers({
    friendsReducer,
    changePagingReducer
});