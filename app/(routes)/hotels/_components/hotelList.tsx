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

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("/api/hotels")
            .then((res) => res.json())
            .then((data) => {
                setHotels(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setError(true);
                setLoading(false)
            })
    }, []);

    console.log(hotels)


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Hotels</h1>
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

export default HotelList