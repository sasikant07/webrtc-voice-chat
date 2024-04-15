import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";

export const useLoadingWithRefresh = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/refresh`,
          {
            withCredentials: true,
          }
        );
        dispatch(setAuth(data));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    })();
  }, []);

  return { loading };
};
