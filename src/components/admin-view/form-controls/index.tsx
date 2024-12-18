import { FormControlsDataTypes } from "@/types";

export default function FormControls({ controls, formData, setFormData } : FormControlsDataTypes) {
    return (
        <>
            {controls.map(controlItem => (
                <div key={controlItem.name} className="w-full md:w-[80%]">
                    <label 
                        htmlFor={controlItem.name}
                        className="block mb-2 text-sm font-medium"
                    >{controlItem.label}</label>
                    {controlItem.type === "textarea" ? (
                        <textarea
                            name={controlItem.name}
                            id={controlItem.name}
                            value={formData[controlItem.name]}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    [controlItem.name]: e.target.value,
                                });
                            }}
                            rows={5}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                    ) : (
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
                    )}
                </div>
            ))}
        </>
    );
}
