const SearchFilter = ({children}) => {
    return (
        <div className="">
            <div className="py-3">
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                    {children}
                </div>
            </div>
        </div>

    )
}
export default SearchFilter
