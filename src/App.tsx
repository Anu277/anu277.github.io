import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { Projects } from '@/pages/Projects'
import { ProjectDetail } from '@/pages/ProjectDetail'
import { Research } from '@/pages/Research'
import { ResearchArticle } from '@/pages/ResearchArticle'
import { Blog } from '@/pages/Blog'
import { BlogArticle } from '@/pages/BlogArticle'
import { Resume } from '@/pages/Resume'
import { Contact } from '@/pages/Contact'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="research" element={<Research />} />
        <Route path="research/:slug" element={<ResearchArticle />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
