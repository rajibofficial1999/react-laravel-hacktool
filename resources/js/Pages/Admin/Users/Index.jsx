import DropDownMenu from '@/Components/DropDownMenu';
import Pagination from '@/Components/Pagination';
import SelectBox from '@/Components/SelectBox';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { cn } from '@/lib/utils';
import { Listbox, Menu } from '@headlessui/react';
import { CheckIcon, TrashIcon } from '@heroicons/react/20/solid';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import SuccessAlert from '@/Components/SuccessAlert';

const Users = ({ auth, users, statuses, meta }) => {

    const {successMessage} = usePage().props.meta

    const [filterStatuses, setFilterStatuses] = useState(statuses)

    const headItems = [
        'Id',
        'name',
        'Email',
        'Role',
        'Status',
        'Action',
    ];

    const removeItems = (items, status) => {
        return items.filter(item => item != status)
    }

    const handleRemoveStatus = (userStatus) => {
        if(userStatus == 'pending'){
            return removeItems(filterStatuses, 'suspended')
        }

        if(userStatus == 'rejected'){
            return filterStatuses.filter(item => item != 'pending')
        }

        if(userStatus == 'approved'){
            const items = removeItems(filterStatuses, 'pending')

            return removeItems(items, 'rejected')
        }

        if(userStatus == 'suspended'){
            const items = removeItems(filterStatuses, 'pending')

            return removeItems(items, 'rejected')
        }

    }

    return (
        <AuthenticatedLayout
            header='Users'
            linkItem={
                <Link className='bg-primary rounded-md text-white p-2' href={route('admin.users.create')}>Create user</Link>
            }
        >
            <Head title="Users" />

            <div className="w-full mt-6">

            <SuccessAlert>{successMessage}</SuccessAlert>

                <div className="bg-white">
                    <DataTable headItems={headItems}>
                        {
                            users.data.map((user, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{user.id}</td>
                                    <td className="text-left py-3 px-4">{user.name}</td>
                                    <td className="text-left py-3 px-4">{user.email}</td>
                                    <td className="text-left py-3 px-4">
                                    {
                                        user.roles[0]?.name ?
                                            <>
                                                <span
                                                    className={cn('text-xs font-medium me-2 px-2.5 py-0.5 rounded border ',
                                                    {
                                                        'border-green-400 bg-green-100 text-green-800' : user.roles[0]?.name == 'admin'
                                                    },
                                                    {
                                                        'bg-purple-100 text-purple-800 border-purple-400' : user.roles[0]?.name == 'user'
                                                    }
                                                    )}>{user.roles[0]?.name}</span>
                                            </>
                                            :
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400">N/A</span>
                                    }

                                    </td>
                                    <td className="text-left py-3 px-4">
                                        <SelectBox defaultText={meta.data?.status ?? user.status}>
                                            {handleRemoveStatus(user.status).map((item, i) => (
                                                <Listbox.Option
                                                key={i}
                                                className={({ active }) =>
                                                    `relative cursor-default select-none ${
                                                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                                    }`
                                                }
                                                value={item}
                                                >
                                                {({ selected }) => (
                                                    <>
                                                    <span
                                                        className={`block w-full truncate ${
                                                        selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                    >

                                                    <Link method='put' className='py-2 pl-10 text-left pr-4 block w-full' as='button' href={route('admin.users.status',{ user: user.id, statusName: item})}>{item}</Link>

                                                    </span>
                                                    {selected ? (
                                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                    </>
                                                )}
                                                </Listbox.Option>
                                            ))}
                                        </SelectBox>
                                    </td>

                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link href={route("admin.users.edit", user.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <PencilIcon className="mr-2 h-5 w-5"/>

                                                    Edit
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.users.destroy', user.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
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
            {users.total > 10 && <Pagination items={users}/>}
        </AuthenticatedLayout>
    );
}

export default Users;
