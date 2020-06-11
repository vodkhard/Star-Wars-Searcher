import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails, getDetails, isLoading } from "../store/details";

const useDetails = (resource, id) => {
  const dispatch = useDispatch();
  const data = useSelector(getDetails);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(fetchDetails(resource, id));
  }, [id, dispatch]);

  return { data, loading };
};

export default useDetails;
