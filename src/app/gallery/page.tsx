
import Image from 'next/image'
import React from 'react'


const GalleryPage = () => {
  return (
    <div>
        <Image width={500} height={500} src={'https://gratisography.com/wp-content/uploads/2025/04/gratisography-cool-car-cat-1035x780.jpg'} alt='next-image' className='mx-auto'/>
    </div>
  )
}

export default GalleryPage