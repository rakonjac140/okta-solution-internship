import React from 'react'

const Filter = ({handleFilterChange}) => {
    const handleChange = (event) => {
        handleFilterChange(event.target.value);
    }
    return (
        <div>
            <p>Filter by year</p>
            <select name="custom-select" onChange={e => handleChange(e)}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
      </div>
    )
}

export default Filter
