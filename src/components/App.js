import Header from "./Header/Header";

import './App.scss';
import DesignProject from "./DesignProject/DesignProject";
import HowWork from "./HowWork/HowWork";
import Services from "./Services/Services";
import CheckList from "./CheckList/CheckList";
import DesignRoom from "./DesignRoom/DesignRoom";

function App() {
   return (
      <div className="App">
         <Header />
         <DesignProject />
         <HowWork />
         <Services />
         <CheckList />
         <DesignRoom />
      </div>
   );
}

export default App;
