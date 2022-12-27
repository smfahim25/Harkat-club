import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { useForm } from 'react-hook-form';

const RequestForm = () => {
    const { register, reset, setError, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div>
            <input type="checkbox" id="request-join" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative keep_scrolling mt-20">
                    <label htmlFor="request-join" className="btn btn-sm btn-circle absolute right-2 top-2 hover:text-white">✕</label>
                    <section className="p-3 bg-slate-100 text-black">
                        <div className="flex flex-row-reverse justify-center items-center">
                            <h1 className="text-5xl font-bold ml-5 leading-none sm:text-4xl xl:max-w-md text-gray-900">waka</h1>
                            <img alt="" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="object-cover w-20 h-20 rounded-full shadow" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                            <div className="grid gap-2 grid-cols-1 col-span-6 py-3">
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="mobilenumber" className="text-md font-semibold">Mobile Number <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("mobilenumber", {
                                        required: {
                                            value: true,
                                            message: 'Mobile number is Required'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Only numbers acceptable'
                                        }
                                    })} placeholder="Mobile Number" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="mobilenumber"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="previousclubname" className="text-md font-semibold">Previous Club Name <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("previousclubname", {
                                        required: {
                                            value: true,
                                            message: 'Previous Club Name is Required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Only letters acceptable'
                                        }
                                    })} placeholder="Previous Club Name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="previousclubname"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="col-span-6 lg:col-span-6">
                                    <label for="joinreason" className="text-md font-semibold">Join Reason <span className='text-[#ee3c4d]'>*</span></label>
                                    <textarea type="text" placeholder="join reason" {...register("joinreason", {
                                        required: {
                                            value: true,
                                            message: 'Join Reason is Required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Only letters acceptable'
                                        }
                                    })} className="resize-none w-full rounded-md border-black border-[1px] text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="joinreason"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="mobilenumber" className="text-md font-semibold">Film Experience <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("filmexperience", {
                                        required: {
                                            value: true,
                                            message: 'Film experience is Required'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Only numbers acceptable'
                                        }
                                    })} placeholder="Film Experience in years" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="filmexperience"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="skills" className="text-md font-semibold">Skills <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("skills", {
                                        required: {
                                            value: true,
                                            message: 'Skills is Required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Only letters acceptable'
                                        }
                                    })} placeholder="Skills" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="skills"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="clubexperience" className="text-md font-semibold">Club Experience <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="text" {...register("clubexperience", {
                                        required: {
                                            value: true,
                                            message: 'Club experience is Required'
                                        },
                                        pattern: {
                                            value: /[0-9]/,
                                            message: 'Only numbers acceptable'
                                        }
                                    })} placeholder="Club Experience in years" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="clubexperience"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className='col-span-6'>
                                    <label className='flex justify-center items-center mt-2'>
                                        <input type="checkbox" value='emailchecked' className="checkbox mr-2" {...register("emailcheck", {
                                        })} />
                                        <span className='font-semibold'>I accept all terms and condition of Club</span>
                                    </label>
                                </div>
                                <div className='col-span-6 justify-self-center'>
                                    <input className='uppercase font-semibold px-8 rounded-xl cursor-pointer py-2 mt-4 text-white' style={{ backgroundColor: "#ee3c4d" }} type="submit" value='Request to join' />
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RequestForm;