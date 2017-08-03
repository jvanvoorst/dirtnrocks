import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getBlogPosts } from '../../api/api.js';
import renderHTML from 'react-render-html';

class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogPosts: null
        };
    }

    componentDidMount() {
        getBlogPosts().then((res) => {
            if (res) {
                this.setState({blogPosts: res.items});
            }
        });
    }

    render() {
        const { blogPosts } = this.state;

        if (!blogPosts) {return null;}

        return (
            <div>
                <Posts blogPosts={this.state.blogPosts}/>
            </div>
        );
    }
}

const Posts = ({blogPosts}) =>
    <div>
        {blogPosts.map((post) =>
            renderHTML(post.content)
        )}
    </div>;

Posts.propTypes = {
    blogPosts: PropTypes.array.isRequired
};

export default Blog;
