export const BASE_URL = "http://localhost:3004/api";

export const loginUser = async (credentials) => {
    try {
        const response = await fetch("http://localhost:3004/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: credentials.email, // Make sure to send the email field
                password: credentials.password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed.");
        }

        const data = await response.json();
        return data; // Expected { token: "JWT_TOKEN" }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export async function storeCarDetails(carDetails, images) {
    const formData = new FormData();
    formData.append("model", carDetails.model);
    formData.append("price", carDetails.price);
    formData.append("phone", carDetails.phone);
    formData.append("city", carDetails.city);

    images.forEach((image) => {
        formData.append("attachments", image);
    });
    const token = localStorage.getItem("authToken");
      
    if (!token) {
      throw new Error("You must log in first");
    }

    const response = await fetch(`${BASE_URL}/car/add`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData,
    });

    // if (!response.ok) {
    //     console.log(response.message);
        
    //     throw new Error("Failed to store car details");
    // }

    return await response.json();
}
