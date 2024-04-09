import { useEffect, useState } from "react";
import { IonProgressBar, IonContent } from "@ionic/react";
import Logo from "../../assets/images/Logo.svg";
import { useHistory } from "react-router";
import "./Splash.css";
import { uriPaths } from "../../assets/data/uriPaths";

const Splash = () => {
  const [progress, setProgress] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 0.01);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (progress > 1) {
    setTimeout(() => {
      history.push(uriPaths.Welcome);
    }, 1000);
  }
  return (
    <IonContent>
      <div className="grid place-items-center bg-slate-100 text-blue-800 h-screen">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="iMeme Logo" className="w-8" />
            <h1 className="font-fredoka text-xl text-primary">iMeme</h1>
          </div>
          <IonProgressBar value={progress} />
        </div>
      </div>
    </IonContent>
  );
};

export default Splash;
