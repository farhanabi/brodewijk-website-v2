import React, { useState } from 'react';
import Select from 'react-select'

const langOptions = [
  { label: 'ID', value: 'id' },
  { label: 'EN', value: 'en' } 
]

function DropdownLang(props) {
  const [lang, setLang] = useState({ label: 'EN', value: 'en' })
  const customStyles = {
    container: styles => ({ ...styles, display: 'inline', width: '75px', position: 'absolute' }),
    control: styles => ({ ...styles, backgroundColor: 'transparent', border: 'none', boxShadow: 'none', cursor: 'pointer' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    indicatorContainer: styles => ({ ...styles, padding: '8px 12px' }),
    valueContainer: styles => ({ ...styles, padding: '0 17px' }),
    singleValue: styles => ({ ...styles, color: '#ffffff' }),
    menu: styles => ({ ...styles, backgroundColor: '#ffffff', border: '1px solid #2f2f2f', color: '#2f2f2f' }),
    menuList: styles => ({ ...styles, backgroundColor: 'transparent' })
  }
  return(
    <Select
      options={langOptions}
      value={lang}
      styles={customStyles}
      onChange={(e) => setLang(e)}
      isClearable={false}
    />
  )
}

export default DropdownLang;
