import React from 'react'

function Comment(props) {
    return (
        <Comment>
            <Comment.Avatar as='a' src={props.image} />
            <Comment.Content>
                <Comment.Author as='a' >{props.name}</Comment.Author>
                <Comment.Text>{props.message}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

export default Comment