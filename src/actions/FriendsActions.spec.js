import * as actions from './FriendsActions';
import * as types from '../constants/ActionTypes';

describe('Actions', () => {
    it('should add a new friend with gender', () => {
        const name = 'Arun';
        const gender = 'Male';
        const expectedAction = {
            type: types.ADD_FRIEND,
            name,
            gender
        };
        expect(actions.addFriend(name, gender)).toEqual(expectedAction);
    });

    it('should delete friend with id', () => {
        const id = 3;
        const expectedAction = {
            type: types.DELETE_FRIEND,
            id
        };
        expect(actions.deleteFriend(id)).toEqual(expectedAction);
    });

    it('should star friend with id', () => {
        const id = 2;
        const expectedAction = {
            type: types.STAR_FRIEND,
            id
        };
        expect(actions.starFriend(id)).toEqual(expectedAction);
    });

    it('should change items per page', () => {
        const num = 5;
        const expectedAction = {
            type: types.CHANGE_ITEMS_PER_PAGE,
            num
        };
        expect(actions.changeItemsPerPage(num)).toEqual(expectedAction);
    });
});