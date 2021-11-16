import {FC} from "react"
import {Routes, Route} from "react-router";
import Test from "../pages/test";

const MyRouter: FC = () => (
    <Routes>
        <Route path="/" element={<Test/>}>
        </Route>
    </Routes>
)

export default MyRouter
