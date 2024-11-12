import React, { useEffect, useState } from 'react';
import { generateClient } from '@aws-amplify/api';
import { listRankings } from '../graphql/queries';

const Ranking = () => {
    const client = generateClient();
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        fetchRankings();
    }, []);

    async function fetchRankings() {
        try {

            const variables = {
                limit: 10,
                sort: { field: "rank", direction: "asc" }
            };

            const rankingData = await client.graphql({
                query: listRankings,
                variables: variables
            });

            console.log(rankingData);

            setRankings(rankingData.data.listRankings.items);
        } catch (err) {
            console.error('Error fetching rankings:', err);
        }
    }

    return (
        <div>
            <h2>Player Rankings</h2>
            <ol>
                {rankings.map(ranking => (
                    <li key={ranking.id}>
                        {ranking.username} - Games Won: {ranking.gamesWon}, Squares Conquered: {ranking.squaresConquered}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Ranking;
