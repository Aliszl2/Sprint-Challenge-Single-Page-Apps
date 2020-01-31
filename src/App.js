import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import LocationsList from "./components/LocationsList";
import CharacterCard from "./components/CharacterCard.js";

// import CharacterCard from "./CharacterCard";

export default function App() {

  // const [location, fetchLocation] = useState([]);
  return (
    <div>
      <Header />
      {/* <WelcomePage /> */}

      <Route exact path="/" render={WelcomePage} />
      <Route exact path="/CharacterList" component={CharacterList} />
      <Route exact path="/LocationsList" component={LocationsList} />

      {/* <Route
        exact
        path="./components/LocationsList"
        component={CharacterList}
      /> */}

      {/* <CharacterList /> */}

      {/* <CharacterList /> */}
      {/* <Route
        exact path="/testing-render"
        render={props => {
          console.log(props);
          return <TestingRender customProp="Hello From Props!" {...props} />;
        }}
      /> */}
    </div>
  );
}
