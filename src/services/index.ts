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