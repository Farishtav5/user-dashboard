interface UserSearchProps {
    query: string;
    updateQuery: (value: string) => void;
}

const UserSearch = ({ query, updateQuery }: UserSearchProps) => {
    return (
        <input
            type="search" // browser shows a built-in ✕ that clears the field (fires onChange with "")
            className="search"
            placeholder="Search by name, email or username..."
            onChange={(e) => updateQuery(e.target.value)}
            value={query}
        />
    );
};

export default UserSearch;
