import { useState } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import GithubUserContext from "./Context/GithubUserContext";
import "./App.css";

function App() {
  const [githubUserHook, setGithubUserHook] = useState(null);

  return (
    <div>
      <GithubUserContext.Provider value={[githubUserHook, setGithubUserHook]}>
        <Header />
        <Hero />
      </GithubUserContext.Provider>
    </div>
  );
}

export default App;
