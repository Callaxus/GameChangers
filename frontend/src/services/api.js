import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8082/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add JWT token to headers automatically if available
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => Promise.reject(error));

// Auth endpoints
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const getProfile = () => api.get('/auth/profile');
export const updateProfile = (data) => api.put('/auth/profile', data);

// Posts
export const getPosts = (params) => api.get('/post', { params });
export const getPostById = (id) => api.get(`/post/${id}`);
export const createPost = (data) => api.post('/post', data);
export const updatePost = (id, data) => api.put(`/post/${id}`, data);
export const deletePost = (id) => api.delete(`/post/${id}`);

// Favorites
export const addFavorite = (data) => api.post('/favorite', data);
export const getFavorites = () => api.get('/favorite');
export const removeFavorite = (postId) => api.delete(`/favorite/${postId}`);

// Reports
export const createReport = (data) => api.post('/report', data);
export const getReports = () => api.get('/report');
export const updateReportStatus = (id, status) => api.put(`/report/${id}/status`, { status });

// Notifications
export const getNotifications = () => api.get('/notification');
export const getUnreadCount = () => api.get('/notification/count');
export const markNotificationRead = (id) => api.put(`/notification/${id}/read`);
export const deleteNotification = (id) => api.delete(`/notification/${id}`);

// Offers
export const createOffer = (data) => api.post('/offer', data);
export const getOffersForOwner = (owner_id) => api.get(`/offer/owner/${owner_id}`);
export const getOffersForBuyer = (buyer_id) => api.get(`/offer/buyer/${buyer_id}`);
export const getOfferById = (id) => api.get(`/offer/${id}`);
export const updateOffer = (id, data) => api.put(`/offer/${id}`, data);
export const deleteOffer = (id) => api.delete(`/offer/${id}`);

// Admin
export const getAllUsers = () => api.get('/admin/users');
export const deleteUser = (id) => api.delete(`/admin/users/${id}`);
export const getAllPosts = () => api.get('/admin/posts');
export const deletePostAdmin = (id) => api.delete(`/admin/posts/${id}`);
export const getAllReports = () => api.get('/admin/reports');
export const resolveReport = (id) => api.put(`/admin/reports/${id}/resolve`);

export default api;