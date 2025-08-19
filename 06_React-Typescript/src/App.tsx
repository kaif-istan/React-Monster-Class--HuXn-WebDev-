import AdminInfo from "./components/AdminInfo";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <div>
      <h1>User Info 👇</h1>
      <UserInfo
        username="Kaif"
        email="kaifbiber@gmail.com"
        age={23}
        location={["Earth", "India"]}
      />
      <h1>Admin Info 👇</h1>
      <AdminInfo
        username="kaif-istan"
        email="kaif85077@gmail.com"
        age={23}
        location={["Mars", "unknown"]}
        admin="yes"
      />
    </div>
  );
};

export default App;
