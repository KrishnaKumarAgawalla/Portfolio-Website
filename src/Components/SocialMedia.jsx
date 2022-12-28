import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const git = "https://github.com/KrishnaKumarAgawalla";
const linkedIn = "https://www.linkedin.com/in/krishnakumaragrawalla/";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsGithub onClick={() => window.open(git)} />
      </div>
      <div>
        <BsLinkedin onClick={() => window.open(linkedIn)} />
      </div>
    </div>
  );
};

export default SocialMedia;
