import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Layout from "./layouts/Layout";
import SortLayout from "./layouts/SortLayout";
import BubbleSortPage from "./pages/BubbleSortPage";
import SelectionSortPage from "./pages/SelectionSortPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout><MainPage/></Layout>}/>
            <Route path='/sorting/bubble' element={<SortLayout><BubbleSortPage/></SortLayout>}/>
            <Route path='/sorting/selection' element={<SortLayout><SelectionSortPage/></SortLayout>}/>
        </Routes>
    )
}

export default AppRoutes;