import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
        <>
            <header className="h-16 md:h-8 bg-secondary flex justify-around">
                    <a href="/" className="text-3xl md:text-2xl font-courier-prime font-bold my-auto">Cafe Emil</a>
            </header>
                <Outlet/>
            <footer>

            </footer>
        </>
    )
}