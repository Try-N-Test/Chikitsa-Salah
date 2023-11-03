import schedule from '@/assets/schedule.svg';
import appointment from '@/assets/appointment.svg';
import support from '@/assets/support.svg';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className='w-full bg-highlight my-12 py-4'>
    <div className='flex flex-row space-x-96 justify-center'>
      <div className='flex flex-col justify-center gap-1'><Image src={schedule} className='mx-auto'  width={128} height={128} alt='schedule'/> <h3 className='text-center'> Rapid Scheduling </h3> </div>
      <div className='flex flex-col justify-center gap-1'><Image src={appointment} className='mx-auto'  width={128} height={128} alt='appointment'/> <h3 className='text-center'> Live Appointments</h3> </div>
      <div className='flex flex-col justify-center gap-1'><Image src={support} className='mx-auto' width={128} height={128} alt='support'/> <h3 className='text-center'> 24/7 Support </h3> </div>
      
    </div>
    </section>
  )
}

export default Feature