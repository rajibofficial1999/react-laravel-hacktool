import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = () => {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        post(route('admin.domains.store'))
    }

    return (
        <AuthenticatedLayout
            header='Create Link'
        >
            <Head title="Create Link" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="domain">Name</InputLabel>
                                    <TextInput placeholder="example.com" id="domain" value={data.domain} onChange={e => setData('name', e.target.value)}/>
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

export default Create;
