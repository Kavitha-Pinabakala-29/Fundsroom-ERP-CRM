import { useEffect,useState } from "react";

import { getDashboard } from "../services/dashboardService";

export function useDashboard(){

const[data,setData]=useState<any>();

const[loading,setLoading]=useState(true);

useEffect(()=>{

getDashboard()

.then(setData)

.finally(()=>setLoading(false));

},[]);

return{

data,

loading,

};

}