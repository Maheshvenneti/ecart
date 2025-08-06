import React, { useState } from "react";
import axios from "axios";

const useApiPost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const postData = async (payload) => {
    setLoading(true);
    try {
      const response = await axios.post(url, payload);
      setData(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return error;
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, postData };
};

export default useApiPost;
