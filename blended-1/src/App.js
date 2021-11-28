import './App.css';
import List from './components/List/List';
import Title from './components/Title/Title';
import NotFound from './components/NotFound/NotFound';
import db from './db.json';

function App() {
  const { cars } = db;
  // const cars = undefined;
  const title = 'HI, USER!';

  return (
    <div className='App'>
      <Title title={title} />
      {cars?.length ? (
        <List isOnline={true} cars={cars} />
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default App;
