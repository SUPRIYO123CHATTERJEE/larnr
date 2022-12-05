import {createContext} from "react";

const Appcontext= createContext();

const Appprovider= ({children})=>{
    return (
    <Appcontext.Provider value="supriyo">
        {children}
    </Appcontext.Provider>
    )
}

export default Appprovider;
export {Appcontext};