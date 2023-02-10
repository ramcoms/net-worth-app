import { useState } from 'react';
import { supabase } from '../../config/supabase';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setError(null);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
  };

  return { login, error };
};
