import { useState } from "react";
import ApiConfig from "../libs/api";
import { IUser } from "../types/register";

const useRegister = () => {
  const [register, setRegister] = useState<IUser[]>([]);
  const getRegister = async (data: any): Promise<void> => {
    try {
      const response = await ApiConfig.post("/register", data);
      setRegister(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getRegister,
    register,
  };
};

export default useRegister;
