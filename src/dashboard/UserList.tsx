import type { User } from "./type";
import UserTable from "./UserTable";
import UserSearch from "./UserSearch";
import { useState } from "react";
import { getFullName } from "./utils";

// React always puts all props into one object, so created {}
// type of the whole props object
interface UserListProps {
    users: Array<User>;
}

const UserList = ({ users }: UserListProps) => {
    const [query, setQuery] = useState("");
    const normalizedQuery = query.trim().toLowerCase();

    const filteredUsers = normalizedQuery
        ? users.filter((user) => {
              const searchable = `${getFullName(user)} ${user.email} ${user.username}`.toLowerCase();
              return searchable.includes(normalizedQuery);
          })
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
