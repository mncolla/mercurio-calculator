import { BrowserRouter, Route, Routes } from "react-router"
import CalculatorPage from "./calculator/app"
import LandingPage from "./landing/page"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App