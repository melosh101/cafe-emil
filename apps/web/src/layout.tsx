import { Outlet } from "react-router-dom"


export const Layout = () => {
    return (
        <>
            <header className="h-16 md:h-24 bg-secondary flex justify-around">
                    <h1 className="text-3xl md:text-5xl font-courier-prime font-bold my-auto">Cafe Emil</h1>
            </header>
                <Outlet/>
            <footer>

            </footer>
        </>
    )
}