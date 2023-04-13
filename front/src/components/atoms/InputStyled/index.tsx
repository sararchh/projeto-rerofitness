import React from 'react';

interface InputStyledProps {
  placeholder: string,
  name: string,
  value: string,
  type?: string,
  w?: string,
  onChangeText: (value: string) => void,
}

const InputStyled: React.FC<InputStyledProps> = ({ type = "text", placeholder, name, value, onChangeText, w = "w-64" }) => {

  let classInput = "h-12 leading-5 relative my-2 py-2 px-4 mt-2 rounded text-gray-800 bg-gray-100  border-none overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 "
  
  return (
    <input
      className={classInput + w}
      type={type}
      name={name}
      value={value}
      onChange={(e: any) => onChangeText(e.target.value)}

      placeholder={placeholder}
    />
  );
}

export default InputStyled;