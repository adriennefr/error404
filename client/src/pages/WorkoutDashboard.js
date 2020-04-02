import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import WorkoutButtons from '../components/WorkoutButtons/WorkoutButtons'

function WorkoutDashboard() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <WorkoutButtons />
            </Container>
        </React.Fragment>
    );
}
export default WorkoutDashboard;