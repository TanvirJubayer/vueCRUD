const TOKEN_KEY = "auth_token";

const delay = (ms = 150) => new Promise((resolve) => setTimeout(resolve, ms));

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  await delay();
  localStorage.setItem(TOKEN_KEY, "dummy-token");
};

const logout = async () => {
  await delay();
  localStorage.removeItem(TOKEN_KEY);
};

const isAuthenticated = () => Boolean(localStorage.getItem(TOKEN_KEY));

export default { login, logout, isAuthenticated };
