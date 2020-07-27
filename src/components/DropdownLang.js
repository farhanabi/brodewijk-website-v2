import React, { useState } from 'react';
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const languageOptions = [
  { label: 'ID', value: 'id' },
  { label: 'EN', value: 'en' } 
]

function DropdownLang(props) {
  const initialLang = Cookies.get("locale") || "en";
  const defaultSelected = languageOptions.find(x => x.value === initialLang);

  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(defaultSelected);

  function changeLanguage(code) {
    if (i18n.language !== code.value) {
      Cookies.set("locale", code.value);
      i18n.changeLanguage(code.value);

      const nextLang = languageOptions.find(x => x.value === code.value);
      setLanguage(nextLang);
    }
  }

  const customStyles = {
    container: styles => ({ ...styles, display: 'inline', width: '47px', position: 'absolute' }),
    control: styles => ({ ...styles, backgroundColor: 'transparent', border: 'none', boxShadow: 'none', cursor: 'pointer' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    dropdownIndicator: styles => ({ ...styles, padding: '0' }),
    valueContainer: styles => ({ ...styles, padding: '0' }),
    singleValue: styles => ({ ...styles, color: props.white ? '#0C172F' : '#ffffff' }),
    input: styles => ({ ...styles, color: props.white ? '#0C172F' : '#ffffff' }),
    menu: styles => ({ ...styles, backgroundColor: props.white ? '#ffffff' : '#1C1C1C', 
                      border: '1px solid #2f2f2f', color: props.white ? '#0C172F' : '#ffffff' }),
    menuList: styles => ({ ...styles, backgroundColor: 'transparent' })
  }
  return(
    <Select
      options={languageOptions}
      value={language}
      styles={customStyles}
      onChange={(e) => changeLanguage(e)}
      isClearable={false}
      isSearchable={false}
    />
  )
}

export default DropdownLang;
