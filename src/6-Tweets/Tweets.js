import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";

// Create a React component that fetches products data from an API endpoint using useEffect hook and display tweets (content, likes, views) as a list on the screen using the useState hook. Add a button on top, on click of which it displays only the tweets with more than 50 likes.
export function Tweets() {
  const URL = "https://example.com/api/usertweets";
  const [tweets, setTweets] = useState([]);
  const [filteredTweets, setFilteredTweets] = useState([]);
  const [toggleFilter, setToggleFilter] = useState(true);
  const getTweets = async () => {
    try {
      const { status, data } = await fakeFetch(URL);
      if (status === 200) {
        setTweets(data);
        setFilteredTweets(data);
      }
    } catch ({ status, message }) {
      console.error(`${status} : ${message}`);
    }
  };
  useEffect(() => {
    getTweets();
  }, []);
  const filterOutTweets = () => {
    setToggleFilter((toggle) => !toggle);
    if (!toggleFilter) {
      setFilteredTweets(tweets);
    } else {
      let filteredTweetsList = tweets.filter(({ likes }) => likes > 50);
      setFilteredTweets(filteredTweetsList);
    }
  };
  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <button onClick={filterOutTweets}>
        {!toggleFilter
          ? "Show All Tweets"
          : "Show Tweets with more than 50 likes"}
      </button>
      {filteredTweets?.map(({ id, content, likes, views }) => {
        return (
          <div
            key={id}
            style={{
              border: "0.1rem solid aqua",
              borderRadius: "0.1rem",
              padding: "0.5rem",
              margin: "0.5rem 0"
            }}
          >
            <h2>{content}</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly"
              }}
            >
              <span>Likes : {likes}</span> <span>Views : {views}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
