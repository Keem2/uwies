<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { ReactElement, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";


//IF ROUTE SHOULD NOT BE ACCESSIBLE WITHOUT LOGGING IN FIRST
//WRAP COMPONENT WITH THIS 

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    const navigate = useNavigate()
    //user object in localstorage
    const [user] = useLocalStorage("sb-uovudeannppdcnqrmfgu-auth-token");

    //if token exists, return children. Else, redirect user
    if (user) return children

    useEffect(() => {
        navigate("/")
    }, [])

=======
import { useNavigate } from "react-router-dom";
import { ReactElement, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";


//IF ROUTE SHOULD NOT BE ACCESSIBLE WITHOUT LOGGING IN FIRST
//WRAP COMPONENT WITH THIS 

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
    const navigate = useNavigate()
    //user object in localstorage
    const [user] = useLocalStorage("sb-uovudeannppdcnqrmfgu-auth-token");

    //if token exists, return children. Else, redirect user
    if (user) return children

    useEffect(() => {
        navigate("/")
    }, [])

>>>>>>> 7a8c18c08893ec916c76daa31dde93ed43f2d194
}