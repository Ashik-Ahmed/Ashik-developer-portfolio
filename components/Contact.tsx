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

    const { register, handleSubmit, resetField, formState: { errors } } = useForm<Inputs>();
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
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10 absolute top-36'>
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{' '}
                    <span className='underline decoration-[#F7AB0A]/50 '>Let's Talk</span>
                </h4>

                <div className='space-y-2'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <BsTelephoneFill className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+8801521464568</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <MdEmail className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>ashikahmed121@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                        <ImLocation className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-xl'>+Mohammadpur, Dhaka-1207</p>
                    </div>
                </div>
                <form ref={form} onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <div>
                            <input id='name' {...register('user_name', { required: true })} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" placeholder='Name' />
                            {errors.user_name && <span className='text-red-500 text-xs block'>{'Please enter your name'}</span>}
                        </div>
                        <div>
                            <input id='user_email' {...register('user_email', { required: true })} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="email" placeholder='Email' />
                            {errors.user_email && <span className='text-red-500 text-xs block'>{'Please enter your email'}</span>}
                        </div>
                    </div>
                    <input id='subject' {...register('subject', { required: true })} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" placeholder='Subject' />
                    {errors.subject && <span className='text-red-500 text-xs block'>{'Please enter email subject'}</span>}
                    <textarea id='message' {...register('message', { required: true })} className='contactInput bg-slate-400/10 focus: border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' placeholder='Message'></textarea>
                    {errors.message && <span className='text-red-500 text-xs block'>{'Please enter email body'}</span>}
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg '>Submit</button>
                </form>
            </div>
        </div>
    )
}