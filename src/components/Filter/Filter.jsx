export  const Filter = ({value, onChange})=>{
    return (<label htmlFor="filter"> <input type='text' name="filter" value={value} onChange={onChange}  />
    Find contacts by name</label>)
}