import { Categories } from "../../components/categories/categories"
import { Footer } from "../../components/footer/footer"
import { PosterOverlay } from "../../components/poster-overlay/poster-overlay"
import { SaleCellar } from "../sale-cellar/sale-cellar"

const categories = [
    {
        "id": 1,
        "title": "VINHO BRANCO"
    },
    {
        "id": 2,
        "title": "VINHO TINTO"
    },
    {
        "id": 3,
        "title": "ESPUMANTES"
    },
    {
        "id": 4,
        "title": "KITS"
    }
]

export function Home() {
return (
    <>
    <Categories categories={categories} />
    <PosterOverlay />
    <SaleCellar />
    <Footer />
    </>
)    
}