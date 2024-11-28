'use client';

 import  {signIn} from "next-auth/react";

export default function SignInComponents (){
    return (
        <div 
        className="flex items-center justify-center mb-4 mt-52"   //mt-52 give above space to button
        >
            {/* <h1> Sign In </h1> */}
            <button 
            className="border rounded-lg px-4 py-3 bg-blue-700 text-white "
            onClick={()=>signIn('github')} >Sign in with GitHub</button>
        </div>
    )
}