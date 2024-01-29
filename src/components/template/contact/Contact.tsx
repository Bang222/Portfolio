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
    const [loading,setLoading] = useState<boolean>(false)
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if(!name.trim()) {
            setNameError('Name can not null')
            setIsSubmitted(false)
        } else{
            setNameError('')
        }
        if(!email.trim() || !regexEmail.test(email)) {
            setEmailError('Email validate')
            setIsSubmitted(false)
        }else{
            setEmailError('')
        }
        if(name.trim() && email.trim()){
            setIsSubmitted(true)
        }
        if(isSubmitted){
            const formData = new FormData();
            const dateNow = new Date();
            formData.append("Name", name);
            formData.append("Email", email);
            formData.append("Message",message);
            formData.append("TimeSended",dateNow.toLocaleDateString('es-uk',options))
            setLoading(true)
            fetch(
                `https://sheet.best/api/sheets/78dfd9cd-5996-49f3-82c6-8b2e0b81251b`,
                {
                    method: "POST",
                    body: formData
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    setName("")
                    setEmail("")
                    setMessage("")
                    setLoading(false)
                    // setIsSubmitted(false)
                    alert("I recived data form you i will contact again,Thank you!");
                })
                .catch((error) => {
                    setLoading(false)
                    // setIsSubmitted(false)
                    alert("Can not send data please try again")
                    // setLoading(false)
                    // alea(error.message);
                });
        }
    }
    return (
        <div className={'mt-7 pb-10'}>
            <Title title={'Contact'} textPosition={'text-left'}/>
            <div className={'flex justify-center'}>
                <div className={'w-[90vw] lg:w-[30vw] px-7 py-7 lg:py-10 shadow-xl rounded-lg bg-white'}>
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
                        {loading ? <div role="status" className={"flex justify-center"}>
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-blue-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div> :
                            <button type="submit"
                                    className="mb-6 inline-block w-full rounded  bg-blue-400 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0">
                                Send
                            </button>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;