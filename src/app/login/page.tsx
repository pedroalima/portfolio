"use client";
import { initialLoginViewFormData } from "@/mock-data/";
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
        <div className="min-h-dvh min-w-full flex justify-center items-center bg[rgb(20, 29, 47)]">
            <div className="border-b-2 pb-12 w-80 drop-shadow-lg">
                <div className="backdrop-blur-sm bg-white/5 border border-white/10 min-h-96 px-10 py-8 rounded-2xl flex flex-col justify-between text-zinc-500 shadow-lg">
                    <h1 className="text-center text-4xl font-bold text-white">Login</h1>

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
                    </div>
                </div>
            </div>
        </div>
    );
}