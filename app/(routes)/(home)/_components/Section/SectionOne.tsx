import Image from 'next/image'
import React from 'react'

const SectionOne = () => {
  return (
    <div className='mx-auto container lg:mt-8 md:mt-44 mt-64'>
      <div className='flex flex-col md:flex-row gap-8 px-3 lg:px-28'>
        <div className='group overflow-hidden relative'>
          <Image
            alt=''
            src="/home/1.jpg"
            width={1260}
            height={590}
            className='rounded-xl transition-transform duration-300 group-hover:scale-110'
          />
        </div>

        <div className='group overflow-hidden relative'>
          <Image
            alt=''
            src="/home/2.jpg"
            width={1260}
            height={590}
            className='rounded-xl transition-transform duration-300 group-hover:scale-110'
          />
        </div>

      </div>
    </div>
  )
}

export default SectionOne