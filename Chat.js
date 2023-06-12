import React, { useState, useEffect } from 'react';
import { View, Animated, Easing } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Assuming you have FontAwesome5 installed
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

import { db } from './db';

const Chat = () => {
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([]);
    const spinValue = new Animated.Value(0);

    useEffect(() => {
        // Start the animation when isTyping changes
        if (isTyping) {
            startAnimation();
        } else {
            resetAnimation();
        }
    }, [isTyping]);

    const handleSend = async (newMessages = []) => {
        const userInput = newMessages[0].text; // Extracting the user input
        const userMessage = {
            _id: Math.random().toString(), // Use a unique ID for the response message
            text: userInput,
            createdAt: new Date(),
            user: {
                _id: 1, 
                name: db['user'].user_name,
                // avatar: 'API_AVATAR_URL',
            },
        };
        setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, [userMessage])
        );
        try {
            setIsTyping(true);
            const response = await axios.get(`API_ENDPOINT_URL?userInput=${userInput}`);
            setIsTyping(false);
            
            const responseData = response.resp;

            const responseMessage = {
                _id: Math.random().toString(),
                text: responseData,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'API',
                    // avatar: 'API_AVATAR_URL',
                },
            };

            setMessages((previousMessages) =>
                GiftedChat.append(previousMessages, [responseMessage])
            );
        } catch (error) {
            // Handle any error that occurred during the API request
            console.error(error);
        }
    };

    const startAnimation = () => {
        Animated.loop(
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear,
            useNativeDriver: true,
          })
        ).start();
    };

    const resetAnimation = () => {
        spinValue.setValue(0);
    };

    const renderFooter = () => {
        const spin = spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '10deg'],
        });
    
        return (
          <View>
            {/* Animate the typing icon */}
            {isTyping && (
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <FontAwesome5 name="ellipsis-h" size={20} color="black" />
              </Animated.View>
            )}
          </View>
        );
    };

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => setMessages((previousMessages) => GiftedChat.append(previousMessages, newMessage))}
      user={{
        _id: 1,
      }}
      renderFooter={renderFooter} 
    />
  );
};

export default Chat;


