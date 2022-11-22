import { useEffect, useState } from "react";

const SCRIPT_URL = "https://accounts.google.com/gsi/client";

const useLoadGoogleScript = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
    };

    script.onerror = () => {
      setScriptLoaded(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return scriptLoaded;
};

export default useLoadGoogleScript;
