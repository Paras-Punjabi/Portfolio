"use client"
/* eslint-disable react-hooks/exhaustive-deps */
import {useState, useEffect} from 'react'

export type MessageType = {
    role: string,
    message: string
}

const useLocalStorage = (key:string,initalValue:MessageType[] = []) => {
    const [data,setData] = useState<MessageType[]>(initalValue);
    
    useEffect(()=>{
        if(localStorage.getItem(key) === null){
            localStorage.setItem(key,JSON.stringify(data));
        }
        else{
            let raw = JSON.parse(localStorage.getItem(key) as string) as MessageType[];
            setData(raw);
        }
    },[]);

    const setDataInLS = (newData:MessageType[]) => {
        localStorage.setItem(key,JSON.stringify(newData));
        setData(newData);
    }

    return {data,setDataInLS};
}

export default useLocalStorage