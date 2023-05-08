import Link from 'next/link'
import React from 'react'


const ClientsPage = () => {
    const clients = [
        {id:'max', name:'Maximillian'},
        {id:'manu', name:"Manuel"}
    ]
  return (
    <div>
        <h1>Clients PAgfe</h1>
        <ul>
            {clients.map(item=>(
                <li key={item.id} ><Link 
                // href={`/clients/${item.id}`}
                href={{
                    pathname:'/clients/[id]',
                    query:{id:item.id}
                }}
                >{item.name}</Link></li>
            ))}
        </ul>
    </div>
  )
}

export default ClientsPage