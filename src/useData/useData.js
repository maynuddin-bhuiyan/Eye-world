import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [creamra, setCreamra] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('https://salty-citadel-01065.herokuapp.com/security-camera')
            .then(res => res.json())
            .then(data => setCreamra(data))
    },
        []);

    return [creamra, setCreamra]
}

export default useData;