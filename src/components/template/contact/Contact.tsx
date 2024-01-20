import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Title from "../../molecules/title/Title";

interface propsContact {
}

const Contact: FC<propsContact> = () => {
    const [name,setName] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [isSubmitted,setIsSubmitted] = useState<boolean>(false)
    const [nameError,setNameError] = useState<string>('')
    const [emailError,setEmailError] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!name.trim()) {
            setNameError('Name can not null')
            setIsSubmitted(false)
        } else{
            setNameError('')
        }
        if(!email.trim()) {
            setEmailError('Email can not null')
            setIsSubmitted(false)
        }else if(!regexEmail.test(email)){
            setEmailError('Email not validate')
        }else{
            setEmailError('')
        }
        if(name.trim() && email.trim()){
            setIsSubmitted(true)
        }
        if(isSubmitted){

        }
    }
    return (
        <div className={'mt-7 pb-10'}>
            <Title title={'Contact'} textPosition={'text-left'}/>
            <div className={'flex justify-center'}>
                <div className={'w-[90vw] lg:w-[30vw] px-7 lg:py-10 shadow-xl rounded-lg bg-white'}>
                    <form  onSubmit={handleSubmit}>
                        <div className="relative mb-6 " data-te-input-wrapper-init>
                            <input
                                type="text"
                                className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linea focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                            />
                            <label
                                className={`pointer-events-none ${name ? 'peer-valid:-translate-y-[0.9rem] peer-valid:scale-[0.8] peer-valid:bg-white peer-valid:px-2':''} absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-neutral-500 leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem]  peer-focus:bg-white peer-focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
                                htmlFor="name">Name
                            </label>
                            <p className={'text-red-500 text-xs mt-2 ml-1'}>{nameError}</p>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                            <input type="string"
                                   className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear  focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                                   id="email"
                                   placeholder="Email address"
                                   value={email}
                                   onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}

                            />
                            <label
                                className={`pointer-events-none ${email ? 'peer-valid:-translate-y-[0.9rem] peer-valid:scale-[0.8] peer-valid:bg-white peer-valid:px-2':''} absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] text-neutral-500 leading-[1.6] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem]  peer-focus:bg-white peer-focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none`}
                                htmlFor="email">Email address
                            </label>
                            <p className={'text-red-500 text-xs mt-2 ml-1'}>{emailError}</p>
                        </div>
                        <div className="relative mb-6" data-te-input-wrapper-init>
                        <textarea
                            className={`peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0`}
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Your message"
                            value={message}
                            onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        ></textarea>
                            <label htmlFor="exampleFormControlTextarea1"
                                   className={`pointer-events-none ${message ? 'peer-valid:-translate-y-[0.9rem] peer-valid:scale-[0.8] peer-valid:bg-white peer-valid:px-2':''} absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:bg-white peer-focus:px-2 peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none`}>Message</label>
                        </div>
                        <button type="submit"
                                className="mb-6 inline-block w-full rounded  bg-blue-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;