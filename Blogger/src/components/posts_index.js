import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }

    renderPosts() {
        return _.map(this.props.posts, (post) => {
            return (
                <li key={post.id}>{post.title}</li>
            );
        });
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts: fetchPosts})(PostsIndex);