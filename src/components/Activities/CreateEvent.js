import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

const CreateEvent = () => {
    const { register, reset, setError, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const file = data.picture[0];
        if (file.type !== "image/jpg" || file.type !== "image/jpeg" || file.type !== "image/png") {
            setError("picture", {
                type: "filetype",
                message: "Only image are valid."
            });
            return;
        }
        alert(JSON.stringify(data));
        reset();
    }
    return (
        <div>
            <input type="checkbox" id="create-event" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box  w-11/12 max-w-5xl relative mt-20">
                    <label htmlFor="create-event" className="btn btn-sm btn-circle absolute right-2 top-2 hover:text-white">✕</label>
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
                                            message: 'Only letters acceptable'
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
                                    <textarea type="text" placeholder="description" {...register("eventdescription", {
                                        required: {
                                            value: true,
                                            message: 'Event Description is Required'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]/,
                                            message: 'Only letters acceptable'
                                        }
                                    })} className="resize-none w-full rounded-md border-black border-[1px] text-gray-900" />
                                    <ErrorMessage
                                        errors={errors}
                                        name="eventdescription"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="col-span-6 lg:col-span-3">
                                    <label for="upload Image" className="text-md font-semibold">Upload Event Flyer (Image formate only) <span className='text-[#ee3c4d]'>*</span></label>
                                    <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs p-0" name='picture' {...register("picture", {
                                        required: {
                                            value: true,
                                            message: 'Event Flyer is Required'
                                        }
                                    })} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="picture"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event coordinator <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input type="text" name='coordinator' placeholder="Event coordinator name" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900"  {...register("coordinator", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Coordinator is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="coordinator"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='responsiblity' placeholder="responsiblity" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900"  {...register("coordinator_responsiblity", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Coordinator responsiblity is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="coordinator_responsiblity"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='cocoordinator' placeholder="Co_cordinator name" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("co-coordinator", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Co-Coordinator is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="co-coordinator"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='co-responsiblity' placeholder="co responsiblity" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("co_coordinator_responsiblity", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Co-Coordinator responsiblity is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="co_coordinator_responsiblity"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-6">
                                    <label for="address" className="text-md font-semibold">Event Venue details <span className='text-[#ee3c4d]'>*</span></label>
                                    <input name="address" type="text" placeholder="Address" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8"  {...register("eventvenue", {
                                        required: {
                                            value: true,
                                            message: 'Event venue details is Required'
                                        },
                                    })} />
                                    <ErrorMessage
                                        errors={errors}
                                        name="eventvenue"
                                        render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                    />
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2 date-container-event">
                                    <label for="city" className="text-md font-semibold">Enter timings <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input name="startdate" type="date" placeholder="start date" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8"  {...register("eventstartdate", {
                                                required: {
                                                    value: true,
                                                    message: 'Event start date is Required'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="eventstartdate"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input name="enddate" type="date" placeholder="end date" className="w-full rounded-md border-black border-[1px] text-gray-900 h-8"  {...register("eventenddate", {
                                                required: {
                                                    value: true,
                                                    message: 'Event end date is Required'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="eventenddate"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event Equipment required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input type="text" name='firstequipment' placeholder="equipment" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900"  {...register("firstquipment", {
                                                required: {
                                                    value: true,
                                                    message: 'Equipment is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstquipment"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='firstperson' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900"  {...register("firstperson", {
                                                required: {
                                                    value: true,
                                                    message: 'Person in charge is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstperson"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='secondequipment' placeholder="equipment" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("secondequipment", {
                                                required: {
                                                    value: true,
                                                    message: 'Equipment is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="secondequipment"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div> <input type="text" name='secondperson' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("secondperson", {
                                            required: {
                                                value: true,
                                                message: 'Person in charge is Required'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: 'Only letters acceptable'
                                            }
                                        })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="secondperson"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label for="eventname" className="text-md font-semibold">Event Preparatory work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div><input type="text" name='firstpreparatory' placeholder="work" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("firstpreparatory", {
                                            required: {
                                                value: true,
                                                message: 'Event Preparatory work is Required'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: 'Only letters acceptable'
                                            }
                                        })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstpreparatory"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            /></div>
                                        <div> <input type="text" name='firstpreparatoryperson' placeholder="person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("firstpreparatoryperson", {
                                            required: {
                                                value: true,
                                                message: 'Person in charge is Required'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: 'Only letters acceptable'
                                            }
                                        })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstpreparatoryperson"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div><input type="text" name='' placeholder="work" className="w-full h-8 rounded-md focus:ring border-black border-[1px] text-gray-900" {...register("secondpreparatory", {
                                            required: {
                                                value: true,
                                                message: 'Event Preparatory work is Required'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: 'Only letters acceptable'
                                            }
                                        })} /> <ErrorMessage
                                                errors={errors}
                                                name="secondpreparatory"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            /></div>
                                        <div> <input type="text" name='eventname' placeholder="Person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("secondpreparatoryperson", {
                                            required: {
                                                value: true,
                                                message: 'Person in charge is Required'
                                            },
                                            pattern: {
                                                value: /[A-Za-z]/,
                                                message: 'Only letters acceptable'
                                            }
                                        })} /> <ErrorMessage
                                                errors={errors}
                                                name="secondpreparatoryperson"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            /></div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-3">
                                    <label className="text-md font-semibold">Event Follow up work required</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input type="text" name='' placeholder=" Event follow up work required" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("firstworkrequire", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Follow up work is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstworkrequire"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='eventname' placeholder="Person in charge" className="w-full h-8 rounded-md border-black border-[1px] text-gray-900" {...register("firstpersonrequire", {
                                                required: {
                                                    value: true,
                                                    message: 'Person in charge is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="firstpersonrequire"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='eventname' placeholder="Event follow up work require" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" {...register("secondworkrequire", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Follow up work is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="secondworkrequire"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input type="text" name='eventname' placeholder="Person in charge" className="w-full h-8 rounded-md border-[1px] border-black text-gray-900" {...register("secondpersonrequire", {
                                                required: {
                                                    value: true,
                                                    message: 'person in charge is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="secondpersonrequire"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event prize</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input type="text" placeholder="Prize Name" className="w-full rounded-md border-[1px] border-black text-gray-900 h-8" {...register("Prizename", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Prize is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="Prizename"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input id="city" type="text" placeholder="Person in charge" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" {...register("personprize", {
                                                required: {
                                                    value: true,
                                                    message: 'Person in charge is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="personprize"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event Funds <span className='text-[#ee3c4d]'>*</span></label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input id="city" type="text" placeholder="funds amount" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" {...register("eventfunds", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Funds is Required'
                                                },
                                                pattern: {
                                                    value: /[0-9]/,
                                                    message: 'Only numbers acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="eventfunds"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input id="city" type="text" placeholder="Fund source" className="w-full rounded-md border-[1px]  border-black text-gray-900 h-8" {...register("fundsource", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Fund source is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="fundsource"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-6 sm:col-span-2">
                                    <label for="city" className="text-md font-semibold">Event Guest name</label>
                                    <div className='grid grid-cols-2 gap-3'>
                                        <div>
                                            <input id="city" type="text" placeholder="Event guest name" className="w-full rounded-md  border-black border-[1px] text-gray-900 h-8" {...register("guestname", {
                                                required: {
                                                    value: true,
                                                    message: 'Event Guest name is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="guestname"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                        <div>
                                            <input id="city" type="text" placeholder="Short title" className="w-full rounded-md  border-black border-[1px] text-gray-900 h-8" {...register("titleofguest", {
                                                required: {
                                                    value: true,
                                                    message: 'Guest short title is Required'
                                                },
                                                pattern: {
                                                    value: /[A-Za-z]/,
                                                    message: 'Only letters acceptable'
                                                }
                                            })} />
                                            <ErrorMessage
                                                errors={errors}
                                                name="titleofguest"
                                                render={({ message }) => <p className='text-[#ee3c4d]'>{message}</p>}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-6 justify-self-center'>
                                    <label className='flex justify-center items-center'>
                                        <input type="checkbox" value='emailchecked' className="checkbox mr-2" checked {...register("emailcheck", {
                                        })} />
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
        </div >
    );
};

export default CreateEvent;