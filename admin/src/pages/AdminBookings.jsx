import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";

const AdminBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(backendUrl +"/api/bookings/get");
                const result = await response.json();
                if (result.success) {
                    setBookings(result.data); // Updated data access
                } else {
                    console.error("Error fetching bookings:", result.message);
                }
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const filteredBookings = bookings.filter((booking) =>
        [booking.firstName, booking.lastName, booking.email]
            .some((field) =>
                field?.toLowerCase().includes(search.toLowerCase())
            )
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="spinner-border animate-spin w-12 h-12 border-4 border-t-transparent border-blue-500 rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen  p-8">
            <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
                Admin Panel - Bookings
            </h1>
            <div className="flex justify-between items-center mb-5">
                <input
                    type="text"
                    className="w-1/3 p-3 rounded-lg shadow-md focus:outline-none"
                    placeholder="Search bookings..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white table-auto rounded-lg">
                    <thead className="bg-[#36454f] text-white">
                        <tr>
                            <th className="p-4 text-left">First Name</th>
                            <th className="p-4 text-left">Last Name</th>
                            <th className="p-4 text-left">Phone</th>
                            <th className="p-4 text-left">Email</th>
                            <th className="p-4 text-left">Photo</th>
                            <th className="p-4 text-left">Adhaar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.map((booking) => (
                            <tr key={booking._id} className="border-b hover:bg-gray-50">
                                <td className="p-4">{booking.firstName}</td>
                                <td className="p-4">{booking.lastName}</td>
                                <td className="p-4">{booking.phone}</td>
                                <td className="p-4">{booking.email}</td>
                                <td className="p-4">
                                    <img
                                        src={booking.photo}
                                        alt="Photo"
                                        className="w-16 h-16 object-cover rounded-full"
                                    />
                                </td>
                                <td className="p-4">
                                    {booking.adhaar.endsWith(".pdf") ? (
                                        <a
                                            href={booking.adhaar}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 underline"
                                        >
                                            View Adhaar
                                        </a>
                                    ) : (
                                        <img
                                            src={booking.adhaar}
                                            alt="Adhaar"
                                            className="w-16 h-16 object-cover rounded-full"
                                        />
                                    )}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default AdminBookings;
