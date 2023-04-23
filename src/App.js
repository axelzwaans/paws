import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom"
import './api/axiosDefaults';
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CurrentUserContext = createContext()
export const setCurrentUserContext = createContext()

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get('dj-rest-auth/user/')
      setCurrentUser(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <setCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" component={() => <h1>Home page</h1>} />
              <Route path="/signup" component={SignUpForm} />
              <Route path="/signin" component={SignInForm} />
              <Route render={() => <h1>Page not found!</h1>} />
            </Switch>
          </Container>
        </div>
      </setCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
