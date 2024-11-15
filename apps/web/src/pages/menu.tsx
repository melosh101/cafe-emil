import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { ReactElement } from "react";
export default function Menu() {
    const { isPending, error, data } = useQuery({
        refetchOnMount: false,
        queryKey: ["menu"],
        queryFn: async () => {
            const response = await fetch(import.meta.env.VITE_CMS_URL + '/api/menu?populate[0]=categories&populate[1]=categories.subCategory&populate[2]=categories.subCategory.contents&populate[3]=categories.subCategory.contents.thumbnail')
            return response.json();
        },
    });

    if (isPending) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (data.error) {
        return <div>Error: {data.error.message}</div>
    }
    console.log(data)

    var TabList: ReactElement[] = []
    var TabContent: ReactElement[] = [];

    data.data.categories.forEach((category: any) => {
        TabList.push(<TabsTrigger value={category.name} key={category.id}>{category.name}</TabsTrigger>)
        const TabContents: ReactElement[] = []
        category.subCategory.forEach((subCategory: any) => {
            TabContents.push(
                <div key={subCategory.id} className="mx-4">
                    <h2 className="text-2xl font-bold font-courier-prime">{subCategory.name}</h2>
                    <p>{subCategory.description}</p>
                    <div className="grid gap-2 mt-4 md:grid-cols-2 lg:grid-cols-3">
                    {subCategory.contents.map((content: any) => {
                        return (

                            <div className="flex gap-4 text-balance *">
                                {content.thumbnail && <img loading="lazy" src={import.meta.env.VITE_CMS_URL + content.thumbnail.formats.small.url} className="object-cover w-1/3 h-32 my-auto rounded-md" />}
                                <div>
                                <h2 className="text-xl font-bold font-courier-prime">{content.name}</h2>
                                <p className="text-sm">{content.description}</p>
                                <p className="mt-auto">{content.price} kr.</p>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    </div>
            )
        })
        TabContent.push(<TabsContent value={category.name} key={category.id} className="flex flex-col gap-4 lg:max-w-[80%] mx-auto h-fit">{TabContents}</TabsContent>)

    })
    return (

        <main className="flex flex-col items-center">
            <h1 className="mx-auto mt-8 text-3xl font-bold font-courier-prime">Vores menu</h1>
            <Tabs defaultValue={data.data.categories[0].name} className="flex flex-col mx-auto mt-8">
                <TabsList className="[&>*]:bg-slate-200 [&>*]:rounded-none [&>*]:border [&>*]:border-black mx-auto">
                    {TabList}
                </TabsList>
                {TabContent}


            </Tabs>
        </main>
    )
}

