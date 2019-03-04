import {friendsReducer} from './friendlist';
import {changePagingReducer} from './friendlist';
import * as types from '../constants/ActionTypes';

describe('Friends Reducer', () => {
    it('should return initial state', () => {
        expect(friendsReducer(undefined, {})).toEqual({
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
        });
    });

    it('should handle adding a friend', () => {
        expect(friendsReducer({
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
                }]
        }, {
            type: types.ADD_FRIEND,
            name: 'Arun',
            gender: 'Male'
        })).toEqual({
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
                },
                {
                    name: 'Arun',
                    gender: 'Male',
                    starred: false
                }
            ]
        });
    });

    it('should handle removing a friend', () => {
        expect(friendsReducer({
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
                },
                {
                    name: 'Arun',
                    gender: 'Male',
                    starred: false
                }
            ]
        }, {
            type: types.DELETE_FRIEND,
            id: 3
        })).toEqual({
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
        });
    });

    it('should star a friend', () => {
        expect(friendsReducer({
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
                },
                {
                    name: 'Arun',
                    gender: 'Male',
                    starred: false
                }
            ]
        }, {
            type: types.STAR_FRIEND,
            id: 3
        })).toEqual({
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
                },
                {
                    name: 'Arun',
                    gender: 'Male',
                    starred: true
                }
            ]
        });
    });

});

describe('Change Paging Reducer', () => {

    it('should return initial state', () => {
        expect(changePagingReducer(undefined, {})).toEqual({
            num: 2
        });
    });

    it('handles changing page', () => {
        expect(changePagingReducer({
            num: 2
        }, {
            type: types.CHANGE_ITEMS_PER_PAGE,
            num: 5
        })).toEqual({
            num: 5
        });
    });
});