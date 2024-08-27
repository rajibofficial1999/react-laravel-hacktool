import DropDownMenu from '@/Components/DropDownMenu';
import SelectBox from '@/Components/SelectBox';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Listbox, Menu } from '@headlessui/react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import SuccessAlert from '@/Components/SuccessAlert';

const AccountTypes = ({ accountTypes, meta }) => {

    const {successMessage} = usePage().props.meta

    const headItems = [
        'Id',
        'name',
        'status',
        'Action',
    ];

    return (
        <AuthenticatedLayout
            header='Account Types'
            linkItem={
                <Link className='bg-primary rounded-md text-white p-2' href={route('admin.accountTypes.create')}>Create Account Type</Link>
            }
        >
            <Head title="Account Types" />

            <div className="w-full mt-6">

                <SuccessAlert>{successMessage}</SuccessAlert>

                <div className="bg-white">
                    <DataTable headItems={headItems}>
                        {
                            accountTypes.data.map((accountType, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{accountType.id}</td>
                                    <td className="text-left py-3 px-4">{accountType.name}</td>
                                    <td className="text-left py-3 px-4">
                                        <SelectBox defaultText={meta.data?.status ?? accountType.status ? 'Active' : 'Inactive'}>
                                                <Listbox.Option
                                                key={i}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none ${
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={accountType.status ? 'Active' : 'Inactive'}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >

                                                    <Link className='py-2 pl-10 text-left pr-4 block w-full' method='put' as='button' href={route('admin.accountTypes.status', accountType.id)}>{accountType.status ? 'Inactive' : 'Active'}</Link>

                                                    </span>
                                                    </>
                                                )}
                                                </Listbox.Option>
                                        </SelectBox>
                                    </td>
                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link href={route("admin.accountTypes.edit", accountType.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <PencilIcon className="mr-2 h-5 w-5"/>

                                                    Edit
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.accountTypes.destroy', accountType.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
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
            {accountTypes.total > 10 && <Pagination items={accountTypes}/>}
        </AuthenticatedLayout>
    );
}

export default AccountTypes;
