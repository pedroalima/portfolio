"use client";
import { initialLoginViewFormData } from "@/mock-data/admin";
import { login } from "@/services";
import { ControlsItemType } from "@/types";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";

const controls: ControlsItemType[] = [
    {
        name: "username",
        type: "text",
        label: "Usuário",
    },
    {
        name: "password",
        type: "password",
        label: "Senha",
    },
];

export default function Login() {
    const route = useRouter();
    
    const [ loginFormData, setLoginFormData ] = useState(initialLoginViewFormData);

    async function handleLogin() {
        const res = await login(loginFormData);
        console.log(res, "Login");
        
        if (res?.success) {
            Cookie.set("auth_token", "1as51f6as51fsa561ga6s5g1");

            route.push("/admin");
        }
    }

    return (
        <div className="min-h-dvh flex justify-center items-center bg-gradient-to-r from-cyan-300 to-blue-600">
            <div className="border-b-2 pb-12 w-80 drop-shadow-lg">
                <div className="backdrop-blur-sm bg-white/30 min-h-96 px-10 py-8 rounded-2xl flex flex-col justify-between text-zinc-500 shadow-lg">
                    <h1 className="text-center text-4xl font-bold">Sign In</h1>

                    {controls.map(controlItem => (
                        <input 
                            key={controlItem.name}
                            value={loginFormData[controlItem.name]}
                            onChange={(e) => {
                                setLoginFormData({
                                    ...loginFormData,
                                    [controlItem.name]: e.target.value
                                });
                            }}
                            type={controlItem.type}
                            name={controlItem.name}
                            id={controlItem.name}
                            placeholder={controlItem.label}
                            className="p-2 rounded-md text-zinc-500 font-extralight"
                        />
                    ))}
                    
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