import { defineStore } from 'pinia'
import type {User} from "~/types/auth";

export const useAuthStore = defineStore('auth',{
    state: () => ({
        user: null as User | null,
        token: '' as string
    }),
    getters: {
        isAuthenticated: state => !!state.token,
        getUser: state => state.user
    },
    actions: {
        setUser(user: User) {
            this.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        setToken(token: string) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        logout() {
            this.user = null;
            this.token = '';
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
        loadStoredState() {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (user && token) {
                this.user = JSON.parse(user);
                this.token = token;
            }
        },
    },
})