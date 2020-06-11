import React, { useCallback } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/search";
import Results from "../components/results";
import { fetchResults, getResults, isLoading } from "../store/search";

const Home = () => {
  const dispatch = useDispatch();
  const results = useSelector(getResults);
  const loading = useSelector(isLoading);

  const handleSearch = useCallback(
    (term) => {
      dispatch(fetchResults(term));
    },
    [dispatch]
  );

  return (
    <section>
      <header>
        <Search onChange={handleSearch} />
      </header>
      <aside>
        {loading && <ClimbingBoxLoader color="#fff" />}
        <Results data={results} />
      </aside>
    </section>
  );
};

export default Home;
