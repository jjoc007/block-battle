import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listRankings } from '../graphql/queries';

const Ranking = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        fetchRankings();
    }, []);

    async function fetchRankings() {
        try {
            const rankingData = await API.graphql(graphqlOperation(listRankings, { limit: 10, sort: { field: "rank", direction: "asc" } }));
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
