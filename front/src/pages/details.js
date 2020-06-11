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
    <section>
      <header>
        <h2>
          {resource}: {data.name}
        </h2>
      </header>
      <aside>
        {loading && <ClimbingBoxLoader color="#fff" />}
        {data &&
          Object.entries(data).map(([key, value]) =>
            Array.isArray(value) ? (
              <details key={key}>
                <summary>{key}</summary>
                <div>
                  {value.map((v) => (
                    <p key={v}>{formatValue(v)}</p>
                  ))}
                </div>
              </details>
            ) : (
              <div key={key}>
                {key}: {formatValue(value)}
              </div>
            )
          )}
      </aside>
    </section>
  );
};

export default Details;
