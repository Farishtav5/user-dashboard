import type { User } from "./type";

export const getFullName = (user: User) => `${user.firstName} ${user.lastName}`;
