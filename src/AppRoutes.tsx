import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Layout from "./layouts/Layout";
import SortLayout from "./layouts/SortLayout";
import BubbleSortPage from "./pages/BubbleSortPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout><MainPage/></Layout>}/>
            <Route path='/sorting/bubble' element={<SortLayout><BubbleSortPage/></SortLayout>}/>
        </Routes>
    )
}

export default AppRoutes;