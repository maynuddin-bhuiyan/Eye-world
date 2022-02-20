import { useState, useEffect } from "react";

const useData = () => {
    //State Declare
    const [creamra, setCreamra] = useState([]);


    //Loaed Data
    useEffect(() => {
        fetch('http://localhost:7000/security-camera')
            .then(res => res.json())
            .then(data => setCreamra(data))
    },
        []);

    return [creamra, setCreamra]
}

export default useData;