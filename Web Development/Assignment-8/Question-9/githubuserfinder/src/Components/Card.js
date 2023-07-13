import React from "react";

const Card = ({name, location, public_repos, followers, bio, avatar_url, html_url}) => {
  return (
    <div className="w-fit px-8 bg-[#1E194D] border border-gray-200 rounded-lg shadow">
      <div className="flex flex-col items-center pt-4 pb-10">
        <img
          className="w-60 h-60 mb-3 rounded-3xl shadow-lg"
          src={avatar_url}
          alt="Avatar"
        />
        <div className="grid grid-cols-2 gap-2 mt-4">
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Name: {name}
          </div>
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Github:&nbsp; <a className="underline" href={html_url} target="_blank" rel="noreferrer">Click Here</a>
          </div>
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Location: {location}
          </div>
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Public Repos: {public_repos}
          </div>
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Followers: {followers}
          </div>
          <div className="inline-flex items-center px-4 py-2 text-xl text-center text-white bg-[#5D48E8] rounded-lg">
            Bio: {bio}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
