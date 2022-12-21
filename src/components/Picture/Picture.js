import React from 'react';

const Picture = (props) => {
    const { img } = props.post;
    return (
        <div>
            <section className="">
                <div className="">
                    <img src={img} alt="" className="w-full h-48 rounded" />
                </div>
            </section>
        </div>
    );
};

export default Picture;