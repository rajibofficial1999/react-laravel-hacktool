import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import SelectInput from '@/Components/SelectInput';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

const Create = ({ auth, types, domains, link }) => {

    const {data, setData, put, processing, errors} = useForm({
        endpoint: link.endpoint,
        type: link.type,
        domain: link.domain_id,
        is_query_link: 'no',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault()
        put(route('admin.links.update', link.id))
    }

    return (
        <AuthenticatedLayout
            header='Edit Link'
        >
            <Head title="Edit Link" />

            <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-1/2 mt-6 pl-0 lg:pl-2">
                        <div className="leading-loose">
                            <form className="p-10 bg-white rounded shadow-xl" onSubmit={handleSubmit}>
                                <div className="">
                                    <InputLabel htmlFor="domain">Endpoint</InputLabel>
                                    <TextInput placeholder="/login" id="endpoint" value={data.endpoint} onChange={e => setData('endpoint', e.target.value)}/>

                                    <InputError className='mt-1'>{errors.endpoint}</InputError>
                                </div>
                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Domains</InputLabel>
                                    <SelectInput id="domain" onChange={e => setData('domain', e.target.value)}>
                                        <option value="">Select Domain</option>
                                        {
                                            domains.map((domain) => domain.id == link.domain_id ? <option selected key={domain.id} value={domain.id}>{domain.name}</option> : <option key={domain.id} value={domain.id}>{domain.name}</option>)
                                        }
                                    </SelectInput>
                                    <InputError className='mt-1'>{errors.domain}</InputError>
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Account Types</InputLabel>
                                    <SelectInput id="type" onChange={e => setData('type', e.target.value)}>
                                        <option value="">Select Type</option>
                                        {
                                            types.map((type) => link.type == type.id ? <option selected key={type.id} value={type.id}>{type.name}</option> : <option key={type.id} value={type.id}>{type.name}</option>)
                                        }
                                    </SelectInput>
                                    <InputError className='mt-1'>{errors.type}</InputError>
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="type">Is Query Link</InputLabel>
                                    <SelectInput id="type" onChange={e => setData('is_query_link', e.target.value)}>
                                        {
                                            link.is_query_link == 0 ? <option selected value="no">No</option> : <option value="no">No</option>
                                        }
                                        {
                                            link.is_query_link == 1 ? <option selected value="yes">Yes</option> : <option value="yes">Yes</option>
                                        }

                                    </SelectInput>
                                    <InputError className='mt-1'>{errors.is_query_link}</InputError>
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
