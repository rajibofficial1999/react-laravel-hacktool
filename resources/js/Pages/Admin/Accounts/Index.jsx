import DropDownMenu from '@/Components/DropDownMenu';
import HeadlessModal from '@/Components/HeadlessModal';
import Pagination from '@/Components/Pagination';
import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Menu } from '@headlessui/react';
import { TrashIcon, EyeIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Dialog } from '@headlessui/react';
import SuccessAlert from '@/Components/SuccessAlert';
import AccountOwnerName from "@/Components/AccountOwnerName.jsx";
import CardImageItem from "@/Components/CardImageItem.jsx";

const Accounts = ({ accounts }) => {

    const { auth } = usePage().props
    const {successMessage} = usePage().props.meta

    const [eupIndex, setEupIndex] = useState(null);
    const [passwordIndex, setPasswordIndex] = useState(null);
    const [emailPasswordIndex, setEmailPasswordIndex] = useState(null);
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

    const viewAccount = (account) => {
        setAccountDetails(account)

        setIsModalOpen(true)
    }

    useEffect(() => {
        if(auth.user.is_super_admin){
            let headItemItems = headItemData.map(item => {
                if(item == 'Owner'){
                    item = "Team"
                }

                return item;
            })

            setHeadItems(headItemItems)
        }
    }, []);

    return (
        <AuthenticatedLayout
            header='Accounts'
        >
            <Head title="Accounts" />

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
                                                        <CardImageItem image={accountDetails?.card_image1}>
                                                            {
                                                                accountDetails?.card_image1 ?
                                                                    <img className='w-20 rounded-md border' src={'../storage/' + accountDetails?.card_image1}
                                                                         alt="card-image-1"/> : ''
                                                            }
                                                        </CardImageItem>
                                                        <CardImageItem image={accountDetails?.card_image2}>
                                                            {
                                                                accountDetails?.card_image2 ?
                                                                    <img className='w-20 rounded-md border' src={'../storage/' + accountDetails?.card_image2}
                                                                         alt="card-image-1"/> : ''
                                                            }
                                                        </CardImageItem>
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

            <div className="w-full mt-6">

                <SuccessAlert>{successMessage}</SuccessAlert>

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

                                    {
                                        auth.user.is_admin ?
                                                <AccountOwnerName authUser={auth.user} owner={account.owner}/> : ''
                                    }

                                    {
                                        auth.user.is_super_admin ?
                                            <AccountOwnerName authUser={auth.user} owner={account.owner}/> : ''
                                    }
                                    <td className="text-left py-3 px-4 italic font-thin">{account.time_for_humans}</td>
                                    <td className="text-left py-3 px-4">
                                        <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.accounts.destroy', account.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <TrashIcon className="mr-2 h-5 w-5"/>

                                                    Delete
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <button onClick={() => viewAccount(account)} type='button' className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <EyeIcon className="mr-2 h-5 w-5"/>

                                                    View
                                                </button>
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
