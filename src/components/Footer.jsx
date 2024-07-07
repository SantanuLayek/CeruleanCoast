import { SectionWrapper } from '../hoc'

const Footer = () => {
  return (
    <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-violet-300 lg:block">{new Date().getFullYear()}.</p>
        <p className='caption text-cyan-400 lg:block'>Made by Santanu Layek</p>
        <p className="caption text-emerald-300 lg:block">Socials : <br/><i><a href="https://linkedin.com/in/santanulayek/" target=' '>LinkedIn</a><br/><a href="https://leetcode.com/u/MikhaelBlaze/" target=' '>Leetcode</a></i></p>
    </div>
  )
}

export default SectionWrapper(Footer, "")
