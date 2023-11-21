import React from 'react';

const SucessModal = ({ email, visibility, setmodal }) => {
    return (
        <div
            className={`${
                visibility
                    ? 'h-screen w-full p-5 transform translate-x-0 transition-transform duration-300'
                    : 'h-screen w-full p-5 transform -translate-x-full transition-transform duration-300 hidden'
            }`}
        >
            <div className="flex justify-center flex-col h-screen mt-[-30%] gap-y-4">
                <img
                    height={50}
                    width={50}
                    src="design\assets\images\icon-success.svg"
                    alt="Sucess Icon"
                />
                <h1 className="text-5xl font-bold pt-3">
                    Thanks for Subscribing
                </h1>
                <p className="text-2xl">
                    A confirmation email has been sent to{' '}
                    <span className="font-bold">{email}</span>. Please open it
                    and click the button inside to confirm your subscription.
                </p>
            </div>
            <button
                onClick={() => setmodal(false)}
                className="text-xl cursor-pointer p-2 bg-black text-white rounded-md w-full"
            >
                Dismiss Message
            </button>
        </div>
    );
};

export default SucessModal;
