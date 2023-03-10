import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  getProfile() {
    return decode(this.getToken(), { header: true });
  }

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  getToken() {
    // Retrieves the user token from localStorage
    return AsyncStorage.getItem('id_token');
  }

  login(idToken) {
    // Saves user token to localStorage
    AsyncStorage.setItem('id_token', idToken);
  }

  logout() {
    // Clear user token and profile data from localStorage
    AsyncStorage.removeItem('id_token');
  }
}

export default new AuthService();
