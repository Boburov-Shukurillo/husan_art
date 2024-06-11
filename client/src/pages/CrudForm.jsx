import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CrudForm = () => {
    
    const [inputName, setInputName] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputImage, setInputImage] = useState('')
    const [createdDate, setCreatedDate] = useState('')
    const [rating, setRating] = useState(1)
    
    const hadleSubmit = async (e) => {
        e.preventDefault()

        setInputName("")
        setRating(1)
        setInputImage("")
        setCreatedDate("")
        setInputDesc("")

        try {
            const response = await axios.post("http://localhost:3000/api/travel/add", {
                title: inputName,
                img: inputImage,
                desc: inputDesc,
                rating: rating,
                creted_data: createdDate
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='containerb flex justify-center'>
            <form onSubmit={hadleSubmit} action="" className='flex flex-col items-center gap-4 w-1/2'>
                <input value={inputName} onChange={(e) => setInputName(e.target.value)} className='w-full px-5 bg-gray-200 py-4' type="text" placeholder='name' name="" id="" />
                <input value={inputDesc} onChange={(e) => setInputDesc(e.target.value)} className='w-full px-5 bg-gray-200 py-4' type="text" placeholder='description' name="" id="" />
                <input value={inputImage} onChange={(e) => setInputImage(e.target.value)} className='w-full px-5 bg-gray-200 py-4' type="text" placeholder='image' name="" id="" />
                <input value={createdDate} onChange={(e) => setCreatedDate(e.target.value)} className='w-full px-5 bg-gray-200 py-4' type="text" placeholder='created data' name="" id="" />
                <input value={rating} onChange={(e) => setRating(e.target.value)} className='w-full px-5 bg-gray-200 py-4' type="number" placeholder='rating' name="" id="" />
                <button className='w-full bg-black py-4 text-white' type='submit'>add </button>
            </form>
        </div>
    )
}

export default CrudForm