import { cn } from '@/lib/utils';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Link } from '@inertiajs/react';

const CustomLink = ({children, className = '', ...props}) => {
    if(children.includes("Previous")) {
        children = <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        className = 'rounded-l-md';
    }else{
        if(children.includes("Next")) {
            children = <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            className = 'rounded-r-md';
        }
    }

    return (
      <Link className={cn("relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ", className)} {...props} >
        {children}
      </Link>
    );
  };


export default function Pagination({items}) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-transparent px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <Link
          as='button'
          disabled={!items.prev_page_url}
          href={items.prev_page_url}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </Link>
        <Link
          as='button'
          disabled={!items.next_page_url}
          href={items.next_page_url}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </Link>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{items.from}</span> to <span className="font-medium">{items.to}</span> of{' '}
            <span className="font-medium">{items.total}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {
                items.links.map(item => (
                    <CustomLink
                        as="button"
                        disabled={!item.url}
                        href={item.url}
                        key={item.label}
                        className={item.active ? 'bg-primary text-white hover:bg-primary' : ''}>
                        {item.label}
                    </CustomLink>
                ))
            }
          </nav>
        </div>
      </div>
    </div>
  )
}
