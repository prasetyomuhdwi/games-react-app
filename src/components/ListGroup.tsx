function ListGroup() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  const getMessage = () => {
    return items.length === 0 && <p>item found</p>
  }

  return (
    // fragment
    <>
      <h1 className="p-4 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Test
      </h1>
      <ul className="w-56 menu bg-base-200 rounded-box">
        {getMessage()}
        {items.map((item) => (
          <li
            className="p-2"
            key={item}
            onClick={() => {
              console.log(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
