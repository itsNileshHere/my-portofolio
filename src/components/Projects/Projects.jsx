import React from 'react'
import './Projects.css'
import Cards from '../P_Cards/P_Cards';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from "swiper";
import 'swiper/css'
import "swiper/css/pagination";

const params = {
  pagination: {
    dynamicBullets: true,
  },
  modules: [Pagination],
  grabCursor: true,
  slidesPerView: 3,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    840: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 4,
    },
  }
}

const Projects = () => {
  return (
    <div className="projects" id='Projects'>
      <div className="p-head">
        <p>My Recent</p>
        <p style={{ color: "#F5C32C", marginTop: "0.5rem" }}>Projects</p>
      </div>

      <div className='cards'>
        <Swiper {...params}>
          <SwiperSlide>
            <Cards
              p_name={"Windows ISO Debloater"}
              p_details={"A script helps to create the Ultimate Windows ISO"}
              p_link={"https://github.com/itsNileshHere/Windows-Iso-Debloater"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Online Exam Management System"}
              p_details={"OEMS Using HTML, CSS, Javascript"}
              p_link={"https://github.com/itsNileshHere/Exam-Management-System"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Portfolio Project"}
              p_details={"My Portfolio written in ReactJS"}
              p_link={"https://github.com/itsNileshHere/my-portofolio"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Drug Discovery ML Model"}
              p_details={"Drug Discovery model targeting the SARS coronavirus"}
              p_link={"https://github.com/itsNileshHere/Drug-Discovery"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Video Merger"}
              p_details={"A simple tool to Merge Videos together"}
              p_link={"https://github.com/itsNileshHere/Video-Merger"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Cards
              p_name={"Icon Cache Rebuilder"}
              p_details={"A batch script to remove Windows Icon Cache"}
              p_link={"https://github.com/itsNileshHere/Icon-Cache-Rebuilder"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
