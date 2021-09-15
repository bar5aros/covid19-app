import React, { useEffect } from "react";

const FetchData = () => {
  const fetchFunc = async () => {
    const response = await fetch("https://covid-19-data.p.rapidapi.com/docs.json", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
        "x-rapidapi-key": "2e6f85a8c4msh74ef635f36af05dp12928ejsn344edfc2fdf8",
      },
    });
    const parsedData = await response.json();
    return parsedData;
  };

  useEffect(() => {
    // fetchCountry()
    //   .then((fetchedData) => console.log(fetchedData))
    //   .catch((reason) => console.log(reason.message));
    fetchFunc()
      .then((fetchedData) => console.log(fetchedData))
      .catch((reason) => console.log(reason.message));
  }, []);

  return <div className="FetchData" />;
};

export default FetchData;
