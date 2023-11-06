import schedule from '@/assets/schedule.svg';
import appointment from '@/assets/appointment.svg';
import support from '@/assets/support.svg';
import recommendation from '@/assets/recommendation.svg';
import Image from 'next/image';

const Feature = () => {
  return (
    <section className='w-full bg-highlight my-12 py-12 md:py-4' id='chat'>
    <div className='flex flex-col md:flex-row space-y-12 md:space-y-0 md:space-x-80 mx-24'>
      <div className='grid grid-cols-1 place-items-center  '><div className='w-16 flex'><Image src={schedule} className='mx-auto w-max md:w-full'  width={75} height={75} alt='schedule'/> </div><h3 className='text-center'> Rapid Scheduling </h3> </div>
      <div className='grid grid-cols-1 place-items-center'><div className='w-16 flex'><Image src={appointment} className='mx-auto w-max md:w-full'  width={75} height={75} alt='appointment'/> </div><h3 className='text-center'> Live Appointments</h3> </div>
      <div className='grid grid-cols-1 place-items-center  '><div className='w-16 flex'><Image src={recommendation} className='mx-auto w-max md:w-full'  width={75} height={75} alt='appointment'/> </div><h3 className='text-center'> Recommendation System</h3> </div>
      <div className='grid grid-cols-1 place-items-center  '><div className='w-16 flex'><Image src={support} className='mx-auto w-max md:w-full' width={75} height={75} alt='support'/></div> <h3 className='text-center'> 24/7 Support </h3> </div>

    </div>
    </section>
  )
}

export default Feature