import { Dispatch, SetStateAction } from "react";

export interface FormDataTypes {
    [key: string]: string
}

export interface DataMapTypes {
    [key: string]: FormDataTypes
}

export interface AllDataTypes {
    [key: string]: FormDataTypes[]
}

export interface DataTypes {
    formData: FormDataTypes,
    setFormData: Dispatch<SetStateAction<FormDataTypes>>,
    handleSaveData: (data: string) => void,
}

export interface DataTypesAsync {
    data: FormDataTypes[],
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

export interface ClientSectionDataTypes {
    success: boolean,
    data: FormDataTypes[]
}

export interface NavbarMenuTypes {
    currentSelectedTab: string,
    setCurrentSelectedTab: Dispatch<SetStateAction<string>>,
    resetFormData: () => void,
    setIsUpdate: Dispatch<SetStateAction<boolean>>
}