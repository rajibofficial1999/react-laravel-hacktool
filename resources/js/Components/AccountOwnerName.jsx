const AccountOwnerName = ({authUser, owner}) => {
    return (
        authUser.name === owner?.name ?
            <td className="text-left py-3 px-4">
                    <span
                        className="bg-blue-100 text-black text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400">You</span>
            </td>
            :
            <td className="text-left py-3 px-4">
                {owner?.team?.name ?? owner?.name}
            </td>
    )
}

export default AccountOwnerName
