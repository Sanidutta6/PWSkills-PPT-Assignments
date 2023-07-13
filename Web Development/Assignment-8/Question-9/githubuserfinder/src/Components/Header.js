import React, {useContext} from "react";
import axios from 'axios';
import GithubUserContext from "../Context/GithubUserContext";

const Header = () => {
  const setGithubUser = useContext(GithubUserContext)[1];

  const handleClick = (e) => {
    e.preventDefault();

    const githubUsernameInput = document.getElementById("github-user-name");
    if(githubUsernameInput.value === "") {
        return;
    }

    axios.get(`https://api.github.com/users/${githubUsernameInput.value}`)
    .then((response) => {
      const {name, location, public_repos, followers, bio, avatar_url, html_url} = response.data;
      setGithubUser({name, location, public_repos, followers, bio, avatar_url, html_url});
    })
    .catch((error) => {
      console.log(error);
    })

    githubUsernameInput.value = "";
  };

  return (
    <div className="bg-white py-4 w-full text-center">
      <form>
        <div>
          <input
            className="bg-white text-black text-2xl p-4 border-2 border-black outline-none"
            type="text"
            name="github-user-name"
            id="github-user-name"
            placeholder="Enter Github Username"
          />
          <input
            className="bg-[#1E194D] text-white text-2xl px-16 py-4"
            type="submit"
            id="github-user-submit"
            onClick={handleClick}
          />
        </div>
      </form>
    </div>
  );
};

export default Header;
