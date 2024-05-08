import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ auth, types, linkDomain }) => {

    const {data, setData, put, processing, errors} = useForm({
        domain: linkDomain.domain,
        endpoint: linkDomain.endpoint,
        type: linkDomain.type
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        put(route('admin.linkdomains.update', linkDomain.id))
    }

    return (
        <AuthenticatedLayout
            header='Edit Link Domain'
        >
            <Head title="Edit Link Domain" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="domain">Domain</InputLabel>
                                    <TextInput placeholder="www.example.com" id="domain" value={data.domain} onChange={e => setData('domain', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.domain}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="endpoint">Endpoint</InputLabel>
                                    <TextInput placeholder="/login" className="py-4" id="endpoint" value={data.endpoint} onChange={e => setData('endpoint', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.endpoint}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Type</InputLabel>
                                    <SelectInput id="type" onChange={e => setData('type', e.target.value)} defaultValue={linkDomain.type}>
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
