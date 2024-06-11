import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BackendPage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [getImg, setGetImg] = useState('')
    useEffect(() => {
        const fetchImage = async () => {
            try {

                const getTetx = await axios.get('https://api.telegram.org/bot6463712666:AAEfjU0QzsL6Vxm8K9kYAUpqL8vMHLt0tYI/getUpdates');
                // const getUrl = await axios.get('https://api.telegram.org/bot6463712666:AAEfjU0QzsL6Vxm8K9kYAUpqL8vMHLt0tYI/getFile?file_id=AgACAgIAAxkBAAMLZjUJylPKu9_WOLxlSFNn78IKBRgAAn_gMRuphqhJHmXaIFbuIXwBAAMCAANtAAM0BA');
                // const getCommand = await axios.get('https://api.telegram.org/bot6463712666:AAEfjU0QzsL6Vxm8K9kYAUpqL8vMHLt0tYI/getFile?file_id=AgACAgIAAxkBAAMLZjUJylPKu9_WOLxlSFNn78IKBRgAAn_gMRuphqhJHmXaIFbuIXwBAAMCAANtAAM0BA');
                // const getImgfromBot = await axios.get(`https://api.telegram.org/bot6463712666:AAEfjU0QzsL6Vxm8K9kYAUpqL8vMHLt0tYI/getFile?file_id=${getImg}`);
                // const file_path = getImgfromBot.data.result.file_path;
                // const url = `https://api.telegram.org/file/bot6463712666:AAEfjU0QzsL6Vxm8K9kYAUpqL8vMHLt0tYI/${file_path}`;
                // setImageUrl(url);

                getTetx.data.result.map(e => {
                    if (e.message.text === ('/newImg')) {
                        console.log(e);
                    }
                })
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };


        fetchImage();
    }, []);

    return (
        <div>
            <img src={imageUrl} alt="Telegram Bot Image" />
        </div>
    )
}

export default BackendPage