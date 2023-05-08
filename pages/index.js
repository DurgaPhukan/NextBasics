import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <h1>
        Home Page
        </h1>
        <ul>
            <li>
                <Link href="/portfolio">Portfolio</Link>
                <Link href='/clients'></Link>
            </li>
        </ul>

    </div>
  )
}

export default HomePage