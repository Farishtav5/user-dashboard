import type { User } from "./type";
import UserTable from "./UserTable";
import UserSearch from "./UserSearch";
import { useMemo, useState } from "react";
import { getFullName } from "./utils";

// React always puts all props into one object, so created {}
// type of the whole props object
interface UserListProps {
    users: Array<User>;
}

const UserList = ({ users }: UserListProps) => {
    const [query, setQuery] = useState("");
    const normalizedQuery = query.trim().toLowerCase();

    // Building search text once, so that it's not get computed on each keystroke
    // but query changes on every keystroke, so this avoids rebuilding it each time.
    const searchIndex = useMemo(
        () =>
            users.map((user) => ({
                user,
                searchText: `${getFullName(user)} ${user.email} ${user.username}`.toLowerCase(),
            })),
        [users]
    );

    const filteredUsers = normalizedQuery
        ? searchIndex
              .filter((item) => item.searchText.includes(normalizedQuery))
              .map((item) => item.user)
        : users;

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>User Dashboard</h1>
                <p className="dashboard-count">
                    Showing {filteredUsers.length} of {users.length} users
                </p>
            </header>
            <UserSearch query={query} updateQuery={setQuery} />
            <UserTable filteredUsers={filteredUsers} />
        </div>
    );
};

export default UserList;
