import axios from "axios"
import { BASE_URL } from '../api/apiConfig';
import {User} from "../types/user";
 

export const getUserDetails = async (email: string, token: string): Promise<User | null> => {
    try {
      const headers = {
        authorization: `Bearer ${token}`,
      };
  
      const response = await axios.get(`${BASE_URL}/users/email/${email}`, { headers });
  
      // Assuming that 'res.data' contains the user data
      const user: User = response.data;
  
      return user;
    } catch (error) {
      console.log(error);
      return null;
    }
  };