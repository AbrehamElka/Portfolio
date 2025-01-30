import Link from "next/link"

const Nav = () => {
  return (
    <div className="navbar bg-base-100 gap-5 felx justify-center">
        <Link href="/" className="btn btn-ghost text-xl">Home</Link>
        <Link href="/projects" className="btn btn-ghost text-xl">Projects</Link>
    </div>
  )
}

export default Nav