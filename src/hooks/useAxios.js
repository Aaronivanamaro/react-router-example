import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url, errorOrigin, cancelRequestOrigin) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    setTimeout(() => {
      setIsPending(true);      
      axios.get(url, {
        cancelToken: source.token,
      })
      .then((result) => {
        setData(result.data);
        setIsPending(false);
      })    
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log(cancelRequestOrigin, error.message);
        } else {
          console.log(errorOrigin, error.message)
        }
     });
    }, 500)

    return () => {
      source.cancel("request cancelled");
     };
    
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])
  
  return { data, isPending };    

}
 
export default useAxios;