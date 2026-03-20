import axios from "axios";
axios.defaults.withCredentials = true;
/**
 * Fetches the currently authenticated user from the backend.
 * Uses the JWT token stored in localStorage for Authorization.
 *
 * @returns {Promise<object>} The user data object from the API.
 * @throws {Error} Throws with status=401 when token is missing or invalid,
 *                 so the calling component can redirect to /signin.
 */
const CallToEndUser = async () => {

    const response = await axios.get("http://localhost:8080/auth/me", {
        withCredentials: true,
    });

    return response.data;
};

export { CallToEndUser };
