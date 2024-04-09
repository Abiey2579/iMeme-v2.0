import { IonButton, IonContent } from "@ionic/react";
import WelcomeBackgroundImage from "../../assets/images/ONBOARDING_BACKGROUND_IMAGE.png";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import "./Welcome.css";

const Welcome = () => {
  return (
    <IonContent>
      <div
        style={{ backgroundImage: `url(${WelcomeBackgroundImage})` }}
        className="welcome-background-gradient flex items-end bg-slate-100 h-screen bg-cover bg-center bg-no-repeat"
      >
        <div className="relative z-10 p-6">
          <h1 className="font-fredoka text-[32px] text-white mb-3">
            Get ready to create the funniest memes ever
          </h1>
          <p className="font-quicksand">
            The ultimate meme creation app! With iMeme, you can easily create
            and share hilarious memes with your friends and followers on social
            media.
          </p>
          <IonButton className="font-quicksand font-bold bg-accent float-right text-white rounded-lg flex items-center mt-20">
            Get Started <ArrowRightIcon className="ml-8 w-5" />
          </IonButton>
        </div>
      </div>
    </IonContent>
  );
};

export default Welcome;
