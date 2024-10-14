"use client";

import{useState,useEffect} from 'react';

const ItemCard =({title,companyName,location,startDate,endDate})=>{
    return(
        <div className="flex flex-col gap-2 bg-white p-4 rounded-md shadow-md my-2">
            <h3 className='text-lg font-bold'>{title}</h3>
            <p>company:{companyName}</p>
            <p>location:{location}</p>
            <p>Start Date:{startDate}</p>
        <p>End Date:{endDate}</p>
        </div>
    );
};

export default function Exp(){
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    async  function fetchData(){
    try{let res =await fetch('api/exp');
        let result =await res.json();
        setData(result.data);
    }catch(error){
        console.error("Error fetching data:",error);
        setIsLoading(false)
    }
    }
useEffect(()=>{
    fetchData();

},[]);
return (
    <div className='container mx-auto p-8'>
        <h2 className='text-center text-2xl font-bold mb-4'>Work List</h2>
        {isLoading ? (
            <p className='text-center'>loading data...</p>
        ):(
            data.length> 0 ?(
                data.map(item=>(
                    <ItemCard key={item._id}
                    title={item.title}
                    companyName={item.companyName}
                    location={item.location}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    />
                ))
            ):(
                <p className='text-center'>No work data availabel.</p>
            )
        )}
    </div>
);
}