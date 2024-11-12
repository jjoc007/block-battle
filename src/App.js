import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import Profile from './components/Profile';
import Ranking from './components/Ranking';

Amplify.configure(awsExports);

function App({ signOut, user }) {
    return (
        <div>
            <h1>Welcome to My Game, {user.username}!</h1>
            <Profile user={user} />
            <Ranking />
            <button onClick={signOut}>Sign out</button>
        </div>
    );
}

export default withAuthenticator(App);
