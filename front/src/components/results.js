import React from "react";
import { Link } from "react-router-dom";

const Results = ({ data }) => {
  const getTitle = (result) => result.name || result.title;
  const formatUrl = (url) =>
    url.replace(/^(http|https):\/\/swapi.dev\/api/, "");

  return (
    <div>
      {data.map(({ resource, count, results }) => (
        <div key={resource}>
          <p>
            {resource}: {count} results
          </p>
          {count > 0 && (
            <ul>
              {results.map((result) => (
                <li key={getTitle(result)}>
                  <Link to={formatUrl(result.url)}>{getTitle(result)}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Results;
