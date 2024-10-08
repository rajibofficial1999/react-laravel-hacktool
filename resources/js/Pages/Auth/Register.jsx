import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        reference_id: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('users.register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name"/>

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        placeholder="Enter name"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError className="mt-2">{errors.name}</InputError>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email"/>

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        placeholder="Enter email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError className="mt-2">{errors.email}</InputError>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="reference_id" value="Reference ID"/>

                    <TextInput
                        id="reference_id"
                        type="text"
                        name="reference_id"
                        value={data.reference_id}
                        className="mt-1 block w-full"
                        autoComplete="reference_id"
                        placeholder="Reference ID"
                        onChange={(e) => setData('reference_id', e.target.value)}
                        required
                    />

                    <InputError className="mt-2">{errors.reference_id}</InputError>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password"/>

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        placeholder="Enter password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError className="mt-2">{errors.password}</InputError>
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password"/>

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        placeholder="Confirm password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError className="mt-2">{errors.password_confirmation}</InputError>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href={route('login')}
                        className="text-primary text-sm hover:text-gray-900 rounded-md focus:outline-none"
                    >
                        Already have an account?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
