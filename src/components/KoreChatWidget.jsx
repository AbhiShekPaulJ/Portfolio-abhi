import { useEffect } from "react";

const KoreChatWidget = () => {
  useEffect(() => {
    // Check if script is already added
    if (!document.getElementById("kore-chat-sdk")) {
      const script = document.createElement("script");
      script.id = "kore-chat-sdk";
      script.src =
        "https://cdn.jsdelivr.net/npm/kore-web-sdk@11.18.0/dist/umd/kore-web-sdk-umd-chat.min.js";
      script.onload = () => {
        // Initialize Kore.ai widget
        KoreChatSDK.chatConfig.botOptions.API_KEY_CONFIG.KEY =
          "12e170448e9142a09eaa12a38c3d2c0894b71808393a445591d542188680bc46st34";
        new KoreChatSDK.chatWindow().show(KoreChatSDK.chatConfig);
      };
      document.body.appendChild(script);
    }
  }, []);

  return null; // the widget attaches itself to the DOM
};

export default KoreChatWidget;