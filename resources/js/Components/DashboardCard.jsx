import { cn } from '@/lib/utils';

const DashboardCard = ({children, title, value, className = ''}) => {
  return (
    <>
        <div className='bg-white shadow-xl p-5 relative rounded-md'>
            <h4 className='font-bold text-[14px] uppercase text-neutral-600 font-karla'>{title}</h4>
            <p className='text-xl py-4 text-black font-bold font-karla'>{value}</p>

            <div className={cn("flex justify-center items-center rounded-md h-6 w-6 bg-primary absolute right-3 bottom-3", className)}>
                {children}
            </div>
        </div>
    </>
  )
}

export default DashboardCard
