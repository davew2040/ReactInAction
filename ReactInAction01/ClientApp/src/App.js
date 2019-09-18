//import React, { Component } from 'react';

//const node = document.getElementById("root");

//class Post extends Component {
//    render() {
//        return React.createElement(
//            'div',
//            {
//                className: 'post'
//            },
//            React.createElement(
//                'h2',
//                {
//                    className: 'postAuthor',
//                    id: this.props.id
//                },
//                this.props.user,
//                React.createElement(
//                    'span',
//                    {
//                        className: 'postBody'
//                    },
//                    this.props.content
//                )
//            )
//        );
//    }
//}

//Post.propTypes = {
//    user: PropTypes.func.isRequired,
//    content: PropTypes.number.isRequired,
//    id: PropTypes.string.isRequired
//};

//class Comment extends Component {
//    render() {
//        return React.createElement(
//            'div',
//            {
//                className: 'comment'
//            },
//            React.createElement(
//                'h2',
//                {
//                    className: 'commentAuthor'
//                },
//                React.createElement(
//                    'span',
//                    {
//                        className: 'commentContent'
//                    },
//                    this.props.content
//                )
//            )
//        );
//    }
//}

//Comment.propTypes = {
//    id: PropTypes.number.isRequired,
//    content: PropTypes.string.isRequired,
//    user: PropTypes.string.isRequired
//};

//const App = React.createElement(
//    Post,
//    {
//        id: 1,
//        content: ' said: This is a post!',
//        user: 'mark'
//    },
//    React.createElement(
//        Comment,
//        {
//            is: 2,
//            user: 'bob',
//            content: ' comments: wow! how cool!'
//        })
//);

//render(App, node);
