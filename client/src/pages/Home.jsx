import React, { useState } from 'react'
import arrow from '../assets/arrow.svg'
import item from '../assets/item.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { homeSlide, imgurl, project, scrollFromTo } from '../data/data';
import Aos from 'aos';
import logo from '../assets/logo.png'
import 'aos/dist/aos.css'
import MyCreation from '../components/MyCreation';
import instaLogo from '../assets/instalog.png'
import telegramLogo from '../assets/telegram.png'
import linkedin from '../assets/linkedin.png'
import Contact from './Contact';
import { accaoun } from '../appwrite/config';
const Home = ({ search }) => {

    Aos.init();
    
    return (
        <>
            {search.trim() === "" && <div className='containerb'>
                <div className="w-full flex items-center justify-between py-20">
                    <div className="w-1/2 flex flex-col items-start justify-between max-lg:w-full max-sm:items-center">
                        <h1 className='text-7xl font-bold borderText text-transparent secondFont tracking-wide mb-5 max-sm:text-center max-md:text-4xl'>You Can <br /> Show  My Arts</h1>
                        <p className='text-lg myFont text-textGray mb-10 w-2/3 max-sm:text-center max-md:w-full'>You can view the paintings on our site and contact the artist to buy the paintings</p>
                        <div className="flex items-center justify-between gap-5 max-sm:flex-col max-sm:w-full">
                            <button onClick={() => scrollFromTo(1500)} className='px-5 py-3 border-2 border-darkenColoe rounded-xl text-base myFont font-semibold transition-all active:bg-transparent active:text-darkenColoe bg-darkenColoe text-white max-sm:w-full text-center'>Painter About</button>
                            <Link onClick={() => scrollFromTo(0)} to='/creations' className='px-5 py-3 border-2 border-darkenColoe rounded-xl text-base myFont font-semibold transition-all active:bg-darkenColoe active:text-white max-sm:w-full text-center'>Show Arts</Link>
                        </div>
                    </div>

                    <img src={item} className='absolute w-40 top-40 right-32 max-sm:hidden' alt="item png" />

                    <Swiper autoplay={true} pagination={true} navigation={true} modules={[Pagination, Navigation, Autoplay]} slidesPerView={1} spaceBetween={100} className='w-1/2 setClassic overflow-scroll max-lg:hidden flex'>
                        {homeSlide.map((elem) => {
                            return (
                                <SwiperSlide key={elem.id} className="w-full h-full grid grid-cols-2 relative p-5">
                                    <img src={arrow} className='absolute right-1/3' alt="just arrow" />
                                    <img src={elem.img} className='rounded-xl shadow-darkenColoe/30 shadow-xl w-60 h-60 object-cover' alt='Pinter img' />
                                    <img src={elem.img_2} className='rounded-xl shadow-xl w-60 h-60 mt-40 object-cover blur-sm' alt='Pinter img' />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>}


            <MyCreation search={search} />

            {search.trim() === "" && <div className="containerb py-10 flex flex-col items-start justify-between max-sm:py-10">
                <h2 className='text-4xl myFont before:content-[""] before:w-1 before:h-10 before:bg-darkenColoe text-darkenColoe flex items-center gap-5 mb-20 '>About</h2>
                <div className="w-full h-[500px] flex items-center justify-between gap-10 max-md:flex-col max-md:h-full">
                    <img src={project[0].imgUrl} className='w-1/2 h-full rounded-3xl object-cover max-md:w-full max-md:hidden' alt="Just Painter Img" />
                    <div className="w-1/2 flex flex-col items-center gap-5 max-md:w-full">
                        <img src={logo} className='w-28 h-12' alt="husan logo" />
                        <p className='w-10/12 text-base myFont text-center max-sm:text-sm max-sm:w-full max-sm:text-justify'>Akbarov Husanboy (Husan Art) was born in Andijan in 1999.</p>
                        <p className='w-10/12 text-base myFont text-center max-sm:text-sm max-sm:w-full max-sm:text-justify'>About 100 articles (Germany, USA, Russia, Canada, Korea, Italy, Netherlands) have been published in the field of geography.</p>
                        <p className='w-10/12 text-base myFont text-center max-sm:text-sm max-sm:w-full max-sm:text-justify'>There was an international art exhibition in Andijan and Almaty. In 2022, he was awarded the medal of ``Services in the field of education'' by the CIS organization, and in 2024, the medal of ``Friendship of the People'' of the Republic of Kazakhstan.</p>
                        <div className="w-full flex items-center justify-center gap-10 max-sm:gap-5 max-sm:flex-col">
                            <button onClick={() => scrollFromTo(2500)} className='w-1/3 py-4 bg-darkenColoe rounded-xl myFont text-sm text-white max-sm:w-full max-sm:text-xs'>Connect With Painter</button>
                            <Link to='/creations' onClick={() => scrollFromTo(0)} className='w-1/3 py-4 text-center bg-transparent border-2 border-darkenColoe rounded-xl myFont text-sm text-darkenColoe font-bold max-sm:w-full max-sm:text-xs'>Show Some Atrs</Link>
                        </div>
                    </div>
                </div>
            </div>}

            <Contact />
        </>
    )
}

export default Home