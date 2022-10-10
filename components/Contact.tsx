import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoLocation } from 'react-icons/io';

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.
                    <span className='underline decoration-[#F7AB0A]/50 '>Let's Talk</span>
                </h4>

                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <BsTelephoneFill className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+8801521464568</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <IoLocation className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+Mohammadpur, Dhaka-1207</p>
                    </div>


                </div>
            </div>
        </div>
    )
}