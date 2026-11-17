import { useEffect, useState } from "react";
import type { User, UsersResponse } from "./type";
import UserList from "./UserList";
import "./Dashboard.css";

const USERS_URL = "https://dummyjson.com/users";

const Dashboard = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true); // data starts loading immediately
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        // Without AbortController with StrictMode: both requests complete, so we have 2 API calls and setUsers runs twice
        const controller = new AbortController();
        const loadUsers = async () => {
            try {
                const response = await fetch(USERS_URL, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data: UsersResponse = await response.json();
                setUsers(data.users);
            } catch (err) {
                // StrictMode cancels the first request in dev, which is not a real error so excluding that 
                if (err instanceof Error && err.name === "AbortError") return;
                setError(err instanceof Error ? err.message : "Something went wrong");
            } finally {
                // added the if check bcz flash was coming
                // The cancelled request #1 reaches finally and sets loading = false
                // while request #2 is still downloading. For a moment, loading is false but users is still [].
                if (!controller.signal.aborted) setLoading(false);
            }
        };

        loadUsers();

        return () => controller.abort(); // cleanup: cancel the request if unmounted
    }, []); // [] so it runs once

    if (loading) return <p className="status">Loading users...</p>;
    if (error) return <p className="status error">Error: {error}</p>;

    return (
        <UserList users={users}/>
    );
};

export default Dashboard;
