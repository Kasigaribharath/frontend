import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./websiteStats.css"

export default function WebsiteStats() {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        axios.get("/webstats.json")
             .then(response => setCardsData(response.data));
    }, []);

    return (
        <div className="webstatsCards  bg-secondary-subtle bg-transparent">
            <div className="containerCards">
                {cardsData.map((card, index) => (
                    <div className="mt-4 d-flex justify-content-center " key={index}>
                        <div className="card statsCard  bg-transparent ">
                            <div className='d-flex justify-content-center p-2'><img src={card.image} className="card-img" alt="Card" /></div>
                            <div className="card-body   text-center">
                                <h5 className="card-title text-light h3">{card.title}</h5>
                                <p className="card-text text-secondary">{card.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
