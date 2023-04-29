import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CommentForm from './components/commentForm';
import CommentsList from './components/comments';
import HomePage from './components/home'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/commentform' element={<CommentForm />} />
                <Route path='/comments' element={<CommentsList />} /> 
                <Route exact path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>

    );
}

export default App;