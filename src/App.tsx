import './App.css';
import PriceInfo from './components/PriceInfo';
import RoomsInfo from './components/RoomsInfo';
import RoomProvider from './context/RoomsContext';

const App = () => {
  return (
    <RoomProvider>
      <div className='flex justify-center items-center mt-32' >
        <div className='flex flex-col justify-center'>
          <h1 className='text-3xl font-bold mb-5'>
            Smart Host
          </h1>
          <RoomsInfo />
          <PriceInfo />
        </div>
      </div>
    </RoomProvider>
  );
}

export default App;
