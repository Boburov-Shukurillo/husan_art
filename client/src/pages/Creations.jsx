import React, { useEffect, useState } from 'react'
import { project } from '../data/data'
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom'
import starWhite from '../assets/star.svg'
import starFill from '../assets/starblack.svg'
import download_icon from '../assets/download-icon.webp'
import MyCreation from '../components/MyCreation'
import axios from 'axios'
const Creations = ({ search }) => {

    const [data, setData] = useState([])
    const fatchData = async () => {
        const data = axios.get("http://localhost:3000/api/travel").then(e => {
            setData([...e.data.travel])
        })
    }

    useEffect(() => {
        fatchData()
    }, []);


    return (
        <>
            <div className="containerb py-20 flex flex-col">
                <h2 className='text-4xl myFont before:content-[""] before:w-1 before:h-10 before:bg-darkenColoe text-darkenColoe flex items-center gap-5 mb-20'>Creations</h2>
                <ul className='grid grid-cols-4 gap-10 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:w-2/3 max-450:w-full self-center'>
                    {data.map((elem) => {
                        if (elem.title.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <li key={elem._id} className="flex flex-col items-center justify-between relative p-2 bg-middleGray rounded-xl">
                                    <Link to={`/art/${elem._id}`} className='w-full'>
                                        <img src={elem.img} className='w-full rounded-xl mb-2 h-60 object-cover' alt={elem.title + ' img'} />
                                    </Link>
                                    <span className='bg-darkenColoe/80 right-5 backdrop-blur-sm top-5 text-white myFont absolute rounded-md px-4 py-2 border-2 border-[#1C1D2008] text-xs'>{elem.creted_data}</span>
                                    <div className="w-full h-full flex flex-col items-start justify-between gap-5">
                                        <div className="flex w-full items-center justify-between">
                                            <h2 className='myFont text-xl font-bold first-letter:uppercase w-1/2 truncate max-lg:w-1/3'>{elem.title}</h2>
                                            <div className="flex items-center justify-between gap-2">
                                                {elem.rating + 1 <= 1 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                                {elem.rating + 1 <= 2 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                                {elem.rating + 1 <= 3 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                                {elem.rating + 1 <= 4 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                                {elem.rating + 1 <= 5 ? <img src={starWhite} className='w-5' alt={elem.title + ' img'} /> : <img src={starFill} className='w-5' alt="fill white star" />}
                                            </div>
                                        </div>
                                        <a href={elem.img} target='_blank' className='w-full py-2 bg-darkenColoe flex items-center justify-center rounded-xl text-xl myFont text-white gap-x-5' download={true}>download <img src={download_icon} className='w-10 brightness-200' alt="download icon" /></a>
                                    </div>
                                </li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default Creations