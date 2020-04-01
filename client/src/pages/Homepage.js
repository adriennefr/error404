import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FitMoodji from '../components/Fitmoodji/Fitmoodji'
import HomepageButtons from '../components/HompageButtons/HomepageButtons'
import NavBar from '../components/NavBar/NavBar'

function Homepage() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <FitMoodji />
                <HomepageButtons />
                <NavBar />
            </Container>
        </React.Fragment>
    );
}
export default Homepage;