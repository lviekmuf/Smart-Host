import './App.css';
import RoomsInfo from './components/RoomsInfo';
import RoomProvider from './context/RoomsContext';

function App() {
  return (
    <RoomProvider>
      <h1 className="text-3xl font-bold underline text-red-600">
        Smart Host
      </h1>
    </RoomProvider>
  );
}

export default App;
