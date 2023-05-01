import { useEffect, useState } from "react";
import { fakeFetch } from "./fakeFetch";
// Given a list of movies as an array of objects with properties id, title, rating, year and category. Create a React component to list down all movies with rating and year. Create radio buttons to filter by category. Create a dropdown to filter by rating. Fake fetch has been provided.
export function Movies() {
  const URL = "https://example.com/api/movies";
  const RATING_LIST = [8.0, 8.5, 9.0, 9.5];
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({ rating: "All", category: "All" });

  const getMovies = async () => {
    try {
      const { status, data } = await fakeFetch(URL);
      if (status === 200) {
        setMovies(data);
        setCategories([
          "All",
          ...new Set([...data.map(({ category }) => category)])
        ]);
      }
    } catch ({ status, message }) {
      console.error(`${status} : ${message}`);
    }
  };

  const handleFilter = (value, type) => {
    setFilters((filter) => ({ ...filter, [type]: value }));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = movies.filter(({ category, rating }) => {
    if (
      (filters.rating === "All" || rating >= filters.rating) &&
      (filters.category === "All" || category === filters.category)
    ) {
      return true;
    }
    return false;
  });
  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <h1>Movies List</h1>
      <div>
        Category Filter :
        {categories?.map((item) => {
          return (
            <label key={item}>
              <input
                type="radio"
                name="category"
                value={item}
                onChange={(e) => handleFilter(e.target.value, "category")}
              />
              {item}
            </label>
          );
        })}
      </div>
      <div>
        Rating Filter :
        <select onChange={(e) => handleFilter(e.target.value, "rating")}>
          <option key="all" value="All">
            All
          </option>
          {RATING_LIST.map((rating) => {
            return (
              <option key={rating} value={rating}>
                {rating}+
              </option>
            );
          })}
        </select>
      </div>
      {filteredMovies?.map(({ id, title, rating, year, category }) => {
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>
              Rating : {rating} {" - "}
              Year : {year} {" - "}
              Category : {category}
            </p>
          </div>
        );
      })}
    </div>
  );
}
