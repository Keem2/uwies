import { ReactElement } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";


//IF ROUTE SHOULD NOT BE ACCESSIBLE WITHOUT LOGGING IN FIRST
//WRAP COMPONENT WITH THIS 

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    //user object in localstorage
    const [user] = useLocalStorage("sb-uovudeannppdcnqrmfgu-auth-token");

    //if token exists, return children. Else, show nothing
    if (user) return children;




}