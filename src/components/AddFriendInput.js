import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {gender} from '../constants/constants';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: this.props.name || '',
            gender: ''
        };
    }

    handleChange = (e) => {
        this.setState({name: e.target.value});
    };

    handleSubmit = () => {
        const {name, gender} = this.state;
        this.props.addFriend(name, gender);
        this.setState({name: '', gender: ''});
    };

    changeGender = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    autoFocus="true"
                    className={classnames('form-control', styles.addFriendInput)}
                    placeholder="Type the name of a friend"
                    value={this.state.name}
                    onChange={this.handleChange}/>
                <div className={'form-group flexDisplay'}>
                    <select name={'gender'}
                            onChange={this.changeGender}
                            className={'form-control'}
                            value={this.state.gender}>
                        <option value="" disabled>Select a gender</option>
                        {gender.map((item, index) => (
                            <option key={index}
                                    value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <button type="button" className="btn btn-danger"
                            disabled={!this.state.name || !this.state.gender}
                            onClick={this.handleSubmit}>Add Friend
                    </button>
                </div>
            </form>
        );
    }
}

AddFriendInput.propTypes = {
    addFriend: PropTypes.func.isRequired,
    name: PropTypes.string
};

export default AddFriendInput;
