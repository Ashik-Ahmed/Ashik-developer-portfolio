import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5];
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center overflow-hidden'>
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex overflow-y-hidden snap-x snap-mandatory scrollbar-thumb-[#F7AB0A] scrollbar-track-white scrollbar-thin'>
                {
                    projects.map((project, index) => (
                        <div key={index} className='relative top-12 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory'>
                            <motion.img
                                initial={{
                                    y: -300,
                                    opacity: 0,
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
                                className='w-80'
                                src="https://avatars.githubusercontent.com/u/30996446?v=4" alt="" />
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#F7AB0A]/50'>Case Study {index + 1} of {projects.length}: UPS clone</span>
                                </h4>
                                <p className='text-lg md:text-left text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste minima pariatur ipsum ipsam cupiditate maiores facilis! Molestiae id libero aliquid. Fugit eveniet vel consequuntur enim, eligendi quae aperiam magni minima quasi eum unde blanditiis a. Officia sapiente recusandae delectus quos.</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12 -mt-24'>

            </div>
        </motion.div >
    )
}

export default Projects