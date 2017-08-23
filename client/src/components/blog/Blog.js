import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './blog.css';
import { getBlogPosts } from '../../api/api.js';
import renderHTML from 'react-render-html';
import { Container } from 'semantic-ui-react';

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
    <Container className="posts">
        {blogPosts.map((post) => {
            return (
                <div key={post.id} style={style.post}>
                    <p style={style.postDate}>{formatDate(post.published)}</p>
                    <p style={style.postTitle}>{post.title}</p>
                    {renderHTML(post.content)}
                </div>
            );

        }
        )}
    </Container>;

Posts.propTypes = {
    blogPosts: PropTypes.array.isRequired
};

export default Blog;

const style = {
    post: {
        paddingLeft: '30px',
        paddingRight: '30px'
    },
    postTitle: {
        fontSize: '22px',
        fontWeight: '600',
        color: 'rgb(255, 100, 7)'
    },
    postDate: {
        paddingTop: '60px',
        fontWeight: '600'
    }
};

function formatDate(date) {
    const myDate = new Date(date);
    const monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
    ];

    const day = myDate.getDate();
    const monthIndex = myDate.getMonth();
    const year = myDate.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
}
