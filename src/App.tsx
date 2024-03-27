import ListGroup from './components/ListGroup'
import Alert from './components/Alert'

function App() {
  let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  return (
    <div>
      <Alert>
        Hello <span>world</span>
      </Alert>

      <ListGroup
        items={items}
        heading="Cities"
        onSelectedItem={handleSelectedItem}
      />
    </div>
  )
}

export default App
