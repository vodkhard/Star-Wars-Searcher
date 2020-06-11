import React, { useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import useDetails from "../lib/useDetails";

const Details = () => {
  const { id, resource } = useParams();
  const { data, loading } = useDetails(resource, id);
  const formatValue = useCallback((value) => {
    const uri = value.replace(/^(http|https):\/\/swapi.dev\/api/, "");
    return value === uri ? value : <Link to={uri}>{uri}</Link>;
  }, []);

  return (
    <div>
      <h2>
        {resource}: {data.name}
      </h2>
      {loading && <ClimbingBoxLoader color="#fff" />}
      <aside>
        {data &&
          Object.entries(data).map(([key, value]) =>
            Array.isArray(value) ? (
              <details key={key}>
                <summary>{key}</summary>
                <p>{value.map((v) => `${formatValue(v)}\n`)}</p>
              </details>
            ) : (
              <div key={key}>
                {key}: {formatValue(value)}
              </div>
            )
          )}
      </aside>
    </div>
  );
};

export default Details;
