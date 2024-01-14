// import { getData } from "@/services";
import { useState } from "react";

type ControlsTypes = [
    ControlsItemType,
    ControlsItemType
]

interface ControlsItemType {
    name: string,
    placeholder: string,
    type: string,
    label: string,
}

const controls: ControlsTypes = [
    {
        name: "heading",
        placeholder: "Enter heading text",
        type: "text",
        label: "Enter heading text",
    },
    {
        name: "summary",
        placeholder: "Enter Career summary",
        type: "text",
        label: "Enter Career summary",
    },
];

export default function Home() {
    const [ formData, setFormData ] = useState({});

    const handleSaveData = () => {
        
    };

    console.log(formData);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <div className="bg-slate-300 py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                {controls && controls.map(controlItem => (
                    <div key={controlItem.name}>
                        <label htmlFor={controlItem.name}>{controlItem.label}</label>
                        <input 
                            type={controlItem.type}
                            name={controlItem.name}
                            id={controlItem.name}
                            onChange={(e) => {
                                setFormData(
                                    {
                                        ...formData,
                                        [controlItem.name]: e.target.value,
                                    }
                                );
                            }}
                            className="rounded-md p-1"
                        />
                    </div>
                ))}

                <button 
                    onClick={() => handleSaveData} 
                    className="bg-blue-500 self-center p-2 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}