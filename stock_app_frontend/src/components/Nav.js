import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
    <div className="Nav">
        <h1>The Stock App</h1>
        <NavLink className="Nav__link" to="/products">Products</NavLink>
        <NavLink className="Nav__link" to="/stock">Stock</NavLink>
        <NavLink className="Nav__link" to="/stock/add">Add Stock</NavLink>
    </div>
)