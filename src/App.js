import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import FeedLayout from "./layouts/feedLayout/FeedLayout";
import Topic from "./pages/Topic/Topic";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Post from "./pages/Post/Post";
import Followed from "./pages/Followed/Followed";
import PostsContextProvider from "./contexts/PostsContextProvider";

function App() {
    return (
        <AuthContextProvider>
            <PostsContextProvider>
                <Routes>
                    <Route path="/" element={<FeedLayout />}>
                        <Route index element={<Home />} />
                        <Route path="/topic/:id" element={<Topic />} /> 
                        <Route path="/topic/:topicId/post/:postId" element={<Post />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/followed" element={<Followed />} />
                    </Route>
                    <Route path="/login" element={<AuthLayout />}>
                        <Route index element={<Login />} />
                    </Route>
                </Routes>
            </PostsContextProvider>
        </AuthContextProvider>
    );
}

export default App;