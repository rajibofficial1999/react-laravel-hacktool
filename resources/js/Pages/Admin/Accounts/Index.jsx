import DropDownMenu from '@/Components/DropDownMenu';
import Pagination from '@/Components/Pagination';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { Head, Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

const Accounts = ({ auth, accounts }) => {

    const [eup, setEup] = useState(null);
    const [password, setPassword] = useState(null);

    let headItemData = [
        'Id',
        'email/Username/Phone',
        'Password',
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
            setEup(index)
        }

        if(type == 'password'){
            setPassword(index)
        }
    }

    const handleMouseLeave = (type) => {
        if(type == 'eup'){
            setEup(null)
        }

        if(type == 'password'){
            setPassword(null)
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
                                                eup == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>
                                    <CopyToClipboard text={account.password}>
                                        <td className="text-left py-3 px-4 cursor-pointer">
                                            <button onMouseLeave={() => handleMouseLeave('password')} onClick={() => handleCredentialCopy(i, 'password')} type='button' className='font-semibold' title='Click to copy'>{account.password}</button>
                                            {
                                                password == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>

                                    {account.owner && <td className="text-left py-3 px-4">{account.owner.name}</td>}

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
