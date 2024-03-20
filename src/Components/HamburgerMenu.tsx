import React, { useState } from 'react';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col gap-2'>

            <div>
                <button onClick={toggleMenu} className=' flex justify-center items-center gap-1 flex-col'>
                    <div className='w-3 border-b-[2px] border-[#01377d]'></div>
                   <div className='w-3 border-b-[2px] border-[#01377d]'></div>
                    <div className='w-3 border-b-[2px] border-[#01377d]'></div>
                </button>
            </div>

            {isOpen && (
                <div className="">
                        <ul className="flex flex-col justify-start bg-white w-[40%] p-2 border-[2px] shadow-sm rounded-md text-sm gap-3 font-semibold fixed text-[#01377d] items-start w-fullS">
                            <a  href="">Profile Info</a>
                            <a  href="">WORK EXPERIENCE</a>
                            <a  href="">MY SKILLS</a>
                            <a  href="">EDUCATION</a>
                            <a  href="">PROJECTS</a>
                            <a  href="">VOLUNTEERING</a>
                            <a  href="">LANGUAGE</a>
                            <a  href="">HOBBIES</a>
                            <a  href="">CONTACT</a>
                        </ul>
                </div>
            )}

        </div>
    );
}