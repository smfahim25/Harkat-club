import React from 'react';
import { useForm } from 'react-hook-form';

const CreateEvent = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => { }
    return (
        <div>
            <input type="checkbox" id="create-event" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  w-11/12 max-w-5xl relative">
                    <label htmlFor="create-event" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <section className="p-6 bg-slate-100 text-black">
                        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="grid grid-cols-4 gap-4 col-span-6 lg:col-span-3">
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md">Event name</label>
                                    <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" />
                                </div>
                                <div className="col-span-6 lg:col-span-2">
                                    <label for="email" className="text-md">Event description</label>
                                    <textarea id="email" type="email" placeholder="description" className="resize-none w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" />
                                </div>
                                <div className="col-span-6 lg:col-span-3">
                                    <label for="email" className="text-md">Upload Event Flyer</label>
                                    <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" accept='image/png, image/jpeg,image/jpg' />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md">Event coordinator</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label for="address" className="text-md">Event Venue details</label>
                                    <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md">Enter timings</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="date" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                        <input id="city" type="date" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md">Event Equipment required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md">Event Preparatory work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md">Event Follow up work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md">Event prize</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md">Event Funds</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md">Event Guests</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-[#ee3c4d] border-[#ee3c4d] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className='col-span-6 justify-self-center'>
                                    <input className='uppercase font-semibold px-8 rounded-xl cursor-pointer py-2 mt-4 text-white' style={{ backgroundColor: "#ee3c4d" }} type="submit" value='Create event' />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;