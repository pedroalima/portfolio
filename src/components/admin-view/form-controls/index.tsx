import { Dispatch, SetStateAction } from "react";
import { ControlsItemType } from "../home";
import { FormDataTypes } from "@/app/(private)/admin/page";

interface DataTypes {
    controls: ControlsItemType[],
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
}

export default function FormControls({controls, formData, setFormData} : DataTypes) {
    return (
        <>
            {controls.map(controlItem => (
                <div key={controlItem.name}>
                    <label 
                        htmlFor={controlItem.name}
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >{controlItem.label}</label>
                    <input 
                        type={controlItem.type}
                        name={controlItem.name}
                        id={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                [controlItem.name]: e.target.value,
                            });
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                </div>
            ))}
        </>
    );
}
