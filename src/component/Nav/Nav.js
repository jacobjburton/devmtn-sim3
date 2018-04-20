import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

function Nav()
{
    return (
        <div>
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
            <Link to='/'>Logout</Link>
        </div>
    )
}

function mapStateToProps(state)
{
    return (
    {
        username: state.username,
       img: state.img
    });
}

export default connect(mapStateToProps)(Nav);