import { ArrowDownTrayIcon } from "@heroicons/react/24/solid/index.js";
import axios from "axios";
import { saveAs } from 'file-saver';

const CardImageItem = ({image = null, image2 = null, children}) => {

    const downloadCard = async (card_image) => {
        let imageUrl = "../storage/" + card_image;
        let fileName = `${Math.floor(Math.random() * 100000000000000)}.jpg`;

        try {
            const response = await axios.get(imageUrl, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: response.data.type });
            saveAs(blob, fileName);
        } catch (error) {
            console.error('Error downloading the image', error);
        }
    };

    return (
        <>
            <div
                className='relative group after:after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:z-10 after:left-0 after:top-0 after:rounded-md after:bg-opacity-0 hover:after:bg-opacity-50 duration-150'>

                {children}

                <button type='button' onClick={() => downloadCard(image)}
                        className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-150 p-2 bg-primary rounded-full text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'
                        title='Download'><ArrowDownTrayIcon className='w-5 h-5'/></button>

            </div>

            {
                image2 ? <div
                    className='relative group after:after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:z-10 after:left-0 after:top-0 after:rounded-md after:bg-opacity-0 hover:after:bg-opacity-50 duration-150'>
                    <img className='h-auto max-w-full rounded-lg group' src={'../storage/' + image2}
                         alt="card-image-2"/>
                    <button type='button' onClick={() => downloadCard(image2)}
                            className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-150 p-2 bg-primary rounded-full text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20'
                            title='Download'><ArrowDownTrayIcon className='w-5 h-5'/></button>

                </div> : ''
            }
        </>
    )
}

export default CardImageItem;
