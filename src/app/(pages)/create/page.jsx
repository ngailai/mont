'use client';
import {useEffect, useState} from 'react';
import {toast} from 'react-toastify';
import React, {use} from 'react';
import {useForm} from 'react-hook-form';
import Input from '@/ui/Input';
import {zodResolver} from '@hookform/resolvers/zod';
import {schema} from './schema';
import {optionLocations, optionTypes} from '@/data/data';
import Select from '@/ui/Select';
import Button from '@/ui/Button';
import {createNewListing, postImages} from './api';
import {useRouter} from 'next/navigation';
import {useMutation} from '@tanstack/react-query';

const Create = () => {
    const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;
    const UPLOAD_PRESET = process.env.NEXT_PUBLIC_UPLOAD_PRESET;
    const router = useRouter();
    const [images, setImages] = useState([]);

    const {mutateAsync, isLoading} = useMutation({
        mutationFn: ({data, imageUrls}) => createNewListing(data, imageUrls),
        mutationKey: ['listings'],
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            desc: '',
            beds: 5,
            hasFreeWifi: false,
            type: 'luxury',
            location: 'buea',
            pricePerNight: 123,
        },
    });
    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            Object.keys(errors).map((error) => {
                toast.error(errors[key].message);
            });
        }
    }, [errors]);

    const handleImage = (e) => {
        setImages((prev) => {
            return [...prev, e.target.files[0]];
        });
    };
    const uploadImage = async (image, idx) => {
        if (!image) return;
        const toastId = toast.loading(`Image ${idx + 1} is being uploaded`);
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', UPLOAD_PRESET);
        try {
            const imageUrl = await postImages(CLOUD_NAME, formData);
            toast.success(`successfully  uploaded Image ${idx + 1} `);
            toast.dismiss(toastId);
            return imageUrl;
        } catch (error) {
            console.log(error);
        }
    };
    const onSubmit = async (data) => {
        if (!images?.length)
            return toast.error('Please upload at least one image');
        const imageUrls = await Promise.all(
            images.map((image, idx) => {
                const imageUrl = uploadImage(image, idx);
                return imageUrl;
            }),
        );
        const newListing = await mutateAsync({data, imageUrls});
        toast.success('redirecting to listing page');
        router.push(`/details/${newListing.id}`);
    };

    return (
        <div className='min-h-[900px] w-full flex  items-center justify-center '>
            <div className='h-2/5 w-1/5 rounded-xl border border-slate-500'>
                <div className='p-3 w-full border-b border-slate-300'>
                    <h3 className='text-2xl font-semibold text-center'>
                        Create a new listing
                    </h3>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='w-full px-4 py-6 flex flex-col items-center gap-8'
                >
                    <Input
                        type='text'
                        className='text-slate-400 w-2/3 outline-none p-2 '
                        register={register('name')}
                        placeholder='Name of the listing'
                    />
                    <Input
                        type='text'
                        className='text-slate-400 w-2/3 outline-none p-2 '
                        register={register('desc')}
                        placeholder='Description of the listing'
                    />
                    <Select
                        data={optionLocations}
                        className='text-slate-400 w-2/3 outline-none ml-2 '
                        register={register('location')}
                    />
                    <Select
                        data={optionTypes}
                        className='text-slate-400 w-2/3 outline-none ml-2 '
                        register={register('type')}
                    />
                    <Input
                        type='number'
                        className='text-slate-400 w-2/3 outline-none p-2 '
                        register={register('pricePerNight', {
                            valueAsNumber: true,
                        })}
                        step={0.01}
                        placeholder='$50.00'
                    />
                    <Input
                        type='number'
                        className='text-slate-400 w-2/3 outline-none p-2 '
                        register={register('beds', {
                            valueAsNumber: true,
                        })}
                        step={1}
                    />
                    <div className='text-slate-400 ml-4 w-2/3 flex gap-4 items-center'>
                        <label htmlFor='freeWifi'>Free Wifi</label>
                        <Input
                            type='checkbox'
                            className='text-slate-400 w-2/3 outline-none p-2 '
                            register={register('hasFreeWifi')}
                            id='freeWifi'
                        />
                    </div>
                    <label
                        htmlFor='images'
                        className='text-slate-400 w-2/3 outline-none ml-2 '
                    >
                        Upload images
                    </label>
                    <input
                        onChange={handleImage}
                        type='file'
                        className='text-slate-400'
                        style={{display: 'none'}}
                        id='images'
                    />
                    <Button
                        disabled={isLoading}
                        className='w-2/3 bg-blue-500 text-white px-4 py-2 rounded-xl disabled:bg-blue-700'
                        label='Submit'
                    />
                </form>
            </div>
        </div>
    );
};

export default Create;
