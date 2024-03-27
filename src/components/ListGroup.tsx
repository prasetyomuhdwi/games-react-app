function ListGroup() {
  const items = ['test1', 'test2', 'test3', 'test4', 'test5']

  return (
    // fragment
    <>
      <h1 className="p-4 mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Test
      </h1>
      <ul className="w-56 menu bg-base-200 rounded-box">
        {items.map((item) => (
          <li className="p-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
