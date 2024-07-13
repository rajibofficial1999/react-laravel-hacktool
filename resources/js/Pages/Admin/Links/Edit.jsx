import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ auth, types, link }) => {

    const {data, setData, put, processing, errors} = useForm({
        link: link.link,
        type: link.type
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        put(route('admin.links.update', link.id))
    }

    return (
        <AuthenticatedLayout
            header='Edit Link'
        >
            <Head title="Edit Link Domain" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="link">Link</InputLabel>
                                    <TextInput placeholder="example.com" id="link" value={data.link} onChange={e => setData('link', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.link}</InputError>
                                    {console.log(link.link)}
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Type</InputLabel>
                                    <SelectInput id="type" onChange={e => setData('type', e.target.value)} defaultValue={link.type}>
                                        {
                                            types.map((type) => <option key={type.id} value={type.id}>{type.name}</option>)
                                        }
                                    </SelectInput>
                                    <InputError className='mt-1'>{errors.type}</InputError>
                                </div>
                                <div className="mt-6">
                                    <PrimaryButton disabled={processing} type="submit">Submit</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </AuthenticatedLayout>
    );
}

export default Edit;
