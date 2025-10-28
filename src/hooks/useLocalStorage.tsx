"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'

export type MessageType = {
    role: string,
    message: string
}

const useLocalStorage = (key:string,initalValue:MessageType[] = []) => {
    const [data,setData] = useState<MessageType[]>(initalValue);

    const updateFromLS = ()=>{
        if(localStorage.getItem(key) === null){
            setData([{role:"bot",message:"Hey there 👋 I'm ParasBot — Paras's AI assistant! How can I help you today"}])
        }
        setData(JSON.parse(localStorage.getItem(key) as string) as MessageType[]);
    }
    
    useEffect(()=>{
        if(localStorage.getItem(key) === null){
            localStorage.setItem(key,JSON.stringify(data));
        }
        else{
            let raw = JSON.parse(localStorage.getItem(key) as string) as MessageType[];
            setData(raw);
        }

        window.addEventListener("focus",updateFromLS);
        return ()=>{
            window.removeEventListener("focus",updateFromLS);
        }
    },[]);

    const setDataInLS = (newData:MessageType[]) => {
        localStorage.setItem(key,JSON.stringify(newData));
        setData(newData);
    }

    return {data,setDataInLS};
}

export default useLocalStorage