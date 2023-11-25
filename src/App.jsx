import { useState } from 'react';
// import SucessModal from './SucessModal'; 
import modalContext from modalContext

export default function App() {
    const [email, setemail] = useState('');
    const [modal, setmodal] = useState(false);
    const [error, seterror] = useState(false);
    function subscribe(event) {
        event.preventDefault();
        if (email.length == 0 || !email.includes('@')) {
            seterror(true);
            return;
        }
        setmodal(true);

        // setemail('');
    }
    return (
        <>
            {/* Container  */}
            <div
                className={
                    modal
                        ? 'hidden'
                        : ' w-full h-screen block sm:grid grid-cols-2'
                }
            >
                {/* Picture  */}
                <div className="w-full h-screen">
                    <img
                        className="w-full object-cover sm:hidden"
                        src="design\assets\images\illustration-sign-up-mobile.svg"
                        alt="Hero Image"
                    />
                    <img
                        className="w-full object-cover hidden sm:block"
                        src="design\assets\images\illustration-sign-up-desktop.svg"
                        alt="Hero Image"
                    />
                </div>
                {/* Form  */}
                <div className="px-5 w-full flex flex-col gap-y-3">
                    <div className="pt-4">
                        <div className="font-bold text-5xl pl-4">
                            Stay Updated!
                        </div>
                    </div>
                    <p>
                        Join 60,000+ product managers receiving monthly updates
                        on:
                    </p>
                    <ul>
                        <li className="flex gap-x-2">
                            <img
                                src="design\assets\images\icon-list.svg"
                                alt="Icon List"
                            />
                            <p>Product discovery and building what matters</p>
                        </li>
                        <li className="flex gap-x-2">
                            <img
                                src="design\assets\images\icon-list.svg"
                                alt="Icon List"
                            />
                            <p>Measuring to ensure updates are a success</p>
                        </li>
                        <li className="flex gap-x-2">
                            <img
                                src="design\assets\images\icon-list.svg"
                                alt="Icon List"
                            />
                            <p>And much more!</p>
                        </li>
                    </ul>
                    <div className="flex flex-col relative">
                        <form
                            onSubmit={(e) => subscribe(e)}
                            className="flex flex-col relative"
                        >
                            <label>Email address</label>
                            <input
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                placeholder="email@compnay.com"
                                type="email"
                                className={
                                    error
                                        ? 'bg-red-200/60 text-red-500 rounded-md border border-red-500'
                                        : 'p-1 border border-gray-300 rounded-md'
                                }
                            />
                            <p
                                className={
                                    error
                                        ? 'text-red-500 absolute right-1'
                                        : 'hidden'
                                }
                            >
                                Valid email required
                            </p>
                            <button
                                type="submit"
                                className="cursor-pointer p-2 bg-blue-900 text-white rounded-md w-full"
                            >
                                Subscribe to monthly newsletter
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {modal && (
                <SucessModal
                    email={email}
                    visibility={true}
                    setmodal={setmodal}
                />
            )}
        </>
    );
}
