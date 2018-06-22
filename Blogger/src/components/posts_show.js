import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        this.props.deletePost(this.props.match.params.id, () => {
            this.props.history.push('/');
        });
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        console.log(this.props.post);
        return (
            <div>
                <Link to="/">Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                >
                    Delete Post
                </button>
                <h3>{this.props.post.title}</h3>
                <div>Categories: {this.props.post.categories}</div>
                <div>{this.props.post.content}</div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        post: state.posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);