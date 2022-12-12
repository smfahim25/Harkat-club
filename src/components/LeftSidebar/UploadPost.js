import React from 'react';

const UploadPost = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div>
            <h1 className='text-center text-xl mt-10 font-bold'>Upload Post</h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Choose images</span>
                        </label>
                        <input type="file" accept="image/*" className="file-input file-input-bordered w-full max-w-xs" />
                        <input className='btn mt-4 text-white' type="submit" value='Upload' />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UploadPost;