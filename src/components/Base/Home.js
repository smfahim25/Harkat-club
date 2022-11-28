import React from 'react';
import style from '../CSS/Home.module.css';

const Home = () => {
    return (
        <div className={style.backroundHome}>
            <section>
                <div className='flex flex-col absolute'>
                    <div className='w-96 mt-20 ml-10 bg-primary rounded-[20px]'>
                        <div className='flex flex-col text-gray-900'>
                            <div className="flex px-4 pt-5 md:px-10 lg:px-10">
                                <h1 className="text-5xl font-bold mr-5 leading-none sm:text-4xl xl:max-w-md text-gray-900">Kolkata Super King</h1>
                                <img alt="" src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?cs=srgb&dl=pexels-mixu-1323206.jpg&fm=jpg" className="object-cover w-20 h-20 rounded-full shadow dark:bg-gray-500" />
                            </div>
                            <div>
                                <p className="mt-6 flex-col mb-8 text-lg sm:mb-12 xl:max-w-lg text-gray-900">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                            </div>
                        </div>
                    </div>
                    <div className='ml-10 mt-5'>
                        <p className='text-xl text-white'>Active since mm month / members-count</p>
                        <div className='bg-primary h-10 mt-3 rounded-[20px]'>
                            <p className='text-xl text-black pt-1'>Membership status</p>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;