import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
            <nav>
                <h3>Shop</h3>
                <ul className='nav-links'>
                    <li>Home</li>
                    <li>Contacts</li>
                    <li>Cart</li>
                </ul>
                
            </nav>
        </div>
    )
}

export default Header
