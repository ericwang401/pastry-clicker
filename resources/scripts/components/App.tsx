import LoginContainer from '@/components/auth/LoginContainer';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";

const App = () => {
    return <Router>
        <Routes>
            <Route path='/' element={< LoginContainer />}></Route>
        </Routes>
    </Router>
}

export default App