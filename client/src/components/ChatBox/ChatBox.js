// import React from 'react'
// import { Comment, Header, Form, Button } from 'semantic-ui-react'
// import Comment from './Comment'
// import openSocket from 'socket.io-client'



// class ChatBox extends React.Component {
//     state = {
//         message: '',
//         name: '',
//         image: '',
//         messages: []
//     }

//     // sendSocketIO = (data) => {
//     //     //send chat 
//     //     socket.emit("chat", data)
//     // }

//     // handleInput = (event) => {
//     //     this.setState ({ message: event.target.value})
//     // }

//     // handleChatSubmit = (event) => {
//     //     event.preventDefault();
//     //     this.sendSocketIO({message: this.state.message})
//     // }

//     // componentDidMount() {
//     //     socket.on("chat", (data) => {
//     //         this.setState({ receivedMessage: data})
//     //     })
//     // }

//     // componentDidUpdate() {

//     // }
    
//     render() {
//         return (
//             <>
//                 <Comment.Group>

//                     <Header as='h3' dividing>
//                         {this.state.messages.map(message) => (
//                             <Comment message = {message.message}
//                             />
//                         )}
//                     </Header>
//                     <Form onSubmit={this.handleChatSubmit}>
//                         <Form.TextArea />
//                         <Button content='Add Reply' labelPosition='left' icon='edit' primary />
//                     </Form>
//                 </Comment.Group>

//             </>
//         )

//     }


// }

// export default ChatBox;