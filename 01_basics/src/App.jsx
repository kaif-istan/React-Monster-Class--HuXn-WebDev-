import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Header from './components/Header'
import Main from './components/Main'
import ProductList from './components/ProductList';
import UserList from './components/UserList';
import WelcomeMessage from './components/WelcomeMessage';

const App = () => {
  return (
    <div>
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <WelcomeMessage /> */}
      <Greeting />
      <UserList />
      <ProductList />
    </div>
  )
}

export default App;