import axios from 'axios';
import {useRouter} from 'vue-router'
import {useAuthStore} from "~/store/auth.js";

const API_URL = 'http://127.0.0.1:8000/api';

export const useAuth = () => {
    const authStore = useAuthStore();
    const router = useRouter();

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post(`${API_URL}/auth/`, {username, password})
            const { token, user_id, email } = response.data;

            const userResponse = await checkToken(token);
            if (userResponse.status === 'OK') {
                authStore.setToken(token)

                authStore.setUser({user_id, email, username})
            }

            return true;
        } catch (error) {
            console.error('Login failed', error);
            return false;
        }
    }

    const checkToken = async (token: string) => {
        try {
            const response = await axios.get(`${API_URL}/check_token/`, {
                headers: { Authorization: `Token ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error('Token validation failed:', error);
            return null;
        }
    };
    return {
        login,
        checkToken,
    }
}
