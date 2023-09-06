import{useEffect,useState} from "react"
function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    return data;
}
export default useCurrencyInfo;
























//agar koi component mount ho or hum chate hai ki mount hone ke baad uska lifecycle event triggered ho to we use useEffect hook.
//It need one callback function and dependency error.
//all api call gives value in string format .it looks like json we need to convert in JSON format
//to hold the data we useState Hooks