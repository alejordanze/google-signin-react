import { useEffect, useState } from "react";

const SCRIPT_URL = "https://accounts.google.com/gsi/client";

const useLoadGoogleScript = (): boolean => {
  const [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = (): void => {
      setScriptLoaded(true);
    };

    script.onerror = (): void => {
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
