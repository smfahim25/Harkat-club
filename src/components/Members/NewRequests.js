import React from 'react';
import { BiUserPlus, BiUserX } from 'react-icons/bi';
import { toast } from 'react-toastify';
import { useMemberDeleteMutation, useMemberUpdateMutation } from '../../app/EndPoints/baseEndpoints';
const NewRequests = (props) => {
    const { skills, member_Club_id } = props.member;
    const [memberUpdate, resInfo] = useMemberUpdateMutation();
    const [memberDelete, resInfo1] = useMemberDeleteMutation();
    const acceptMemberRequest = () => {
        const body = {
            club_member_id: member_Club_id, status: "active"
        }
        memberUpdate(body);
        toast.success("Join Request Accept successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    const deleteMemberRequest = () => {
        const body = {
            club_member_id: member_Club_id, status: "not accepted"
        }
        memberDelete(body);
        toast.success("Request delete successfully.", {
            position: toast.POSITION.BOTTOM_CENTER
        });
    }
    if (resInfo.isSuccess) {
        window.location.reload();
    }
    if (resInfo1.isSuccess) {
        window.location.reload();
    }
    return (
        <div>
            <div className='flex justify-between mt-2'>
                <div className="py-1 w-full flex flex-row gap-2 items-center overflow-hidden rounded-full">
                    <span className="flex-shrink-0 inline-flex item-center border justify-center leading-none rounded-full">
                        <div className="avatar">
                            <div className="w-12 rounded-full border-2">
                                <img src="https://placeimg.com/192/192/people" alt='member pictures' />
                            </div>
                        </div>
                    </span>
                    <div className="flex-1 p-2">
                        <p className="text-xl">Name</p>
                    </div>
                    <div className='mr-5 border rounded-full px-2 bg-accent text-xl'>{skills}</div>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <div onClick={acceptMemberRequest} className='text-3xl text-green-700 mr-3 hover:tooltip-accent hover:tooltip hover:tooltip-bottom' data-tip="Accept Request"><BiUserPlus /></div>
                    <div onClick={deleteMemberRequest} className='text-3xl text-red-700 mr-2 hover:tooltip-accent hover:tooltip hover:tooltip-bottom' data-tip="Delete Request"><BiUserX /></div>
                </div>
            </div>
        </div>
    );
};

export default NewRequests;