import "./App.css";
import { Switch, Route } from "react-router-dom";
import UserPost from "./UserPost/UserPost";

function App() {
  return (
    <div className="App">
      <h2>Understand Redux Toolkit Using API</h2>
      <Switch>
        <Route path="/" exact component={UserPost} />
      </Switch>
    </div>
  );
}

export default App;
