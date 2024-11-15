import { Link, Outlet } from "react-router-dom"


export const Layout = () => {
    return (
        <>
            <header className="flex justify-around h-16 md:h-8 bg-secondary">
                    <Link to="/" className="my-auto text-3xl font-bold md:text-2xl font-courier-prime">Cafe Emil</Link>
            </header>
                <Outlet/>
            <footer>

            </footer>
        </>
    )
}