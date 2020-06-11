import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useDebounce from "../lib/useDebounce";

const Search = ({ onChange, debounce, placeholder }) => {
  const [term, setTerm] = useState("");
  const searchTerm = useDebounce(term, debounce);

  useEffect(() => {
    if (searchTerm) {
      onChange(searchTerm);
    }
  }, [searchTerm, onChange]);

  const handleChange = async (e) => {
    setTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
      style={{
        border: "1px solid #fff",
        background: "none",
        padding: "15px",
        width: "calc(100% - 32px)",
        textAlign: "center",
        caretColor: "#fff",
        color: "#fff",
        outline: "none",
      }}
    />
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  debounce: PropTypes.number,
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  debounce: 500,
  placeholder: "Search something in the galaxy...",
};

export default Search;
