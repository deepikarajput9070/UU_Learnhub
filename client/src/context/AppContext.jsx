import React from 'react'
import { useState,useEffect } from 'react'
import { createContext } from 'react'
import {dummyCourses } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
export const AppContext=createContext()


export const AppContextProvider=(props)=>{

    const currency=import.meta.env.VITE_CURRENCY
    const navigate=useNavigate()

    const [allCourses,setAllCourses]=useState([])
    const fetchAllCourses=async()=>{
        setAllCourses(dummyCourses)
    }
    useEffect( ()=>{
        fetchAllCourses()
    },[])

    //function to add avg rating to each course
        const calculateRating=(course)=>{
            if(course.courseRatings.length===0){
                return 0
        }
        let sum=0
        course.courseRatings.forEach((rating)=>{
            sum+=rating.rating
        }
    )
    return sum/course.courseRatings.length
    }

    const value={
        currency,
        allCourses,
        navigate,
        calculateRating
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}