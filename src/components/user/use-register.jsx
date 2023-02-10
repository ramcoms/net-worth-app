import { useState } from 'react';
import { supabase } from '../../config/supabase';

export const useRegister = () => {
  const [error, setError] = useState(null);

  const register = async (email, password) => {
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    }
  };

  return { register, error };
};
