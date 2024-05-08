const DataTable = ({headItems, children}) => {
    return (
        <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
                <tr>
                    {
                        headItems.map((item, i) => (
                            <th key={i} className="text-left py-3 px-4 uppercase font-semibold text-sm">{item}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="text-gray-700">
                {children}
            </tbody>
        </table>
    )
}

export default DataTable;
