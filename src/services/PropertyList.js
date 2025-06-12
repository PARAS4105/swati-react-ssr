export const PropertyList = async () => {
  try {
    const response = await fetch("https://www.reecosys.com/api/Services/properties/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "User CXPNVIEIQMVJESPFKSKSMHNYNMVNXGYYHELVAZGNDVYHZUMKQM5891853093"
      },
      body: JSON.stringify({
        all_detail: "1",
        master_user_id: "373",
        logged_in_master_user_id: "373"
      })
    });

    // ✅ parse and return JSON data
    const data = await response.json();
    console.log("✅ API response in PropertyList.js:", data); // ADD THIS
    return data;

  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
};