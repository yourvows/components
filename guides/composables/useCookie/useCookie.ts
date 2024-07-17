import { Ref, ref } from "vue";

export default function useCookie(cookieName: string, domain?: string) {
    // Function to get the value of the cookie
    const getCookie = (): string | null => {
        const name = `${cookieName}=`;
        const decodedCookie = decodeURIComponent(document?.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            const cookie = cookieArray[i].trim();
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }

        return null;
    };

    // Function to set the value of the cookie
    const setCookie = (value: string, days: number): void => {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + days);
        const expires = `expires=${expirationDate.toUTCString()}`;
        const domainAttribute = domain
            ? `domain=${domain};`
            : ``;
        document.cookie = `${cookieName}=${value}; ${expires}; path=/; ${domainAttribute}`;
    };

    // Reactive ref for the cookie value
    const cookieValue: Ref<string | null> = ref(getCookie());

    // Function to update the cookie value and the ref
    const updateCookie = (value: string, days: number): void => {
        setCookie(value, days);
        cookieValue.value = value;
    };

    // Return the reactive ref and the function to update the cookie
    return {
        cookieValue,
        updateCookie,
    };
}
