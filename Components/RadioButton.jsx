function RadioButton({value , ChangeStatus , checked }) {
    return (
      <>
        <div className="flex items-center pl-3">
            <input id="list-radio-license" checked={checked} onChange={ChangeStatus} type="radio" value={value} name="list-radio" 
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
            <label htmlFor="list-radio-license" className="w-full py-3 ml-2 text-sm font-medium text-white">{value}</label>
        </div>
      </>
    );
  }
  
  export default RadioButton;