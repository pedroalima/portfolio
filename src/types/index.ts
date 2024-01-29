import { Dispatch, SetStateAction } from "react";

export type FormDataTypes = {
    [key: string]: string
}

export interface DataMapTypes {
    [key: string]: FormDataTypes
}

export interface DataTypes {
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    handleSaveData: (data: string) => void,
}

export interface FormControlsDataTypes {
    controls: ControlsItemType[],
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
}

export interface ControlsItemType {
    name: string,
    type: string,
    label: string,
}