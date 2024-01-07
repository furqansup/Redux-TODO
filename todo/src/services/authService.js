// src/services/authService.js

const authService = {
  // Function for simulating user signup
  signup: async (user) => {
    // Simulate API call or local storage interaction
    // For demonstration, store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  },

  // Function for simulating user login
  login: async (user) => {
    // Simulate API call or local storage interaction
    // For demonstration, store user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  },

  // Function for simulating user logout
  logout: async () => {
    // Simulate clearing user data from local storage
    localStorage.removeItem('user');
    return Promise.resolve();
  },

  // Function to check if a user is authenticated
  isAuthenticated: () => {
    // Check if user data is present in local storage
    const user = localStorage.getItem('user');
    return !!user;
  },
};

export default authService;
