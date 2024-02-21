import React, { useEffect, useState } from "react";
import axios from "axios";

//  Modifying original component
const FetchData = (ProgressDisplay) => {
  const FetchedData = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users/")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, []);
    return (
      <ProgressDisplay
        {...props}
        data={data}
        error={error}
        isLoading={isLoading}
      />
    );
  };

  return FetchedData;
};

export default FetchData;
