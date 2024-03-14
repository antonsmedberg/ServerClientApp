// client/src/services/authService.js
export const mockLogin = async (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === "user" && credentials.password === "pass") {
          resolve({ token: "mockToken" }); // Simulate returning a token from the backend
        } else {
          reject(new Error("Invalid credentials"));
        }
      }, 1000);
    });
  };
  