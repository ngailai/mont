'use client';

import {useForm} from 'react-hook-form';
import {signIn} from 'next-auth/react';
import {zodResolver} from '@hookform/resolvers/zod';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import React, {useState} from 'react';
import Paris from '../../../../public/assets/paris.jpg';
import Image from 'next/image';
import {schema} from './schema';

import {useRouter} from 'next/navigation';
import toast from 'react-hot-toast';

const Login = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data) => {
        if (Object.keys(errors)?.length > 0) {
            toast.error('Enter valid data');
            return;
        }
        setIsLoading(true);

        try {
            const res = await signIn('credentials', {
                ...data,
                redirect: false,
            });
            if (res?.error == null) {
                router.push('/');
            } else {
                toast.error('Invalid credentials');
            }
        } catch (error) {
            console.log(error);
        }

        setIsLoading(false);
    };

    return (
        <div className='relative h-screen w-full'>
            <div className='relative h-full w-full'>
                <Image
                    className='brightness-50 h-full w-full object-cover'
                    src={Paris}
                    alt="Login's image"
                />
                <div className='h-[350px] w-[350px] bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg'>
                    <h2 className='text-center p-4 font-semibold text-slate-800 text-2xl border-b border-slate-500'>
                        Log into your account
                    </h2>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className='mt-8 flex flex-col items-center w-full gap-8'
                    >
                        <Input
                            className='w-4/5 mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600'
                            type='email'
                            placeholder='email'
                            register={register('email')}
                        />
                        <Input
                            className='w-4/5 mx-auto outline-none border border-slate-400 py-1 px-3 rounded-md focus:border-slate-600'
                            type='password'
                            placeholder='Your password'
                            register={register('password')}
                        />
                        <Button
                            disabled={isLoading}
                            label='Submit'
                            className='mt-12 w-1/2 mx-auto  cursor-pointer rounded-lg py-2 px-6 text-xl text-white bg-blue-500 transition-all hover:bg-blue-600'
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
