import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';

export const ListUsers =()=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>setUsers(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))

    },[])
    return(
        <div>
           
            {
             loading? <> 
                        <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>  
             :users.map(user=>
                                <ListGroup variant="flush">
                                <ListGroup.Item className="listUsers">{user.name}</ListGroup.Item>
                            </ListGroup>
                            )
            }
        </div>
    )
}
