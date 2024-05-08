import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = ({ auth, types }) => {

    const {data, setData, post, processing, errors} = useForm({
        domain: '',
        endpoint: '',
        type: ''
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        post(route('admin.linkdomains.store'))
    }

    return (
        <AuthenticatedLayout
            header='Create Link Domain'
        >
            <Head title="Create Link Domain" />

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
                                    <InputLabel htmlFor="endpoint">End point</InputLabel>
                                    <TextInput placeholder="/login" id="endpoint" value={data.endpoint} onChange={e => setData('endpoint', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.endpoint}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Types</InputLabel>
                                    <SelectInput id="type" onChange={e => setData('type', e.target.value)}>
                                        <option value="">Select Type</option>
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

export default Create;
