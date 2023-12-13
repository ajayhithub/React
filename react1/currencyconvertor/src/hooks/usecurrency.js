import {useEffect,useState} from "react";

  const  usecurrency = (currency) => {

  const [data,setdata] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setdata(res[currency]))
      .catch((error) => console.error('Error fetching currency data:', error));
  }, [currency]);

    
    return data;
}

 export default usecurrency;