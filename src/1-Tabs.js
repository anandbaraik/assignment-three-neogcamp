import { useState } from "react";

// Create a Tabs component in React with four city name tabs. On click of each tab show some content about that city.
export function Tabs() {
  const CITIES = [
    {
      city: "London",
      content:
        "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times"
    },
    {
      city: "Paris",
      content:
        "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine"
    },
    {
      city: "Tokyo",
      content:
        "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods"
    },
    {
      city: "NewYork",
      content:
        "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers"
    }
  ];

  const [activeTab, setActiveTab] = useState(CITIES[0]);

  const handleClick = (activeCity) => {
    const city = CITIES.find(({ city }) => city === activeCity);
    setActiveTab(city);
  };

  const getStyle = (city) => {
    return activeTab?.city === city
      ? { backgroundColor: "#078f17", padding: "5px", color: "#fff" }
      : { backgroundColor: "#90ee90", padding: "5px" };
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
      {CITIES?.map(({ city }) => {
        return (
          <button
            key={city}
            onClick={() => handleClick(city)}
            style={getStyle(city)}
          >
            {city}
          </button>
        );
      })}
      {activeTab && (
        <>
          <h1>{activeTab.city}</h1>
          <p>{activeTab.content}</p>
        </>
      )}
    </div>
  );
}
