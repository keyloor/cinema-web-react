import type { User } from "../models/user.model";

/**
 * Mock data for the active user profile.
 */
const mockUser: User = {
    id: "1",
    username: "Test User",
    password: "password",
    email: "test.user@example.com",
    profilePicUrl: "https://via.placeholder.com/150",
};

/**
 * MOCKED service to get the current user's profile.
 * Simulates an API call with a promise.
 */
export const getUserProfile = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockUser);
        }, 500); // Simulate network latency
    });
};
