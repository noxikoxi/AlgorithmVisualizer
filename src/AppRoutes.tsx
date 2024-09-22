import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Layout from "./layouts/Layout";
import SortLayout from "./layouts/SortLayout";
import BubbleSortPage from "./pages/BubbleSortPage";
import SelectionSortPage from "./pages/SelectionSortPage";
import InsertionSortPage from "./pages/InsertionSortPage";
import MergeSortPage from "./pages/MergeSortPage";
import QuickSortPage from "./pages/QuickSortPage";
import HeapSortPage from "./pages/HeapSortPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout><MainPage/></Layout>}/>
            <Route path='/sorting/bubble' element={<SortLayout><BubbleSortPage/></SortLayout>}/>
            <Route path='/sorting/selection' element={<SortLayout><SelectionSortPage/></SortLayout>}/>
            <Route path='/sorting/insertion' element={<SortLayout><InsertionSortPage/></SortLayout>}/>
            <Route path='/sorting/merge' element={<SortLayout><MergeSortPage/></SortLayout>}/>
            <Route path='/sorting/quick' element={<SortLayout><QuickSortPage/></SortLayout>}/>
            <Route path='/sorting/heap' element={<SortLayout><HeapSortPage/></SortLayout>}/>
        </Routes>
    )
}

export default AppRoutes;