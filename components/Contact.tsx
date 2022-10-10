import React, { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BsTelephoneFill } from 'react-icons/bs';
import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

type Inputs = {
    user_name: string,
    user_email: string,
    subject: string,
    message: string,
};

type Props = {}

export default function Contact({ }: Props) {

    const { register, handleSubmit, resetField } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {

        console.log(formData);

        emailjs.sendForm('service_dcch1lq', 'template_n1myfln', form.current, 'T00TwejzqkVHjfVU1')
            .then((result) => {
                console.log(result.text);
                resetField('user_name');
                resetField('user_email');
                resetField('subject');
                resetField('message');
            }, (error) => {
                console.log(error.text);
            });
    };

    const form = useRef();

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10 absolute top-36'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{' '}
                    <span className='underline decoration-[#F7AB0A]/50 '>Let's Talk</span>
                </h4>

                <div className='space-y-2'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <BsTelephoneFill className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+8801521464568</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MdEmail className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>ashikahmed121@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <ImLocation className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+Mohammadpur, Dhaka-1207</p>
                    </div>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('user_name')} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" placeholder='Name' />
                        <input {...register('user_email')} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="email" placeholder='Email' />
                    </div>
                    <input {...register('subject')} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" placeholder='Subject' />
                    <textarea {...register('message')} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' placeholder='Message'></textarea>
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
                </form>
            </div>
        </div>
    )
}