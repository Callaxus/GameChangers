import axios from 'axios';

//  Global config for Axios
axios.defaults.baseURL = 'http://localhost:8082/api';
axios.defaults.withCredentials = true;

//  Export axios as default for legacy imports
export default axios;

//  Auth
export const login = (data) => axios.post('/auth/login', data);
export const register = (data) => axios.post('/auth/register', data);
export const getProfile = () => axios.get('/auth/profile');
export const updateProfile = (data) => axios.put('/auth/profile', data);

//  Posts
export const getPosts = () => axios.get('/post');
export const getPost = (id) => axios.get(`/post/${id}`);
export const createPost = (data) => axios.post('/post', data);
export const updatePost = (id, data) => axios.put(`/post/${id}`, data);
export const deletePost = (id) => axios.delete(`/post/${id}`);

//  Favorites
export const getFavorites = () => axios.get('/favorite');
export const addFavorite = (postId) => axios.post('/favorite', { postId });
export const removeFavorite = (postId) => axios.delete(`/favorite/${postId}`);

//  Notifications
export const getNotifications = () => axios.get('/notification');
export const getUnreadCount = () => axios.get('/notification/count');
export const createNotification = (data) => axios.post('/notification', data);
export const markNotificationAsRead = (id) => axios.put(`/notification/${id}/read`);
export const deleteNotification = (id) => axios.delete(`/notification/${id}`);

//  Offers
export const createOffer = (data) => axios.post('/offer', data);
export const getOffersForOwner = (ownerId) => axios.get(`/offer/owner/${ownerId}`);
export const getOffersForBuyer = (buyerId) => axios.get(`/offer/buyer/${buyerId}`);
export const getOffer = (id) => axios.get(`/offer/${id}`);
export const updateOffer = (id, data) => axios.put(`/offer/${id}`, data);
export const deleteOffer = (id) => axios.delete(`/offer/${id}`);

//  Reports
export const submitReport = (data) => axios.post('/report', data);
export const getReports = () => axios.get('/report');
export const updateReportStatus = (id, data) => axios.put(`/report/${id}/status`, data);

//  Admin
export const getAllUsers = () => axios.get('/admin/users');
export const getAllPostsAdmin = () => axios.get('/admin/posts');
export const getAllReportsAdmin = () => axios.get('/admin/reports');
export const deleteUser = (id) => axios.delete(`/admin/users/${id}`);
export const deletePostAdmin = (id) => axios.delete(`/admin/posts/${id}`);
export const resolveReport = (id) => axios.put(`/admin/reports/${id}/resolve`);
