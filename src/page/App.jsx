import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Recommend from "../components/Recommend";
import axios from "axios";
import { MainContainer, FeedSection } from '../page/style';

const likeLength = [11, 3, 29, 67, 153];

function App() {
    const URL = process.env.REACT_APP_URL;
    const [feedData, setFeedData] = useState([]);
    
    useEffect(() => {
        const getdata = async () => {
            const result = [];
            const response = await (await axios.get(URL)).data;
            for(let i = 0; i < response.length; i += 2) {
                result.push({ 
                    id: (response[i].id).toLowerCase(), 
                    imgURL: response[i].url, 
                    avatarURL: response[i+1].url,
                    likeId: response[i+1].id,
                    likeLength: likeLength[i/2],
                });
            }
            console.log(result);
            setFeedData(result);
        };
        getdata();
    }, [URL]);

    const createFeed = () => {
        return feedData.map((item, index) => {
            return <Feed
                key={index}
                idx={index}
                feedData={feedData}
                setFeedData={setFeedData}
                id={item.id}
                imgURL={item.imgURL}
                avatarURL={item.avatarURL}
                likeId={item.id}
                likeLength={item.likeLength}
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