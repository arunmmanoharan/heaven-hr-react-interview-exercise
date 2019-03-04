import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListApp.css';
import {connect} from 'react-redux';

import {addFriend, deleteFriend, starFriend} from '../actions/FriendsActions';
import {FriendList, AddFriendInput, PaginationContainer, ItemsPerPage} from '../components';

class FriendListApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: []
        };
    }

    onChangePage = (pageOfItems) => {
        this.setState({pageOfItems: pageOfItems});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.pagingOption !== this.props.pagingOption) {
            this.renderPagination(this.props.pagingOption);
        }
    }

    renderPagination = (pagingOption) => {
        return (
            <PaginationContainer items={this.props.friendsById} onChangePage={this.onChangePage}
                                 numPerPage={pagingOption ? pagingOption : this.props.pagingOption}/>
        );
    };

    render() {
        const {friendsById} = this.props;

        const actions = {
            addFriend: this.props.addFriend,
            deleteFriend: this.props.deleteFriend,
            starFriend: this.props.starFriend
        };

        return (
            <div className={styles.friendListApp}>
                <h1>The FriendList</h1>
                <AddFriendInput addFriend={actions.addFriend}/>
                <FriendList friends={friendsById.length > 2 ? this.state.pageOfItems : friendsById} actions={actions}/>
                <div className={'paginationContainer'}>
                    <ItemsPerPage/>
                    {friendsById.length > 2 &&
                    this.renderPagination()}
                </div>
            </div>
        );
    }
}

FriendListApp.propTypes = {
    pagingOption: PropTypes.number.isRequired,
    friendsById: PropTypes.arrayOf(PropTypes.shapeOf({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired,
        starred: PropTypes.bool.isRequired,
        id: PropTypes.number
    })),
    addFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired,
    starFriend: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        pagingOption: parseInt(state.friendlist.changePagingReducer.num, 10),
        friendsById: state.friendlist.friendsReducer.friendsById
    };
};

export default connect(mapStateToProps, {
    addFriend,
    deleteFriend,
    starFriend
})(FriendListApp);
