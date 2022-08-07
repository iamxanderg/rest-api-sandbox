import { useState, useEffect } from 'react';
import axios from 'axios';

export const useApiFetch = (props) => {
  const { url, config = {} } = props;
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(url, config)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        });

      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
