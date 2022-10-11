import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg space-y-3 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] md:px-10 py-3 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 relative top-20'>
            <div className='flex'>
                <motion.img
                    initial={{
                        y: -100,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    className='w-32 h-32 p-2 md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
                    src="https://avatars.githubusercontent.com/u/30996446?v=4" alt="" />

                <div className='px-0 md:px-10'>
                    <h4 className='text-xl md:text-4xl font-light'>Support Engineer</h4>
                    <p className='font-bold text-lg md:text-2xl mt-1'>Infozillion Teletech BD LTD.</p>
                    <div className='flex space-x-2 my-2'>
                        <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" />
                        <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" />
                        <img className='w-10 h-10 rounded-full' src="https://ashik-ahmed.netlify.app/static/media/vscode.a2ea685afa8a93556564.png" alt="" />
                    </div>
                    <p className='uppercase py-5 text-gray-300'>Started work... - Ended... - </p>
                </div>
            </div>
            <div>
                <h4 className='text-left text-xl font-semibold underline decoration-[#F7AB0A]/50 py-3'>Key Responsibilities:</h4>
                <ul className='list-disc space-y-1 ml-5 text-lg'>
                    <li>Summary Points Summary Points Summary Points Summary </li>
                    <li>Summary Points Summary Summary Points Summary Points</li>
                    <li>Summary Points Summary Summary Points Summary Points</li>
                    <li>Summary Points Summary Summary Points Summary Points</li>
                    <li>Summary Points Summary Summary Points Summary Points</li>
                </ul>
            </div>
        </article>
    )
}