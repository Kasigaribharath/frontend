import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "../components/ongoingCards.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { upcommindata } from './swiperrData';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './swiperComponent.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function OngoingTournaments(props) {
    
    return (
        <div className='fadecolor ps-3'>
            <div className='bgchange text-white fw-bold pt-4 h2 text-center  '>{props.title}</div>
            <Swiper
                // slidesPerView={3}
                spaceBetween={30}
                // pagination={{
                //   clickable: true,

                // }}
                breakpoints={{
                    // for more than 1024px
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetweenSlides: 150
                    },
                    768: {
                        slidesPerView: 2.5,
                        spaceBetweenSlides: 200
                    },
                    350: {
                        slidesPerView: 1.2
                    }
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    upcommindata.map(game =>
                        <SwiperSlide className='rounded-3' key={game.tournamentid}>
                            <div className="slidebody ongoingBg rounded-3  p-2" >
                                <p className='text-warning m-0 d-flex justify-content-between'>Agent paid scrims<i className="text-white bg-danger px-2 rounded bi  bi-broadcast-pin"> Live</i></p>
                                <div className="row">
                                    {/* <div className="text-white col-3 h5 m-0">{game.tournamentid}.</div> */}
                                    <div className="text-white fw-bold  m-0">{game.tournamentName}</div>
                                </div>
                                <p className='text-warning mt-5 fs-6 '>{props.tournamenttype}</p>
                                <div className='d-flex justify-content-between'>
                                    <button className="slotsLeft fw-bold btn btn-warning bg-gradient btn-block">
                                        Slots Left: 0/12
                                    </button>
                                    <Link to={`/couponentry/${game.tournamentid}`} className={` btn btn-danger bg-gradient  btn-block  fw-bold  ${props.btndisabled}`} id={game.tournamentid}>Join Now</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
}
