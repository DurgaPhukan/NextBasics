import React from 'react'
import { useRouter } from 'next/router'

const  SelectedClientProjectPage= () => {
    const router = useRouter();
    console.log(router.pathname)
    console.log(router.query);
  return (
    <div>The Project Page for a specific Project for selected client</div>
  )
}

export default SelectedClientProjectPage