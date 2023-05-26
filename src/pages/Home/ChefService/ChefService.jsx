import React from 'react';

import chef from '../../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div className="carousel w-full mb-24 h-[400px]">
            <div className="carousel-item relative w-full">
                <img src={chef} className="w-full rounded" />
                <div className="absolute flex items-center rounded h-full left-0 top-0">
                    <div className=' space-y-7 p-16 bg-[#FFFFFF] mx-20'>
                        <h2 className='text-5xl  text-center font-semibold uppercase'>Bistro Boss</h2>
                        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br /> ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefService;