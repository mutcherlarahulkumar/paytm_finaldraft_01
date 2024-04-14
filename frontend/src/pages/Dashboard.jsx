import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"

export const Dashboard = () => {

    const [balance,setBalance] = useState("");

    async function getdata(){
        await axios.get("http://localhost:3000/api/v1/account/balance",{
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
        .then((response)=>{
                console.log(typeof(response.data));
                setBalance(response.data.balance)
            })
        
    }
    getdata();
        

    return <div>
        <Appbar />
        <div className="m-8">
            <Balance value={balance} />
            <Users />
        </div>
    </div>
}