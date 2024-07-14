import DataTable from '@/Components/Table';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {QRCodeSVG} from 'qrcode.react';
import HeadlessModal from '@/Components/HeadlessModal';
import { Dialog } from '@headlessui/react';

const Links = ({ auth, links }) => {
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
        setQrCodeValue(item.is_query_link == 0 ? `https://${item.link}?uid=${auth.user.id}` : `https://${item.link}/${auth.user.id}`)
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
            header='My Links'
        >
            <Head title="My Links" />

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
                <div className="bg-white tableResponsive">
                    <DataTable headItems={headItems}>
                        {
                            links.data.map((link, i) => (
                                <tr key={i} className='odd:bg-white even:bg-slate-100'>
                                    <td className="text-left py-3 px-4">{i + 1}</td>
                                    <CopyToClipboard text={link.is_query_link == 0 ? `https://${link.link}?uid=${auth.user.id}` : `https://${link.link}/${auth.user.id}`}>
                                        <td className="text-left py-3 px-4 cursor-pointer">
                                            <button onMouseLeave={handleMouseLeave} onClick={() => handleCopy(i)} type='button' className='font-semibold' title='Click to copy'>
                                                {link.is_query_link == 0 ? `https://${link.link}?uid=${auth.user.id}` : `https://${link.link}/${auth.user.id}`}
                                            </button>
                                            {
                                                copiedItemIndex == i ? <span className='text-[12px] text-primary ml-1'>Copied</span> : ''
                                            }
                                        </td>
                                    </CopyToClipboard>

                                    <td className="text-left py-3 px-4">
                                        <span className='text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-green-400 bg-green-100 text-green-800'>{link.type.name}</span>
                                    </td>

                                    <td className="text-left py-3 px-4 flex items-center gap-1">
                                        <button className='py-1 px-2 bg-purple-500 rounded-md text-white' onClick={() => openQrCodeModal(link)}>QR Code</button>
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
