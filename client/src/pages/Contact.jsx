import React, { useState } from 'react'
import { project } from '../data/data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Contact = () => {

    const [swiperRes, setSwiperRes] = useState(4)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastNama, setLastName] = useState("");
    const [quession, setQuession] = useState("");
    const telegram_bot_id = "6976819880:AAGXsLTV0BK3-XierbRim1KPVGeYTzE3Ag0";
    const chat_id = "6076096557";

    const sendMessageToTelegram = () => {
        if (name.trim() === "" || email.trim() === "" || lastNama.trim() === "") {
            alert("insputs is not")
        } else {
            const telegram_bot_id = "6976819880:AAGXsLTV0BK3-XierbRim1KPVGeYTzE3Ag0";
            axios.post(`https://api.telegram.org/bot/6976819880:AAGXsLTV0BK3-XierbRim1KPVGeYTzE3Ag0/sendMessage`, {
                chat_id,
                text: `https://boburov-shukurillo-porfolio.netlify.app a new person has arrived in your portfolio:\n\n👩‍💻 User Name : ${name}\n\n 📋 Last Name : ${lastNama}\n\n 📧 Email : ${email}\n\n  User Request📈${quession}`,
            });
            setName("")
            setEmail("")
            setLastName("")
            setQuession("")
        }
    }


    return (
        <div className="containerb py-20">
            <h2 className='text-4xl myFont before:content-[""] before:w-1 before:h-10 before:bg-darkenColoe text-darkenColoe flex items-center gap-5 mb-20 '>Connect With Painter</h2>
            <div className=" flex items-center justify-between gap-5">
                <form onSubmit={sendMessageToTelegram} className="flex items-center justify-between flex-col w-1/2 gap-2 max-md:w-full">
                    <div className="w-full flex items-center justify-between gap-2 max-md:flex-col">
                        <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className='border-2 border-darkenColoe/50 w-full px-10 py-5 bg-headerColor rounded-xl text-md myFont outline-darkenColoe text-darkenColoe font-light' placeholder='Name*' name="" id="" />
                        <input required type="text" value={lastNama} onChange={(e) => setLastName(e.target.value)} className='border-2 border-darkenColoe/50 w-full px-10 py-5 bg-headerColor rounded-xl text-md myFont outline-darkenColoe text-darkenColoe font-light' placeholder='Last Name*' name="" id="" />
                    </div>
                    <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='border-2 border-darkenColoe/50 w-full px-10 py-5 bg-headerColor rounded-xl text-md myFont outline-darkenColoe text-darkenColoe font-light' placeholder='Email*' name="" id="" />
                    <textarea value={quession} onChange={(e) => setQuession(e.target.value)} name="enter your quession" placeholder='Enter Your Quession*' className='resize-none w-full bg-headerColor p-10 rounded-xl h-60 border-2 border-darkenColoe/50'></textarea>
                    <button type='submit' className='text-md w-full py-4 bg-darkenColoe rounded-xl  text-white myFont'>Submit</button>
                </form>
                <Swiper pagination={true} autoplay={true} navigation={true} modules={[Pagination, Navigation, Autoplay]} slidesPerView={1} spaceBetween={100} className='w-1/2 setClassic flex overflow-scroll max-md:hidden'>
                    {project.map((elem, index) => {
                        return (
                            <SwiperSlide key={elem.id} className="w-full h-full relative p-5 pb-24">
                                <Link to={`art/${elem.id}`}>
                                    <img src={elem.imgUrl} className='rounded-xl shadow-darkenColoe/30 shadow-xl w-full h-96 object-cover' alt={elem.art_Name + " img"} />
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Contact