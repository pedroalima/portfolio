"use client";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
    const route = useRouter();

    const handleLogin = () => {
        Cookie.set("auth_token", "1as51f6as51fsa561ga6s5g1");
        route.push("/admin");
    };

    return (
        <div className="min-h-dvh flex justify-center items-center bg-gradient-to-r from-cyan-300 to-blue-600">
            <div className="border-b-2 pb-12 w-80 drop-shadow-lg">
                <div className="backdrop-blur-sm bg-white/30 min-h-96 px-10 py-8 rounded-2xl flex flex-col justify-between text-zinc-500 shadow-lg">
                    <h1 className="text-center text-4xl font-bold">Sign In</h1>

                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Username" 
                        className="p-2 rounded-md text-zinc-500 font-extralight"
                    />

                    <input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Password"
                        className="p-2 rounded-md text-zinc-500 font-extralight"
                    />
                    <div className="flex flex-col gap-2">
                        <button 
                            onClick={handleLogin}
                            type="button"
                            className="p-2 rounded-md bg-neutral-50 font-extralight w-full"
                        >Login</button>
                
                        <div className="flex gap-2">    
                            <input type="checkbox" name="remember" id="remember" />
                            <label htmlFor="remember" className="font-extralight text-sm">Remember me</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}