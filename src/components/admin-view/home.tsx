import { Dispatch, SetStateAction } from "react";

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
        name: "principal",
        placeholder: "",
        type: "text",
        label: "Menssagem Principal",
    },
    {
        name: "descricao",
        placeholder: "",
        type: "text",
        label: "Descrição",
    },
];

interface DataTypes {
    formData: { principal: string; descricao: string },
    setFormData: Dispatch<SetStateAction<{ principal: string; descricao: string }>>,
    handleSaveData: () => void,
}

export default function AdminHomeView({formData, setFormData, handleSaveData} : DataTypes) {
    

    console.log(formData);

    return (
        <div className="min-h-dvh flex justify-center items-center">
            <div className="bg-white rounded-md shadow-xl py-10 px-8 w-1/2 flex flex-col items-stretch gap-4">
                {controls && controls.map(controlItem => (
                    <div key={controlItem.name}>
                        <label 
                            htmlFor={controlItem.name}
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >{controlItem.label}</label>
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
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    </div>
                ))}

                <button 
                    onClick={handleSaveData}
                    className="bg-blue-500 self-center py-1 px-4 rounded-md text-white"
                >Adicionar</button>
            </div>
        </div>
    );
}