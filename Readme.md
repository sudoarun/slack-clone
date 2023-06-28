# Slack clone

# Learning competencies:

At the end of this milestone you will learn

- Building desktop application using Electron
- Understanding websockets to build a chat application
- Integrating an electron app with the Backend.

Lets build a replica of messenger app **Slack** on MERN stack

## Releases

### Backend

1. For storing user login information, we will use postgreSQL. Set up your postgres database with  tables for the same.  
2. Create your API server with Node and Express with a basic get route.
3. Try this example and build a simple chat application with Socket IO - https://socket.io/get-started/chat 
4. Use authentication APIs built in the previous MS. Learn to write reusable code to avoid writing same code for repeating features again. 

Now that our basic user login process is complete, we will add the messaging functionality using socket.io.

1. Initialize a socket server in our express server. 
2. Add listeners for when the client sends a message and emitting it to other user in the conversation.  
3. Add Sign In - Sign Out and link it to the form , allowing users to make accounts. 

Implement the below apis and socket connections:
    - For one to one chat
    - For group chat
    - For a channel 
    - Encrypt messages being sent from clients
    - Send files from chats 

### Frontend

1. Start with Wireframing. It's a part of UI of design and an extremely essential process of the web design workflow. You can use **excalidraw** to create a rough version of your wireframing. Decide:  
    1. What views are involved in the app? 
    2. Are you using too many elements? Are the views getting redundant and cluttered?
    3. What buttons/interactions will trigger which other views? 
2. Start by building your app's frontend in React:
    
    *hint: you can use react-desktop library for the components, which is a collection of native components for mac OS and windows.* 
    
    1. set up the routing for all the components listed below. 
    You can use placeholder information while setting up the routing and add the routes later. 
    2. Add a Sign In/ Sign Up form Component that is the first thing that the user sees if not logged in.  Link to the backend for the OAuth Sign In Sign Up feature.  
    3. Create a Chat component that will contain our UI for the main Chat application. 
    4. Inside it, add a conversations side bar that lists all your conversations. 
    5. Also add a component that shows your ongoing conversation, With a form component that sends messages at the bottom. 
    Your app should look something like this: 
        
        ![Untitled (14)](https://user-images.githubusercontent.com/19927261/175981685-b123933f-1c93-4915-af3b-f23f90e0c550.png)
        
3. Initialize client side socket.io. Parse information like username, when the client enters and exits a room and when client sends a message. Create the functionality for updating the state in the React UI.  
4. Now that your React App is complete, Setup an electron app with a new BrowserWindow that will serve as the primary view for your React app. 
*hint: explore the importance of  wait-on and electron-is-dev for this process.*
5. Set up Notifications for your app using the Electron Notifications API.
6. Deploy your Electron App by using electron-builder and test it on your machine.
