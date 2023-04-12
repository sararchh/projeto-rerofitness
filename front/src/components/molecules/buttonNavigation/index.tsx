

export default function ButtonNavigation({ typesTrainingSelected, item, index, setTypesTrainingSelected }: any) {
  
  let classLi = typesTrainingSelected.includes(index) ? "-mb-px mr-1" : "mr-1";
  let classButton = "bg-white inline-block py-2 px-4 text-xl font-semibold text-slate-600 hover:text-slate-800"
  
  if (typesTrainingSelected.includes(index)) {
    classButton += "border-l border-t border-r border-l rounded-t"
  }

  return (
    <li className={classLi} key={index}>
      <button className={classButton} onClick={() => setTypesTrainingSelected(index)}>{item}</button>
    </li>
  )
}
