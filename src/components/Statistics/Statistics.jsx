import React from 'react';

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";




const Statistics = () => {

    const data = [
        {
            name: "A 1",
            marks: 50
        },
        {
            name: "A 2",
            marks: 29
        },
        {
            name: "A 3",
            marks: 60
        },
        {
            name: "A 4",
            marks: 55
        },
        {
            name: "A 5",
            marks: 60
        },
        {
            name: "A 6",
            marks: 53
        },
        {
            name: "A 7",
            marks: 49
        },
        {
            name: "A 8",
            marks: 25
        },
    ];

    return (

        <div className='mt-32'>
            <div className='w-[55%] mx-auto mb-20 pt-10 pb-2'>
                <h2 className='text-3xl font-bold'>Assignment Analytics:</h2>
            </div>
            <div className='w-[50%] mx-auto pt-10 pb-2 bg-[#F9FAFF] flex justify-center items-center'>
                <AreaChart className='-ml-12'
                    width={800}
                    height={300}
                    data={data}
                >
                    {/* <Line dataKey="math"></Line>
                <Line dataKey="english" stroke="#8884d8"></Line> */}

                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis></YAxis>
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </div>

        </div>
    );
};

export default Statistics;