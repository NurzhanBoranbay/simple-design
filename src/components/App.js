import Header from "./Header/Header";

import './App.scss';
import DesignProject from "./DesignProject/DesignProject";
import HowWork from "./HowWork/HowWork";
import Services from "./Services/Services";
import CheckList from "./CheckList/CheckList";
import DesignRoom from "./DesignRoom/DesignRoom";
import ShortTest from "./ShortTest/ShortTest";
import Questions from "./Questions/Questions";
import Footer from "./Footer/Footer";

function App() {
   return (
      <div className="App">
         <Header />
         <DesignProject />
         <HowWork />
         <Services />
         <CheckList />
         <DesignRoom />
         <ShortTest />
         <Questions />
         <Footer />
      </div>
   );
}

export default App;
