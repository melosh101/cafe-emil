
export const LandingPage = () => {
    return (
        <main className="flex flex-col flex-grow gap-4 my-4 h-[200vh]">
            {/* resever */}
            <a href="/resever" className="lg:bg-[url('/resever.png')] bg-[url('/resever_mobile.png')] flex-grow h-full flex">
                <h2 className="font-courier-prime font-bold text-4xl text-center mt-auto mb-12 mx-auto text-neutral-100">Resever et bord</h2>
            </a>
            {/* menu */}
            {/* resever */}
            <a href="/menu" className="lg:bg-[url('/menu.png')] bg-[url('/menu_mobile.png')] flex-grow h-full flex">
                <h2 className="font-courier-prime font-bold text-4xl mx-auto text-neutral-100 mt-auto mb-5">Se vores Menu</h2>
            </a>
            {/* Info kort */}
            <article className="h-full flex-grow bg-cyan-600 text-balance pb-8">
                <h2 className="font-bold text-2xl mt-4 text-center">Info</h2>
                <div className="mt-6 flex flex-col gap-8">
                    <section className="ml-4 flex flex-col">
                        <h3 className="font-bold text-lg">Åbningstider</h3>
                        <p className="text-lg leading-8">
                            mandag - torsdag 10-23 <br />
                            Fredag - lørdag 10-00 <br />
                            Søndag 10-23 <br />
                            <span>køkkenet lukker 30 minutter før alle dage</span>
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="font-bold text-lg">Addresse</h3>
                        <p className="text-lg">
                                Annexstræde 3 <br />
                                2500 Valby
                        </p>
                    </section>
                    <section className="ml-4">
                        <h3 className="font-bold text-lg">Kontakt</h3>
                        <a href="tel:+4536447441">Tlf.: 36 44 74 41</a> <br />
                        <a href="mailto:info@cafeemil.dk">info@cafeemil.dk</a>
                    </section>
                </div>
            </article>
        </main>
    );
}