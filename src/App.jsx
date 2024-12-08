import Header from "./components/Header/Header"
import JournalAddButton from "./components/JournalAddButton/JournalAddButton"
import JournalList from "./components/JournalList/JournalList"
import LeftPanel from "./Layouts/LeftPanel/LeftPanel"
import Body from "./Layouts/Body/Body"
import JournalForm from "./components/JournalForm/JournalForm"
import { useLocalStorage } from "./hooks/use-localstorage.hook"

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }))
}

function App() {

  const [items, setItems] = useLocalStorage('data');

  const addItems = (item) => {
    const newItem = {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: Math.floor(Math.random() * 1000),
    };
    setItems([...mapItems(items), newItem]);
  };

  return (
    <div className="app">

      <LeftPanel>

        <Header />

        <JournalAddButton />

        <JournalList items={mapItems(items)} />

      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItems} />
      </Body>

    </div>
  )
}

export default App
