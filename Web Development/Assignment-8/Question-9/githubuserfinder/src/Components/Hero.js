import React, { useContext } from "react";
import Card from "./Card";
import GithubUserContext from "../Context/GithubUserContext";

const Hero = () => {
  const githubUser = useContext(GithubUserContext)[0];
  return (
    <div className="bg-[#5D48E8] w-full h-[600px] min-h-full flex justify-center items-center">
      {githubUser && (
        <Card
          name={githubUser.name}
          location={githubUser.location}
          public_repos={githubUser.public_repos}
          followers={githubUser.followers}
          bio={githubUser.bio}
          avatar_url={githubUser.avatar_url}
          html_url={githubUser.html_url}
        />
      )}
    </div>
  );
};

export default Hero;
