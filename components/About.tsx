import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5
            }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}

                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}

                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] relative top-20'
                src="https://avatars.githubusercontent.com/u/30996446?v=4" alt="" />

            <div className='space-y-10 px-0 md:px-10 relative top-20'>
                <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>
                <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis rem dolor excepturi accusamus deleniti cupiditate harum tempora repellendus. Maiores, ipsam voluptate. Consectetur doloremque rem ut, ipsam ipsa ab explicabo labore id, iusto assumenda architecto reiciendis saepe veritatis totam alias cumque velit quidem ullam voluptatum perspiciatis! Dolor obcaecati facilis distinctio fugiat repellendus quam harum incidunt nulla odit quasi, neque provident, ea voluptatibus ipsum itaque fuga error nobis dolore saepe laudantium. Ipsum error adipisci esse ex quis maxime iusto aliquid? Expedita, earum iusto. Quasi molestias repudiandae culpa itaque omnis sint explicabo nemo expedita voluptates labore quam quos illo voluptatibus repellat, quibusdam dolorem molestiae, vel magni delectus sit nobis. Facilis officia dolorem laboriosam labore ratione commodi neque eos illo consequatur obcaecati! Facilis molestiae ipsa architecto, adipisci ad voluptas explicabo molestias consequatur corporis vero sed officiis quos amet esse dolorem.</p>
            </div>

        </motion.div>
    )
}