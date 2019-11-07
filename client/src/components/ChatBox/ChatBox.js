import React from 'react'
import { Comment, Header, Form, Button } from 'semantic-ui-react'
// import Comment from './Comment'



class ChatBox extends React.Component {
    render() {
        return (
            <>
                <Comment.Group>

                    <Header as='h3' dividing>
                        Comments
                    </Header>
                    <Form reply>
                        <Form.TextArea />
                        <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                    </Form>
                </Comment.Group>

            </>
        )

    }


}

export default ChatBox;