'use client';

 import  {signOut} from "next-auth/react";

export default function SignOutComponents (){
    return (
        <div 
        className="flex justify-center items-center mb-4">
            {/* <h1> Sign Out </h1> */}
            <button 
            className="border rounded-lg px-4 py-2 bg-blue-700 text-white "
            onClick={()=>signOut} >Sign Out</button>
        </div>
    )
}