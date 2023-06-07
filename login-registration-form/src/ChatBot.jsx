import React, { useState } from "react"; 
import "./ChatBot.css";
export const ChatBot = () => {
    //const [chat,openChat] = useState('true');
    const textQuery = () =>{
        console.log("your answer");
    }
    return (
        //Using tailwind CSS properties
        <div className="chatbot absolute bottom-2 right-2 bg-gray-500"> 
        <div className="h-12 bg-black py-5 px-4 flex justify-between"> 
            <h2 className = " text-white text-3xl leading-3">your Chat</h2> 
            <button className ="bg-transparent text-red-500 p-0 cursor-pointer">&#10060;</button>  
        </div>
        <div className = "chatbot-body bg-white my-2 border rounded-0.4rem overflow-y-scroll overflow-hidden">
        <p className = "p-6 flex justify-between my-0">Hi, how can i help you?</p>
        </div>
        <div className = "py-1 px-4 flex justify-between items-center h-6rem bg-orange-500">
            <input className = "p-4" type = "text" placeholder = "Type Here..."/>
            <button className ="w-20% border-none text-white bg-gray-800 cursor-pointer mx-4 py-4" onClick = {() => textQuery()}>Send</button>
        </div>
        </div>

        // //using normal CSS properties
        //  <div className="chatbot">
        //  <div className="chatbot-header"> 
        //      <h2 className = "chatbot-header-text">your Chat</h2> 
        //      <button className ="chatbot-header-btn">&#10060;</button> 
        //  </div>
        //  <div className = "chatbot-body">
        //  <p className = "chatbot-body-text">Hi, how can i help you?</p>
        //  </div>
        //  <div className = "chatbot-footer">
        //      <input className = "chatbot-footer-text" type = "text" placeholder = "Type Here..."/>
        //      <button className ="charbot-footer-btn" onClick = {() => textQuery()}>Send</button>
        //  </div>
        //  </div>
        )
}