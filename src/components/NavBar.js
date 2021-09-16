import React from 'react'

const NavBar = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <a class="navbar-brand" href="/">Home</a>
          <a class="navbar-brand" href="/products">Products</a>          
          <a class="navbar-brand" href="/products/new">Add a Product</a>         
        </div>
      </nav>

    )
}

export default NavBar