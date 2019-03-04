import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {pagingOptions} from '../constants/constants';
import {changeItemsPerPage} from '../actions/FriendsActions';
import './ItemPerPage.css';

class ItemsPerPage extends Component {

    changeItemsPerPage = (e) => {
        this.props.changeItemsPerPage(e.target.value);
    };

    render() {
        return (
            <select onChange={this.changeItemsPerPage} className={'pagingOptionContainer'}>
                {pagingOptions.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        );
    }
}

const mapDispatchToProps = {
    changeItemsPerPage
};

ItemsPerPage.propTypes = {
    changeItemsPerPage: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(ItemsPerPage);