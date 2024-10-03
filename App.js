import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApplicantTable from './components/ApplicantTable'; // Assuming ApplicantTable is in 'components'
import ProfilePage from './components/ProfilePage'; // This is your profile component

function App() {
    return (
        <Router>
            <Routes>
                {/* Default route for the Applicant Table */}
                <Route path="/" element={<ApplicantTable />} />

                {/* Route for the Profile Page */}
                <Route path="/profile/:type/:identifier" element={<ProfilePage />} />
            </Routes>
        </Router>
    );
}

export default App;
