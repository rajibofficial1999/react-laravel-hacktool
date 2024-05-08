import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = ({ auth }) => {

    const {data, setData, post, processing, errors} = useForm({
        name: ''
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        post(route('admin.accountTypes.store'))
    }

    return (
        <AuthenticatedLayout
            header='Create Account Types'
        >
            <Head title="Create Account Types" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <TextInput placeholder="Account type name" id="name" value={data.domain} onChange={e => setData('name', e.target.value)}/>
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
