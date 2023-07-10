import type { IResponse } from '@/types/http';

import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';

class Request {
    private instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: 'http://localhost:3000/api',
            timeout: 5 * 1000,
        });

        this.instance.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        });
        // this.instance.interceptors.response.use((response: AxiosResponse<IResponse, any>) => {
        //     return response.data;
        // });
    }

    public request<T>(config: AxiosRequestConfig) {
        return this.instance.request<T>(config);
    }
}

export const baseAjax = new Request();

