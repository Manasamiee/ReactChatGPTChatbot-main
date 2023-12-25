import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

//const PLAYGROUND_API_KEY = process.env.REACT_APP_PLAYGROUND_API_KEY;

console.log("API Key:", process.env.REACT_APP_PLAYGROUND_API_KEY);

