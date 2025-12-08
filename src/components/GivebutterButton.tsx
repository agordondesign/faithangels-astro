import React, { useEffect } from "react";
import "../styles/global.css";
//Givebutter embed

const GivebutterButton: React.FC = () => {
  useEffect(() => {
    // Check if the script is already present
    if (
      !document.querySelector('script[src*="givebutter.com/latest.umd.cjs"]')
    ) {
      const script = document.createElement("script");
      script.async = true;
      script.src =
        "https://widgets.givebutter.com/latest.umd.cjs?acct=za4nepdN8v6skepQ&p=other";
      document.body.appendChild(script);
    }
  }, []);

  return <givebutter-widget id="j1x1Op" />;
};

export default GivebutterButton;
