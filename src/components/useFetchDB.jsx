import { useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

export const useFetchDB = (table, col) => {
  const [error, setError] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from(table)
        .select(col)
        .order('id');
      if (error) {
        setError(error);
        console.log(error);
      }

      if (data) {
        setDocuments(data);
        setError(null);
      }
    };

    fetchData();
  }, []);

  return { error, documents };
};
