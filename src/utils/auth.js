import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthService {
  async getProfile() {
    const decoded = decode(this.getToken());
    console.log(decoded);
    return decoded;
  }

  async loggedIn() {
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

  async getToken() {
    // Retrieves the user token from localStorage
    const value = await AsyncStorage.getItem('id_token');
    return value;
  }

  async login(idToken) {
    // Saves user token to localStorage
    await AsyncStorage.setItem('id_token', idToken);
  }

  async logout() {
    // Clear user token and profile data from localStorage
    await AsyncStorage.removeItem('id_token');
  }
}

export default new AuthService();
