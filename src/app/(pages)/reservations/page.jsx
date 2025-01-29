'use client';

import React from 'react';
import Card from './Card';
import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {get} from 'lodash';
import {getURL} from 'next/dist/shared/lib/utils';
import {deleteReservation, getUserReservations} from './service';
import toast from 'react-hot-toast';

const Reservations = () => {
    const queryClient = useQueryClient();
    const {data, isLoading} = useQuery({
        queryKey: ['reservations'],
        queryFn: getUserReservations,
        initialData: queryClient.getQueryData(['reservations']),
    });
    const {mutate} = useMutation({
        mutationFn: ({chargeId, reservationId}) =>
            deleteReservation(chargeId, reservationId),
        onSuccess: handleSuccess,
    });
    function handleSuccess() {
        toast.success('Reservation canceled successfully');
        queryClient.invalidateQueries({queryKey: ['reservations']});
    }
    return (
        <div className='mt-24 px-16 min-h-screen w-full'>
            <div className='h-full w-full flex flex-wrap gap-12 '>
                {data?.length > 0 ? (
                    data?.map((reservation) => (
                        <Card
                            key={reservation.id}
                            reservation={reservation}
                            mutate={mutate}
                        />
                    ))
                ) : (
                    <h1 className='text-2xl text-slate-700 font-bold'>
                        You have no reservations
                    </h1>
                )}
            </div>
        </div>
    );
};

export default Reservations;
