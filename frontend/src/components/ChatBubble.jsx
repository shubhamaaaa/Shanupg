import React, { useEffect } from "react";

const ChatBubble = () => {
  useEffect(() => {
    // Inject Chatbot Configuration Script
    const scriptConfig = document.createElement("script");
    scriptConfig.textContent = `
      window.embeddedChatbotConfig = {
        chatbotId: "9DHraGFw-v-HEivsD7_K3",
        domain: "www.chatbase.co"
      };
    `;
    document.body.appendChild(scriptConfig);

    // Inject Chatbot Embed Script
    const scriptEmbed = document.createElement("script");
    scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
    scriptEmbed.setAttribute("chatbotId", "9DHraGFw-v-HEivsD7_K3");
    scriptEmbed.setAttribute("domain", "www.chatbase.co");
    scriptEmbed.defer = true;
    document.body.appendChild(scriptEmbed);

    // Cleanup scripts on component unmount
    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptEmbed);
    };
  }, []);

  return (
    <div className="chat-bubble-container">
      {/* This container ensures styling is consistent */}
      <style jsx>{`
        .chat-bubble-container {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default ChatBubble;
