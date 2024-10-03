import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const { type, identifier } = useParams();

    return (
        <div>
            <h2>Profile Page</h2>
            <p>Viewing {type}: {identifier}</p>
            {/* You can add more detailed profile information here */}
        </div>
    );
};

export default ProfilePage;
