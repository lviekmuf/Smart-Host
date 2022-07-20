import './App.css';
import PriceInfo from './containers/PriceInfo';
import RoomsInfo from './containers/RoomsInfo';
import RoomProvider from './context/RoomsContext';

const App = () => {
  return (
    <RoomProvider>
      <div className='flex justify-center items-center mt-32' >
        <div className='flex flex-col justify-center card shadow-xl bg-base-100'>
          <div className="card-body">
            <h1 className='text-3xl font-bold mb-5 card-title'>
              Smart Host
            </h1>
            <RoomsInfo />
            <PriceInfo />
          </div>
        </div>
      </div>
    </RoomProvider >
  );
}

export default App;
