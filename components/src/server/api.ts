const BACKEND_URL = "http://localhost:3000";

const getUsers = async () => {
  const response = await fetch(`${BACKEND_URL}/users`);

  if (!response.ok) {
    throw new Error("Something happened getting the Users");
  }

  return response.json();
};

export { getUsers };
