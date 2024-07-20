import React, { useContext, useReducer,useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const intialState = {
    name:"",
    image: ""
};


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer,intialState);

    const updateHomePage = () => {
        return dispatch(
            {
                type: "HOME_UPDATE",
                payload:{
                    name: "SHAWN TECH",
                    image: "./images/hero.svg"
                }
            }
        )
    }
    
    const updateAboutPage = () => {
        return dispatch(
            {
                type: "ABOUT_UPDATE",
                payload:{
                    name: "SHAWN TECH TEAM",
                    image: "./images/about.svg"
                },
            }
        );
    }

    // // call the api
    // const getservices= "";
    // useEffect(() =>{
    //     getServices(API);
    // },[])

    return <AppContext.Provider value={{...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
}

//global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}
 
export { AppContext, AppProvider,useGlobalContext }