import { useState } from "react";

export default function SearchBar({ handleSearch }) {
  let [searchTerm, setSearchTerm] = useState("");

  const onSubmit = (e) => {
    handleSearch(e, searchTerm);
    // e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter search term here"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}
