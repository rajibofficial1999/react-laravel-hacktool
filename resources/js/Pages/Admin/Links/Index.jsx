import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {QRCodeSVG} from 'qrcode.react';
import HeadlessModal from '@/Components/HeadlessModal';
import { Dialog, Menu } from '@headlessui/react';
import DropDownMenu from '@/Components/DropDownMenu';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import SuccessAlert from '@/Components/SuccessAlert';

const Links = ({ auth, links }) => {

    const {successMessage} = usePage().props.meta

    const [copiedItemIndex, setCopiedItemIndex] = useState(null);
    let [isModalOpen, setIsModalOpen] = useState(false)
    let [qrCodeValue, setQrCodeValue] = useState(null)
    let [qrCodeType, setQrCodeType] = useState(null)

    const handleCopy = (index) => {
        setCopiedItemIndex(index)
    }

    const handleMouseLeave = () => {
        setCopiedItemIndex(null)
    }

    const openQrCodeModal = (item) => {
        setQrCodeValue(item.is_query_link == 1 ? `https://${item.domain.name + item.endpoint}?uid=${auth.user.id}` : `https://${item.domain.name + item.endpoint}/${auth.user.id}`)
        setQrCodeType(item.type.name)
        setIsModalOpen(true)
    }

    const headItems = [
        'no',
        'url',
        'type',
        'Action',
    ];
    return (
        <AuthenticatedLayout
            header='Links'
            linkItem={
                <Link className={cn("bg-primary rounded-md text-white p-2", {'hidden' : !auth.user.is_admin})} href={route('admin.links.create')}>Create Link</Link>
            }
        >
            <Head title="Links" />

            <HeadlessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="font-bold leading-6 text-gray-900 text-center text-xl"
                  >
                    {qrCodeType}
                  </Dialog.Title>
                  <div className="mt-4 py-4 flex justify-center items-center">
                    <QRCodeSVG size='200' value={qrCodeValue} />
                  </div>
                </Dialog.Panel>
            </HeadlessModal>

            <div className="w-full mt-6">

            <SuccessAlert>{successMessage}</SuccessAlert>

                <div className="bg-white tableResponsive">
                    <DataTable headItems={headItems}>
                        {
                            links.data.map((link, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{i + 1}</td>
                                    <CopyToClipboard text={link.is_query_link == 1 ? `https://${link.domain.name + link.endpoint}?uid=${auth.user.id}` : `https://${link.domain.name + link.endpoint}/${auth.user.id}`}>
                                        <td className="text-left py-3 px-4 cursor-pointer">
                                            <button onMouseLeave={handleMouseLeave} onClick={() => handleCopy(i)} type='button' className='font-semibold' title='Click to copy'>
                                                {link.is_query_link == 1 ? `https://${link.domain.name + link.endpoint}?uid=${auth.user.id}` : `https://${link.domain.name + link.endpoint}/${auth.user.id}`}
                                            </button>
                                            {
                                                copiedItemIndex == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>

                                    <td className="text-left py-3 px-4">
                                        <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800'>{link.type.name}</span>
                                    </td>

                                    <td className="text-left py-3 px-4 flex items-center gap-1 relative">
                                        <button className='py-1 px-2 bg-purple-500 rounded-md text-white' onClick={() => openQrCodeModal(link)}>QR Code</button>

                                        {auth.user.is_admin && <DropDownMenu additionalClasses="bg-gray-200 text-gray-900" name='Actions'>
                                            <Menu.Item>
                                                <Link href={route('admin.links.edit', link.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <PencilSquareIcon className="mr-2 h-5 w-5"/>

                                                    Edit
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link method='delete' as='button' href={route('admin.links.destroy', link.id)} className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-900 hover:bg-primary hover:text-white">
                                                    <TrashIcon className="mr-2 h-5 w-5"/>

                                                    Delete
                                                </Link>
                                            </Menu.Item>
                                        </DropDownMenu>}

                                    </td>
                                </tr>
                            ))
                        }
                    </DataTable>
                </div>
            </div>
            {links.total > 10 && <Pagination items={links}/>}
        </AuthenticatedLayout>
    );
}

export default Links;
