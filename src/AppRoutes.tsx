import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import Layout from "./layouts/Layout";
import SortLayout from "./layouts/SortLayout";
import BubbleSortPage from "./pages/sorts/BubbleSortPage";
import SelectionSortPage from "./pages/sorts/SelectionSortPage";
import InsertionSortPage from "./pages/sorts/InsertionSortPage";
import MergeSortPage from "./pages/sorts/MergeSortPage";
import QuickSortPage from "./pages/sorts/QuickSortPage";
import HeapSortPage from "./pages/sorts/HeapSortPage";
import DsLayout from "./layouts/DsLayout";
import ArrayPage from "./pages/ds/ArrayPage";
import ListPage from "./pages/ds/ListPage";
import GraphPage from "./pages/ds/GraphPage";
import StackPage from "./pages/ds/StackPage";
import QueuePage from "./pages/ds/QueuePage";
import HeapPage from "./pages/ds/HeapPage";
import TreePage from "./pages/ds/TreePage";

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

            <Route path='/ds/array' element={<DsLayout><ArrayPage/></DsLayout>}/>
            <Route path='/ds/list' element={<DsLayout><ListPage/></DsLayout>}/>
            <Route path='/ds/graph' element={<DsLayout><GraphPage/></DsLayout>}/>
            <Route path='/ds/stack' element={<DsLayout><StackPage/></DsLayout>}/>
            <Route path='/ds/queue' element={<DsLayout><QueuePage/></DsLayout>}/>
            <Route path='/ds/heap' element={<DsLayout><HeapPage/></DsLayout>}/>
            <Route path='/ds/tree' element={<DsLayout><TreePage/></DsLayout>}/>
        </Routes>
    )
}

export default AppRoutes;