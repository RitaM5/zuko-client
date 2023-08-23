import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const usePhotographer = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isPhotographer, isLoading: isPhotographerLoading} = useQuery({
        queryKey: ['isPhotographer', user?.email],
        queryFn: async () => {
           const res = await axiosSecure.get(`/users/photographer/${user?.email}`);
            return res.data.photographer;
        }
    })
    return [isPhotographer, isPhotographerLoading]
};

export default usePhotographer;