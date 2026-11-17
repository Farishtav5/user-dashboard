import type { User } from "./type"
import { getFullName } from "./utils"

interface UserTableProps {
    filteredUsers: Array<User>
}
const UserTable = ({filteredUsers}: UserTableProps) => {
    return (
        <div className="table-wrap">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length === 0 ? (
                        <tr>
                            <td className="empty" colSpan={4}>No users found</td>
                        </tr>
                    ) : (
                        filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="user-name">{getFullName(user)}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>
                                    {user.company?.name ?? "—"}
                                    {user.company?.title && <span className="user-sub">{user.company.title}</span>}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable
