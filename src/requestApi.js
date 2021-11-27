import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequestApi = (url) => {
    const [data, setData] = useState([]);

  useEffect(() => {
      axios.get(url)
      .then(response => {
         console.log("Success in fetching the file from " + url);
         console.log(response.data);
         setData(response.data);
      })
      .catch(error => {
         console.error("Error in fetching the file from " + url);
      });
  }, [url,setData]);
    

    return {url, data};
}

export default useRequestApi;