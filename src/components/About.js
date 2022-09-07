import React from 'react'
import aboutImage from '../assets/images/about-image.png'

const About = () => {
  return (
    <div className='bg-white'>
        <div className='p-24 grid grid-cols-2'>
            <div className=''>
                <h2 className='text-2xl font-medium'>About Us</h2>
                <p className='text-lg'>
                Contrary to popular belief, Lorem Ipsum is not s
                imply random text. It has roots in a piece of classical
                 Latin literature from 45 BC, making it over 2000 years old.
                  Richard McClintock, a Latin professor at Hampden-Sydney College
                   in Virginia, looked up one of the more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of the word in
                     classical literature, discovered the undoubtable source. Lorem Ipsum comes
                      from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                       (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
                        is a treatise on the theory of ethics, very popular during the Renaissance. 
                        
                </p>
            </div>
            <div className='flex item-center justify-center'>
                <img src={aboutImage} alt='' className='w-[400px] h-[400px] object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default About
