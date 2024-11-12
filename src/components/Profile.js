import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';

import { getPlayer } from '../graphql/queries';
import { createPlayer, updatePlayer } from '../graphql/mutations';

const Profile = ({ user }) => {
    const [profile, setProfile] = useState(null);
    const client = generateClient();

    useEffect(() => {
        fetchProfile();
    }, []);

    async function fetchProfile() {
        try {
            const playerData = await client.graphql(graphqlOperation(getPlayer, { id: user.username }));
            if (playerData.data.getPlayer) {
                setProfile(playerData.data.getPlayer);
            } else {
                const newPlayer = { id: user.username, username: user.username, gamesWon: 0, squaresConquered: 0 };
                await API.graphql(graphqlOperation(createPlayer, { input: newPlayer }));
                setProfile(newPlayer);
            }
        } catch (err) {
            console.error('Error fetching profile:', err);
        }
    }

    return (
        <div>
            <h2>Player Profile</h2>
            {profile && (
                <div>
                    <p>Username: {profile.username}</p>
                    <p>Games Won: {profile.gamesWon}</p>
                    <p>Squares Conquered: {profile.squaresConquered}</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
