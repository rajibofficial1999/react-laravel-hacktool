import DropDownMenu from '@/Components/DropDownMenu';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import SuccessAlert from '@/Components/SuccessAlert';

const Links = ({ auth, domains }) => {

    const {successMessage} = usePage().props.meta

    const headItems = [
        'Id',
        'Name',
        'Action',
    ];

    return (
        <AuthenticatedLayout
            header='Domains'
            linkItem={
                <Link className='bg-primary rounded-md text-white p-2' href={route('admin.domains.create')}>Create Domain</Link>
            }
        >
            <Head title="Domains" />

            <div className="w-full mt-6">

            <SuccessAlert>{successMessage}</SuccessAlert>

                <div className="bg-white">
                    <DataTable headItems={headItems}>
                        {
                            domains.data.map((domain, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{domain.id}</td>
                                    <td className="text-left py-3 px-4">{domain.name}</td>

                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link href={route("admin.domains.edit", domain.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <PencilIcon className="mr-2 h-5 w-5"/>

                                                    Edit
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.domains.destroy', domain.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <TrashIcon className="mr-2 h-5 w-5"/>

                                                    Delete
                                                </Link>
                                            </Menu.Item>
                                        </DropDownMenu>
                                    </td>
                                </tr>
                            ))
                        }
                    </DataTable>
                </div>
            </div>
            {domains.total > 10 && <Pagination items={domains}/>}
        </AuthenticatedLayout>
    );
}

export default Links;
