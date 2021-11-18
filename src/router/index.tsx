import {FC} from "react"
import {Routes, Route} from "react-router";
import Test from "../pages/test";
import Todo from "../components/todo/todo"

const MyRouter: FC = () => (
    <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path={"/todo"} element={<Todo/>} />
    </Routes>
)

export default MyRouter
