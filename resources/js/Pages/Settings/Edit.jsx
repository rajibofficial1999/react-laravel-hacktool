import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import axios from 'axios';
import { useState } from 'react';

export default function Edit({ userStatusControl }) {

    const { user } = usePage().props.auth
    const [status, setStatus] = useState((userStatusControl && userStatusControl.is_auto_approved == 1) ? true : false)

    const userStatusData = {
        status: false,
        user : user?.id
    }

    const submitStatus = async () => {
        userStatusData.status = !status

        const {data} = await axios.post('/api/v1/settings', userStatusData)

        setStatus(true)
        setStatus(data.is_auto_approved == 1 ? true : false)
    }

    return (
        <AuthenticatedLayout
            header="Settings"
        >
            <Head title="Settings" />

            <div className="py-4">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <section className=''>
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">User Default Status</h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Set users default status automatically by clicking the switch.
                            </p>
                        </header>

                        <form className="mt-6 space-y-6">
                            <div>
                                <label className="inline-flex items-center cursor-pointer">
                                    <input checked={status} type="checkbox" onChange={submitStatus} className="sr-only peer"/>

                                    <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600">
                                    </div>
                                    <span className="ms-3 text-sm font-medium text-gray-900">Auto Approve</span>
                                </label>

                            </div>
                        </form>
                    </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
