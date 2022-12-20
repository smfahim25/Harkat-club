import React from 'react';

const Picture = (props) => {
    const { img } = props.post;
    return (
        <div>
            <section className="py-6 mt-6">
                <div className="">
                    <img src={img} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Picture;