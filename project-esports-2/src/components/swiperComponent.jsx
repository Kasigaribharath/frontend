import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperComponent.css';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
export default function ScrollCards(props) {
  useEffect(()=>{

  })
  const[swiperData,setSwiperData]=useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tournaments/");
        setSwiperData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function handleJoinClick(e) {

    navigate(`/couponentry/${e.target.value}`)

  }

  function getClassByRegionId(e) {

    switch (e) {
      case 1: case 5: case 9: case 13: case 17: case 21: case 25:
        return "bg1";
      case 2: case 6: case 10: case 14: case 18: case 22: case 26:
        return "bg2";
      case 3: case 7: case 11: case 15: case 19: case 23: case 27:
        return "bg3";
      case 4: case 8: case 12: case 16: case 20: case 24: case 28:
        return "bg4";

      default:
        return "";
    }
  }



  return (
    <div className='fadecolor ps-3'>
      <div className='bgchange text-white fw-bolder  h2 text-center  '>{props.title}</div>
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

          swiperData.map(tournament =>
            <SwiperSlide className={`rounded-3 ${getClassByRegionId(tournament.id)} `} key={tournament.tournament_name}>
              <div className={`slidebody rounded-3 `}>
                <div className="cardShade rounded-3">
                  <p className='text-warning m-0 d-flex justify-content-between'>
                    <span>*trial version</span>
                    {/* setting live button  */}
                    <span className="bi-broadcast text-danger  px-1 rounded"></span>
                  </p>
                  <div className="row">
                    <div className="text-white fw-medium h5 m-0" style={{ "text-shadow": "0px 0px 10px black"}}>{tournament.tournament_name}.</div>
                  </div>
                  <p className='text-warning mt-5 fs-6 '>Join now and represent your State</p>
                  <div className='d-flex justify-content-between'>
                    <button className="slotsLeft fw-bold btn btn-warning bg-gradient btn-block">
                      Slots: {tournament.slots_total-tournament.slots_available}/{tournament.slots_total}
                    </button>
                    <button onClick={handleJoinClick} className={` btn btn-danger bg-gradient  btn-block  fw-bold  ${props.btndisabled}`} value={tournament.id}>Join Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        }
      </Swiper>
    </div>
  );
}
