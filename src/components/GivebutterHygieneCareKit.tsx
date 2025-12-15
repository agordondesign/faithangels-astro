import React, { useEffect } from "react";
import "../styles/global.css";

const GivebutterHygieneCareKit: React.FC = () => {
  useEffect(() => {
    // Only add the script if it hasn't been added yet
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

  return <givebutter-widget id="pXoKeg"></givebutter-widget>;
};

export default GivebutterHygieneCareKit;
