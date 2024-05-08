import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = ({ auth, roles }) => {

    const {data, setData, post, processing, errors} = useForm({
        name: '',
        email: '',
        role: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        post(route('admin.users.store'))
    }

    return (
        <AuthenticatedLayout
            header='Create new user'
        >
            <Head title="Create new user" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="name">Name</InputLabel>
                                    <TextInput placeholder="Your Name" id="name" value={data.name} onChange={e => setData('name', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.name}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <TextInput type="email" placeholder="Your Email" className="py-4" id="email" value={data.email} onChange={e => setData('email', e.target.value)}/>
                                    <InputError className='mt-1'>{errors.email}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="role">Role</InputLabel>
                                    <SelectInput id="role" onChange={e => setData('role', e.target.value)}>
                                        <option value="">Select role</option>
                                        {
                                            roles.map(role => <option key={role.id} value={role.id}>{role.name}</option>)
                                        }
                                    </SelectInput>
                                    <InputError className='mt-1'>{errors.role}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                </div>
                                <div className="inline-block mt-2 w-1/2 pr-1">
                                    <TextInput type="password" placeholder="Password" id="password" value={data.password} onChange={e => setData('password', e.target.value)}/>
                                </div>
                                <div className="inline-block mt-2 -mx-1 pl-1 w-1/2">
                                    <TextInput type="password" placeholder="Confirm Password" id="cpassword" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}/>
                                </div>
                                <InputError className='mt-1'>{errors.password}</InputError>
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
