import DropDownMenu from '@/Components/DropDownMenu';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/lib/utils';
import { Menu } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';

const LinkDomains = ({ auth, linkDomains }) => {

    const headItems = [
        'Id',
        'domain',
        'Endpoint',
        'type',
        'Action',
    ];

    return (
        <AuthenticatedLayout
            header='Link Domains'
            linkItem={
                <Link className='bg-primary rounded-md text-white p-2' href={route('admin.linkdomains.create')}>Create Link Domain</Link>
            }
        >
            <Head title="Link Domain" />

            <div className="w-full mt-6">
                <div className="bg-white">
                    <DataTable headItems={headItems}>
                        {
                            linkDomains.data.map((linkDomain, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{linkDomain.id}</td>
                                    <td className="text-left py-3 px-4">{linkDomain.domain}</td>
                                    <td className="text-left py-3 px-4">{linkDomain.endpoint}</td>
                                    <td className="text-left py-3 px-4">
                                        <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800'>{linkDomain.type.name}</span>
                                    </td>

                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link href={route("admin.linkdomains.edit", linkDomain.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <PencilIcon className="mr-2 h-5 w-5"/>

                                                    Edit
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.linkdomains.destroy', linkDomain.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
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
            {linkDomains.total > 10 && <Pagination items={linkDomains}/>}
        </AuthenticatedLayout>
    );
}

export default LinkDomains;
