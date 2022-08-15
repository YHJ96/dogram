import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Recommend from "../components/Recommend";
import { MainContainer, FeedSection } from '../page/style';

function App() {
    const [feedData, setFeedData] = useState([]);

    const createFeed = () => {
        return feedData.map((item, index) => {
            return <Feed 
              key={index}
              idx={index} 
              feedData={feedData} 
              setFeedData={setFeedData} 
              FeedImgSrc={item} 
            />
        });
    };

    return (
        <React.Fragment>
            <NavBar feedData={feedData} setFeedData={setFeedData} />
            <MainContainer>
                <FeedSection>
                    {createFeed()}
                </FeedSection>
                <Recommend />
            </MainContainer>
        </React.Fragment>
    )
}

export default App;