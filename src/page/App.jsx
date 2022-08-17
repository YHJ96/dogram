import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Recommend from "../components/Recommend";
import Loding from "../components/Loding";
import axios from "axios";
import { MainContainer, FeedSection } from '../page/style';
import { randomRange } from '../utils/random';

function App() {
    const URL = process.env.REACT_APP_URL;
    const [feedData, setFeedData] = useState([]);
    const [recommendData, setRecommendData] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            const feedResult = [];
            const recommendResult = [];
            const response = await (await axios.get(URL)).data;
            for (let i = 0; i < response.length; i += 2) {
                feedResult.push({
                    id: (response[i].id).toLowerCase(),
                    imgURL: response[i].url,
                    likeAvatarURL: response[i + 1].url,
                    likeId: (response[i + 1].id).toLowerCase(),
                    likeLength: randomRange(10, 150),
                });
            }
            const avatar = await (await axios.get(URL)).data;
            for (let i = 0; i < avatar.length; i++) {
                if (i < 5) {
                    feedResult[i]["avatarURL"] = avatar[i].url;
                    recommendResult.push({ id: (avatar[i].id).toLowerCase() });
                } else {
                    recommendResult[i - 5]["avatarURL"] = avatar[i].url;
                    recommendResult[i - 5]["followId"] = (avatar[i].id).toLowerCase();
                }
            };
            setRecommendData(recommendResult);
            setFeedData(feedResult);
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
                id={item?.id}
                imgURL={item?.imgURL}
                avatarURL={item?.avatarURL}
                likeAvatarURL={item?.likeAvatarURL}
                likeId={item?.likeId}
                likeLength={item?.likeLength}
            />
        });
    };

    return (
        (feedData.length !== 0)
        ? <React.Fragment>
            <NavBar feedData={feedData} setFeedData={setFeedData} />
            <MainContainer>
                <FeedSection>
                    {createFeed()}
                </FeedSection>
                <Recommend recommendData={recommendData} />
            </MainContainer>
        </React.Fragment> 
        : <Loding />
    )
}

export default App;