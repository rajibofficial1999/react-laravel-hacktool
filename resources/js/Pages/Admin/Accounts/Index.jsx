import DropDownMenu from '@/Components/DropDownMenu';
import Pagination from '@/Components/Pagination';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Accounts = ({ accounts }) => {

    const { auth } = usePage().props

    const [eupIndex, setEupIndex] = useState(null);
    const [passwordIndex, setPasswordIndex] = useState(null);
    const [emailPasswordIndex, setEmailPasswordIndex] = useState(null);

    let headItemData = [
        'Id',
        'email/Username/Phone',
        'Account Password',
        'Email Password',
        'Owner',
        'type',
        'Time',
        'Action',
    ];

    const [headItems, setHeadItems] = useState(headItemData);

    useEffect(() => {
        if(!auth.user.is_admin){
            setHeadItems(headItems.filter(item => item != 'Owner'))
        }
    },[])

    const handleCredentialCopy = (index, type) => {
        if(type == 'eup'){
            setEupIndex(index)
        }

        if(type == 'password'){
            setPasswordIndex(index)
        }

        if(type == 'password_of_email'){
            setEmailPasswordIndex(index)
        }
    }

    const handleMouseLeave = (type) => {
        if(type == 'eup'){
            setEupIndex(null)
        }

        if(type == 'password'){
            setPasswordIndex(null)
        }

        if(type == 'password_of_email'){
            setEmailPasswordIndex(null)
        }
    }

    return (
        <AuthenticatedLayout
            header='Accounts'
        >
            <Head title="Accounts" />

            <div className="w-full mt-6">
                <div className="bg-white">
                    <DataTable headItems={headItems}>
                        {
                            accounts.data.map((account, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{account.id}</td>
                                    <CopyToClipboard text={account.eup}>
                                        <td className="text-left py-3 px-4 cursor-pointer">
                                            <button onMouseLeave={() => handleMouseLeave('eup')} onClick={() => handleCredentialCopy(i, 'eup')} type='button' className='font-semibold' title='Click to copy'>{account.eup}</button>
                                            {
                                                eupIndex == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>
                                    <CopyToClipboard text={account.password}>
                                        <td className="text-left py-3 px-4 cursor-pointer">
                                            <button onMouseLeave={() => handleMouseLeave('password')} onClick={() => handleCredentialCopy(i, 'password')} type='button' className='font-semibold' title='Click to copy'>{account.password}</button>
                                            {
                                                passwordIndex == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>

                                    {
                                        account.password_of_email ? <CopyToClipboard text={account.password_of_email}>
                                            <td className="text-left py-3 px-4 cursor-pointer">
                                                <button onMouseLeave={() => handleMouseLeave('password_of_email')} onClick={() => handleCredentialCopy(i, 'password_of_email')} type='button' className='font-semibold' title='Click to copy'>{account.password_of_email}</button>
                                                {
                                                    emailPasswordIndex == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                                }
                                            </td>
                                        </CopyToClipboard>
                                        :

                                        <td className="text-left py-3 px-4">
                                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400">N/A</span>
                                        </td>
                                    }

                                    {(account.owner && auth.user.is_admin) && <td className="text-left py-3 px-4">{account.owner.name}</td>}

                                    <td className="text-left py-3 px-4">
                                        <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800'>{account.type.name}</span>
                                    </td>
                                    <td className="text-left py-3 px-4 italic font-thin">{account.time_for_humans}</td>
                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.accounts.destroy', account.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
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
            {accounts.total > 10 && <Pagination items={accounts}/>}
        </AuthenticatedLayout>
    );
}

export default Accounts;
