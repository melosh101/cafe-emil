import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <main className="flex flex-col flex-grow gap-4 m-4 md:flex-row">
            {/* resever */}
            <Link to="/resever" className="lg:bg-[url('/resever.png')] bg-[url('/resever_mobile.png')] flex-grow flex shadow-md shadow-slate-600 rounded-md min-h-64">
                <h2 className="mx-auto mt-auto mb-12 text-4xl font-bold text-center font-courier-prime text-neutral-100">Resever et bord</h2>
            </Link>
            {/* menu */}
            {/* resever */}
            <Link to="/menu" className="lg:bg-[url('/menu.png')] bg-[url('/menu_mobile.png')] flex-grow flex shadow-md shadow-slate-600 rounded-md min-h-64">
                <h2 className="mx-auto mt-auto mb-12 text-4xl font-bold text-center font-courier-prime text-neutral-100">Se vores Menu</h2>
            </Link>
            {/* Info kort */}
            <article className="flex flex-col flex-grow rounded-md shadow-sm bg-cyan-600 text-balance shadow-cyan-900">
                <h2 className="mt-4 text-2xl font-bold text-center md:text-xl">Info</h2>
                <div className="[&>*]:mt-4">
                    <section className="flex flex-col ml-4">
                        <h3 className="text-lg font-bold md:text-sm">Åbningstider</h3>
                        <p className="text-lg leading-8 md:text-xs">
                            mandag - torsdag 10-23 <br />
                            Fredag - lørdag 10-00 <br />
                            Søndag 10-23 <br />
                            <span>køkkenet lukker 30 minutter før alle dage</span>
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="text-lg font-bold md:text-sm">Addresse</h3>
                        <p className="text-lg md:text-xs">
                                Annexstræde 3 <br />
                                2500 Valby
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="text-lg font-bold md:text-sm">Kontakt</h3>
                        <a href="tel:+4536447441" className="md:text-xs">Tlf.: 36 44 74 41</a> <br />
                        <a href="mailto:info@cafeemil.dk" className="md:text-xs">info@cafeemil.dk</a>
                    </section>

                </div>
                <p className="my-8 md:mt-auto mb-4 ml-4 md:mb-0 md:text-[0.5rem]">&#169; Milas holsting</p>

            </article>
        </main>
    );
}