import { React, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { project } from '../data/data';
import download_icon from '../assets/download-icon.webp'
import starWhite from '../assets/star.svg'
import starFill from '../assets/starblack.svg'
import shape from '../assets/shape.svg'
import MyCreation from '../components/MyCreation';
import facebookIcon from '../assets/facebook-icon.webp'
import telegram from '../assets/telegram.webp'
import instalog from '../assets/instalog.png'
import axios from 'axios';
const Detail = ({ search }) => {
  const location = useLocation()
  const [data, setData] = useState([])
  const fatchData = async () => {
    const data = axios.get("http://localhost:3000/api/travel").then(e => {
      setData([...e.data.travel])
    })
  }

  useEffect(() => {
    fatchData()
  }, []);

  const item = location.pathname.split("/art/").join("")
  return (
    <div className="bg-headerColor py-20">
      <div className='containerb mb-20'>
        <Link to='/' className='flex items-center gap-5 mb-20'>
          <img src={shape} className='w-7 h-7 bg-[#E6E8EC] p-2 rounded-full' alt="back to home icon" />
          <h1 className='text-3xl myFont font-semibold max-md:text-xl'>Art Detail</h1>
        </Link>
        {data.map((e) => {
          if (e._id === item) {
            return (
              <div key={e._id} className="bg-gray-100 flex items-center justify-center max-md:block p-6 rounded-xl">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full flex max-md:flex-col">
                  <img className="w-1/2 h-96 object-cover max-md:w-full max-md:h-60" src={e.img} alt={e.title} />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{e.title}</h2>
                    <p className="text-gray-700 mb-4">{e.desc}</p>
                    <div className="flex flex-col justify-between gap-5 mb-4 max-md:gap-3 max-md:mb-2">
                      <span className="text-gray-600">Created Date: {e.creted_data}</span>
                      <span className="text-yellow-500">Rating: {e.rating} / 5</span>
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )
          }
        })}
        {/* <h1>{find}</h1> */}
      </div>
      <MyCreation search={search} />
    </div>
  )
}

export default Detail