import Greeting from './components/Greeting';
import Person from './components/Person';
import UserStatus from './components/UserStatus';
import Weather from './components/Weather';

const App = () => {
  return (
    <div>
      <Weather temp="31 " />
      <UserStatus loggedIn={true}  isAdmin={true} />
      <Greeting timeOfDay="afternoon" />
    </div>
  )
}

export default App;