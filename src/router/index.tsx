import {FC} from "react"
import {Router, Route} from "react-router";
import App from '../pages/App'

const router: FC = () => (
    <Router>
        <Route path="/" component={App}>
        </Route>
    </Router>
)
