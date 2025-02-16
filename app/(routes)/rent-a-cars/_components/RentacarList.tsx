"use client"
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter, useSearchParams } from 'next/navigation'
import { useHotelsStore } from '@/stores/hotelStore'
import RentacarFilter from './RentacarFilter'


const RentacarList = () => {

    const {error,fetchHotels,hotels,loading} =useHotelsStore();
    const searchParams = useSearchParams();
    const router = useRouter();

    

    useEffect(() => {
        const filters: FilterValues = {
            rating: searchParams.get("rating") || "",
            priceMin: searchParams.get("priceMin") || "",
            priceMax: searchParams.get("priceMax") || "",
          };

        fetchHotels(filters);
    }, [searchParams, fetchHotels]);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hotels UseSearchParams and Zustand</h1>
            
            <RentacarFilter/>
      
            {loading && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton key={index} className='h-72 w-full rounded-lg' />
                    ))}
                </div>
            )}

            {error && (
                <div className="text-center text-red-500 font-semibold">
                    Something went wrong
                </div>
            )}

            {!loading && !error && hotels.length ===0 &&(
                 <div className="text-center text-blue-500 font-semibold">
          No hotels found.
          </div>
            )}

            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hotels.map((hotel) => (
                        <Card key={hotel.id} className="shadow-md">
                            <CardHeader>
                                <img
                                    src={hotel.photos[0]}
                                    alt={hotel.name}
                                    className="w-full h-48 object-cover rounded"
                                />
                                <CardTitle className="text-lg font-semibold mt-2">{hotel.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                            <p className="text-gray-700">{hotel.rating} *</p>

                                <p className="text-gray-700">{hotel.description}</p>
                                <p className="text-sm text-gray-500">{hotel.location}</p>
                                <p className="text-lg font-bold">${hotel.pricePerNight} / night</p>
                            </CardContent>
                        </Card>

                    ))}
                </div>
            )}




        </div>
    )
}

export default RentacarList