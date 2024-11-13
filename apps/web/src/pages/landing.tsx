
export const LandingPage = () => {
    return (
        <main className="flex flex-col flex-grow gap-4 m-4 md:flex-row">
            {/* resever */}
            <a href="/resever" className="lg:bg-[url('/resever.png')] bg-[url('/resever_mobile.png')] flex-grow flex shadow-md shadow-slate-600 rounded-md min-h-64">
                <h2 className="font-courier-prime font-bold text-4xl text-center mt-auto mb-12 mx-auto text-neutral-100">Resever et bord</h2>
            </a>
            {/* menu */}
            {/* resever */}
            <a href="/menu" className="lg:bg-[url('/menu.png')] bg-[url('/menu_mobile.png')] flex-grow flex shadow-md shadow-slate-600 rounded-md min-h-64">
                <h2 className="font-courier-prime font-bold text-4xl mx-auto text-center text-neutral-100 mt-auto mb-12">Se vores Menu</h2>
            </a>
            {/* Info kort */}
            <article className="flex-grow bg-cyan-600 text-balance rounded-md shadow-sm shadow-cyan-900 flex flex-col">
                <h2 className="font-bold text-2xl md:text-xl mt-4 text-center">Info</h2>
                <div className="[&>*]:mt-4">
                    <section className="ml-4 flex flex-col">
                        <h3 className="font-bold text-lg md:text-sm">Åbningstider</h3>
                        <p className="text-lg md:text-xs leading-8">
                            mandag - torsdag 10-23 <br />
                            Fredag - lørdag 10-00 <br />
                            Søndag 10-23 <br />
                            <span>køkkenet lukker 30 minutter før alle dage</span>
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="font-bold text-lg md:text-sm">Addresse</h3>
                        <p className="text-lg md:text-xs">
                                Annexstræde 3 <br />
                                2500 Valby
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="font-bold text-lg md:text-sm">Kontakt</h3>
                        <a href="tel:+4536447441" className="md:text-xs">Tlf.: 36 44 74 41</a> <br />
                        <a href="mailto:info@cafeemil.dk" className="md:text-xs">info@cafeemil.dk</a>
                    </section>

                </div>
                <p className="my-8 md:mt-auto mb-4 ml-4 md:mb-0 md:text-[0.5rem]">&#169; Milas holsting</p>

            </article>
        </main>
    );
}