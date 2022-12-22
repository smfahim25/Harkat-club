import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

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
                                    <label for="eventname" className="text-md font-semibold">Event name <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("eventname", {
                                        required: {
                                            value: true,
                                            message: 'Event name is Required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Only character acceptable'
                                        }
                                    })} placeholder="Event name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="eventname"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="col-span-6 lg:col-span-2">
                                    <label for="email" className="text-md font-semibold">Event description <span className='text-[#ee3c4d]'>*</span></label>
                                    <textarea type="email" placeholder="description" className="resize-none w-full rounded-md border-black border-[1px] text-gray-900" />
                                </div>
                                <div className="col-span-6 lg:col-span-3">
                                    <label for="email" className="text-md font-semibold">Upload Event Flyer (Image formate only) <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs" accept='image/png, image/jpeg,image/jpg' />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event coordinator <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='coordinator' placeholder="Event coordinator name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" /></div>
                                        <div> <input type="text" name='responsiblity' placeholder="responsiblity" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div><input type="text" name='cocoordinator' placeholder="Co-cordinator name" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='co-responsiblity' placeholder="co responsiblity" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label for="address" className="text-md font-semibold">Event Venue details <span className='text-[#ee3c4d]'>*</span></label>
                                    <input name="address" type="text" placeholder="Address" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8" />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Enter timings <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input name="startdate" type="date" placeholder="start date" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8" />
                                        <input name="enddate" type="date" placeholder="end date" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event Equipment required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='firstequipment' placeholder="equipment" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='firstperson' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div><input type="text" name='secondequipment' placeholder="equipment" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='secondperson' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event Preparatory work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='firstpreparatory' placeholder="work" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='firstpreparatory' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div><input type="text" name='' placeholder="Event name" className="w-full h-8 rounded-md focus:ring border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event Follow up work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" /></div>
                                        <div><input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" /></div>
                                        <div> <input type="text" name='eventname' placeholder="Event name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event prize</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md border-[1px] border-black text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event Funds <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event Guests</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md  border-black border-[1px] text-gray-900 h-8" />
                                        <input id="city" type="text" placeholder="" className="w-full rounded-md  border-black border-[1px] text-gray-900 h-8" />
                                    </div>
                                </div>
                                <div className='col-span-6 justify-self-center'>
                                    <label className='flex justify-center items-center'>
                                        <input type="checkbox" className="checkbox mr-2" />
                                        <span>Send email to attendees</span>
                                    </label>
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