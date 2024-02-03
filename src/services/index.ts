import { FormDataTypes } from "@/types";

export async function addData(currentTab : string, formData: FormDataTypes) {
    try {
        const res = await fetch(`/api/${currentTab}/add`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData),
        });
   
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${currentTab}`);
        }
   
        return res.json();
    } catch (error) {
        console.error("Error in addData:", error);
    }
}

export async function getData(currentTab : string) {
    try {
        const res = await fetch(`/api/${currentTab}/get`, {
            method: "GET",
        });
   
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${currentTab}`);
        }
   
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export async function updateData(currentTab : string, formData: FormDataTypes) {
    try {
        const res = await fetch(`/api/${currentTab}/update`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(formData),
        });
   
        if (!res.ok) {
            throw new Error(`Failed to fetch data from ${currentTab}`);
        }
   
        return res.json();
    } catch (error) {
        console.error("Error in addData:", error);
    }
}

export async function login(formData: FormDataTypes) {
    try {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application-json",
            },
            body: JSON.stringify(formData),
        });

        if (!res.ok) {
            throw new Error("Failed to fetch data form login");
        }

        const result = await res.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}