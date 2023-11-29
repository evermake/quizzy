import React from 'react';
import {useGetUserQuery} from "~/services/userService";

const Header = () => {
    const { data : user, error, isLoading } = useGetUserQuery()

    if (error) {
        return <div>Error: {error}</div>
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div>
                Home
            </div>
            <div>
                {user.name}
            </div>
        </div>
    );
};

export default Header;
