import users from "../data/users.json" with { type: "json" };

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  role: string;
  active: boolean;
  createdAt: string;
};

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number) => {
  return users.find((item) => item.id === id);
};
