import React from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Recommend from "../components/Recommend";
import { MainContainer, FeedSection } from '../page/style';

function App() {
    return (
        <React.Fragment>
            <NavBar/>
            <MainContainer>
                <FeedSection>
                    <Feed/>
                    <Feed/>
                </FeedSection>
                <Recommend/>
            </MainContainer>
        </React.Fragment>
    )
}

export default App;