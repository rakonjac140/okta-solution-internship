import React from 'react'

const RowInfo = ({ row }) => {
    return (
        <div>
            <h1>Sifra: {row.sifra} Naziv: {row.naziv_firme}</h1> 
        </div>
    )
}

export default RowInfo
