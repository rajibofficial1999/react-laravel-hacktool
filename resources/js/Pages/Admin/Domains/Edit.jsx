import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Edit = ({ auth, domain }) => {

    const {data, setData, put, processing, errors} = useForm({
        name: domain.name,
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        put(route('admin.domains.update', domain.id))
    }

    return (
        <AuthenticatedLayout
            header='Edit Domain'
        >
            <Head title="Edit Domain" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="domain">Domain</InputLabel>
                                    <TextInput placeholder="example.com" id="link" value={data.name} onChange={e => setData('name', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.name}</InputError>
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
