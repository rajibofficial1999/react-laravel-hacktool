import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import CardImageItem from "@/Components/CardImageItem.jsx";

const Photos = ({ photos }) => {

    return (
        <AuthenticatedLayout
            header='Photos'
        >
            <Head title="Photos"/>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {
                    photos.data.map(photo => (
                        <CardImageItem key={photo.id} image={photo?.card_image1} image2={photo?.card_image2}>
                            <img className="h-auto max-w-full rounded-lg group"
                                 src={'../storage/' + photo?.card_image1} alt=""/>
                        </CardImageItem>
                    ))
                }
            </div>

            {photos.total > 10 && <Pagination items={photos}/>}

        </AuthenticatedLayout>
    );
}

export default Photos;
