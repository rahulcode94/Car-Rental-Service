import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'

const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex flex-col md:flex-row md:items-start items-center
                        justify-between px-8 md:pl-14 pt-10 
                        bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] 
                        max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

            <div className='text-white py-10 md:py-0'> {/* Added vertical padding for better spacing on smaller screens */}
                <h2 className='text-3xl font-medium'>Do You Own a Luxury Car?</h2>

                <p className='mt-2'>Monetize your vehicle effortlessly by listing it on
                    **CarRental**.</p>

                <p className='max-w-xs md:max-w-sm'> {/* Adjusted max-width for better readability */}
                    We take care of insurance, driver verification
                    and secure payments - so you can earn passive income, stress-free.
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='px-6 py-2 bg-white hover:bg-gray-100 transition-all
                           text-blue-600 rounded-lg text-sm mt-4 cursor-pointer'> {/* Changed text-primary to text-blue-600 for a likely intended contrast color */}
                    List your car
                </motion.button>
            </div>


            <motion.img
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                src={assets.banner_car_image} alt="car" className='max-h-45 md:max-h-64 mt-10 md:mt-0' /> {/* Adjusted max-height and ensured margin-top is zeroed out on md screens */}
        </motion.div >
    )
}

export default Banner