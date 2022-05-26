import Header from "./Header/Header";

import './App.scss';
import DesignProject from "./DesignProject/DesignProject";
import HowWork from "./HowWork/HowWork";
import Services from "./Services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <DesignProject />
      <HowWork />
       <Services />
    </div>
  );
}

export default App;
