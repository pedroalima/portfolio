import { useFormContext } from "react-hook-form";

export default function Input(
    { htmlFor, label, type, placeholder, regValue } : 
    { htmlFor: string, label: string, type: string, placeholder?: string, regValue: string }) {
    
    const { register } = useFormContext();
        
    return (
        <>
            <label 
                htmlFor={htmlFor} 
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >{label}</label>
            <input 
                type={type} 
                {...register(regValue)}
                placeholder={placeholder} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            />
        </>
    );
}