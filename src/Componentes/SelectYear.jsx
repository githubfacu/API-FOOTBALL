import React, { useState } from 'react'

const SelectYear = ({selectSeason}) => {

    const [selectedYear, setSelectedYear] = useState('2023');

    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedYear(selectedValue);
      selectSeason(selectedValue);
    };

  return (
    <div style={{display: 'flex', gap:'.5rem', padding: '.8rem 1.1rem',
    background: '#090909', borderRadius: '5px'}}>
        <legend style={{padding: '1px 0 0'}}>Temporada</legend>
        <select style={{
          borderRadius: '3px',
          background: 'rgb(24, 24, 24)',
          color: 'white'
        }} 
          id="year" onChange={handleChange} value={selectedYear}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
        </select>
    </div>
  )
}

export default SelectYear