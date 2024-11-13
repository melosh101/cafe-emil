import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Menu() {
    return (
        <main className="flex flex-col">
            <h1 className="mx-auto mt-8 text-3xl font-bold font-courier-prime">Vores menu</h1>
            <Tabs defaultValue="spisekort" className="mx-auto mt-8">
                <TabsList className="[&>*]:bg-slate-200 [&>*]:rounded-none [&>*]:border [&>*]:border-black">
                    <TabsTrigger value="spisekort">Spisekort</TabsTrigger>
                    <TabsTrigger value="drikkelse">Drikkelse</TabsTrigger>
                    <TabsTrigger value="vin">Vin</TabsTrigger>
                </TabsList>
                <TabsContent value="spisekort" className="mx-auto">
                    <h2 className="text-2xl font-bold">Spisekort</h2>
                    <ul>
                        <li>Forret: 50 kr.</li>
                        <li>Hovedret: 100 kr.</li>
                        <li>Dessert: 50 kr.</li>
                    </ul>
                </TabsContent>
            </Tabs>
        </main>
    )
}

async function GenerateMenu() {
    const menu = {
        category: "spisekort",
        items: [
            {
                name: "Forret",
                price: 50,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, fermentum tellus."
            },
            {
                name: "Hovedret",
                price: 100,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, fermentum tellus."
            },
            {
                name: "Dessert",
                price: 50,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum mi id, fermentum tellus."
            }
        ]
    }

}
