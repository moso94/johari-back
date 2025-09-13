import axios from 'axios';
import { User, Adjective, CreateUserRequest } from '../types';

const API_BASE_URL = 'http://127.0.0.1:8000/api/V1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Users API
export const usersApi = {
  getAll: () => api.get<User[]>('/user/'),
  getById: (id: number) => api.get<User>(`/user/${id}/`),
  create: (data: CreateUserRequest) => api.post<User>('/user/', data),
  update: (id: number, data: Partial<CreateUserRequest>) => api.patch<User>(`/user/${id}/`, data),
  delete: (id: number) => api.delete(`/user/${id}/`),
};

// Adjectives API
export const adjectivesApi = {
  getAll: () => api.get<Adjective[]>('/adjs/'),
  getById: (id: number) => api.get<Adjective>(`/adjs/${id}/`),
  create: (data: { title: string }) => api.post<Adjective>('/adjs/', data),
  update: (id: number, data: { title: string }) => api.patch<Adjective>(`/adjs/${id}/`, data),
  delete: (id: number) => api.delete(`/adjs/${id}/`),
};

export default api;