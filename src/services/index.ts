import { FormDataTypes } from "@/app/(private)/admin/page";

export async function addData(currentTab : string, formData: FormDataTypes) {
    try {
        const res = await fetch(`/api/${currentTab}/add`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        });
   
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${currentTab}`);
        }
   
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getData(currentTab : string) {
    try {
        const res = await fetch(`/api/${currentTab}/get`, {
            method: "GET"
        });
   
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${currentTab}`);
        }
   
        return res.json();
    } catch (error) {
        console.log(error);
    }
}