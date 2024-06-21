import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom'
import download_icon from '../assets/download-icon.webp'
import { project } from '../data/data';
import starWhite from '../assets/star.svg'
import starFill from '../assets/starblack.svg'
import axios from 'axios';
const MyCreation = () => {


    const [data, setData] = useState([])
    const fatchData = async () => {
        const data = axios.get("https://husan-art-mxpi.vercel.app/api/travel").then(e => {
<<<<<<< HEAD
            console.log(e);
=======
            setData([...e.data.travel])
>>>>>>> f17acb5e1137748a33b8458f4845dd5d99561336
        })
    }

    useEffect(() => {
        fatchData()
    }, []);


    const [swiperRes, setSwiperRes] = useState(4)


    return (
        <div className="bg-[#F1F1F1] py-20">
            <div className="max-w-screen-xl mx-auto">
                <h2 className='text-4xl myFont before:content-[""] before:w-1 before:h-10 before:bg-darkenColoe text-darkenColoe flex items-center gap-5 mb-20'>My Some Creations</h2>

                <Swiper slidesPerView={4} loop={true} className='w-full setClassic flex max-lg:hidden' spaceBetween={20}>
                    {data.map(elem => {
                        return (
                            <SwiperSlide className='relative w-full h-full bg-white rounded-xl transition-all overflow-hidden p-4 flex flex-col items-start justify-between gap-3' key={elem._id}>
                                <Link to={`/art/${elem._id}`} className='w-full'>
                                    <img src={elem.img} className='w-full rounded-xl mb-2 h-60 object-cover' alt={elem.title + " img"} />
                                </Link>
                                <span className='bg-darkenColoe/80 right-5 backdrop-blur-sm top-5 text-white myFont absolute rounded-md px-4 py-2 border-2 border-[#1C1D2008] text-xs'>{elem.creted_data}</span>
                                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                                    <div className="flex w-full items-center justify-between">
                                        <h2 className='myFont text-xl font-bold first-letter:uppercase w-1/2 truncate'>{elem.title}</h2>
                                        <div className="flex items-center justify-between gap-2">
                                            {elem.rating + 1 <= 1 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 2 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 3 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 4 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 5 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                        </div>
                                    </div>
                                    <a href={elem.img} target='_blank' className='w-full py-2 bg-darkenColoe flex items-center justify-center rounded-xl text-xl myFont text-white gap-x-5' download={true}>download <img src={download_icon} className='w-10 brightness-200' alt='download icon' /></a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <Swiper slidesPerView={3} loop={true} className='w-full setClassic max-lg:flex hidden max-md:hidden' spaceBetween={20}>
                    {data.map(elem => {
                        return (
                            <SwiperSlide className='relative w-full h-full bg-white rounded-xl transition-all overflow-hidden p-4 flex flex-col items-start justify-between gap-3' key={elem._id}>
                                <Link to={`/art/${elem._id}`} className='w-full'>
                                    <img src={elem.img} className='w-full rounded-xl mb-2 h-60 object-cover' alt={elem.title + " img"} />
                                </Link>
                                <span className='bg-darkenColoe/80 right-5 backdrop-blur-sm top-5 text-white myFont absolute rounded-md px-4 py-2 border-2 border-[#1C1D2008] text-xs'>{elem.creted_data}</span>
                                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                                    <div className="flex w-full items-center justify-between">
                                        <h2 className='myFont text-xl font-bold first-letter:uppercase w-1/2 truncate'>{elem.title}</h2>
                                        <div className="flex items-center justify-between gap-2">
                                            {elem.rating + 1 <= 1 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 2 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 3 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 4 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 5 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                        </div>
                                    </div>
                                    <a href={elem.img} target='_blank' className='w-full py-2 bg-darkenColoe flex items-center justify-center rounded-xl text-xl myFont text-white gap-x-5' download={true}>download <img src={download_icon} className='w-10 brightness-200' alt='download icon' /></a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <Swiper slidesPerView={2} loop={true} className='w-full setClassic max-md:flex hidden max-sm:hidden' spaceBetween={20}>
                    {data.map(elem => {
                        return (
                            <SwiperSlide className='relative w-full h-full bg-white rounded-xl transition-all overflow-hidden p-4 flex flex-col items-start justify-between gap-3' key={elem._id}>
                                <Link to={`/art/${elem._id}`} className='w-full'>
                                    <img src={elem.img} className='w-full rounded-xl mb-2 h-60 object-cover' alt={elem.title + " img"} />
                                </Link>
                                <span className='bg-darkenColoe/80 right-5 backdrop-blur-sm top-5 text-white myFont absolute rounded-md px-4 py-2 border-2 border-[#1C1D2008] text-xs'>{elem.creted_data}</span>
                                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                                    <div className="flex w-full items-center justify-between">
                                        <h2 className='myFont text-xl font-bold first-letter:uppercase w-1/2 truncate'>{elem.title}</h2>
                                        <div className="flex items-center justify-between gap-2">
                                            {elem.rating + 1 <= 1 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 2 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 3 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 4 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 5 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                        </div>
                                    </div>
                                    <a href={elem.img} target='_blank' className='w-full py-2 bg-darkenColoe flex items-center justify-center rounded-xl text-xl myFont text-white gap-x-5' download={true}>download <img src={download_icon} className='w-10 brightness-200' alt='download icon' /></a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

                <Swiper slidesPerView={1} loop={true} className='w-full setClassic max-sm:flex hidden' spaceBetween={20}>
                    {data.map(elem => {
                        return (
                            <SwiperSlide className='relative w-full h-full bg-white rounded-xl transition-all overflow-hidden p-4 flex flex-col items-start justify-between gap-3' key={elem._id}>
                                <Link to={`/art/${elem._id}`} className='w-full'>
                                    <img src={elem.img} className='w-full rounded-xl mb-2 h-60 object-cover' alt={elem.title + " img"} />
                                </Link>
                                <span className='bg-darkenColoe/80 right-5 backdrop-blur-sm top-5 text-white myFont absolute rounded-md px-4 py-2 border-2 border-[#1C1D2008] text-xs'>{elem.creted_data}</span>
                                <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                                    <div className="flex w-full items-center justify-between">
                                        <h2 className='myFont text-xl font-bold first-letter:uppercase w-1/2 truncate'>{elem.title}</h2>
                                        <div className="flex items-center justify-between gap-2">
                                            {elem.rating + 1 <= 1 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 2 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 3 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 4 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            {elem.rating + 1 <= 5 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                        </div>
                                    </div>
                                    <a href={elem.img} target='_blank' className='w-full py-2 bg-darkenColoe flex items-center justify-center rounded-xl text-xl myFont text-white gap-x-5' download={true}>download <img src={download_icon} className='w-10 brightness-200' alt='download icon' /></a>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>


            </div>
        </div>
    )
}

export default MyCreation
