import "./App.scss";
import React, { useState } from "react";
import * as Icon from "react-bootstrap-icons";

import { H1 } from "./components/H1";
import Card from "./components/Card/Card";
import { Btn } from "./components/Btn";

function App() {
    const data = [
        {
            id: 0,
            img: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
            title: <h1>witcher iii</h1>,
        },
        {
            id: 1,
            img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png",
            title: <h1>elden ring</h1>,
        },
        {
            id: 2,
            img: "https://blog.playstation.com/tachyon/2023/08/d0e9fe568fd2c021f5593b0225249b29a8d36c4d.jpg",
            title: <h1>lord of the falen</h1>,
        },
        {
            id: 3,
            img: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MortalKombat11.jpg",
            title: <h1>mortal kombat 11</h1>,
        },
        {
            id: 4,
            img: "https://cdn.akamai.steamstatic.com/steam/apps/1282100/capsule_616x353.jpg?t=1691690139",
            title: <h1>remnant ii</h1>,
        },
    ];
    const [currentSlide, setCurretnSlide] = useState(0);
    const [isImageView, setImageView] = useState(null);

    const handleImageView = (n) => {
        if (isImageView === n) {
            setImageView(null);
        } else {
            setImageView(n);
        }
    };

    const nextSlide = () => {
        setCurretnSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
    };

    const prevSLide = () => {
        setCurretnSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
    };

    return (
        <React.Fragment>
            <div className="container">
                <div className="container-head">
                    <H1 fontSize="1.5rem">most download</H1>
                    <div className="head-line"></div>
                </div>
                <div className="card-list">
                    {data.map((item) => (
                        <Card props={item} key={item.id} handleImageView={handleImageView} isImageView={isImageView} />
                    ))}
                </div>

                <div className="slider-button">
                    <Btn onClick={nextSlide}>
                        <Icon.ChevronCompactLeft />
                    </Btn>
                    <Btn onClick={prevSLide}>
                        <Icon.ChevronCompactRight />
                    </Btn>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
