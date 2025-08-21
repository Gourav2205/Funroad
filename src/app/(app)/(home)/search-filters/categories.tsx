import { Category } from "@/payload-types"
import { CategoryDropdown } from "./category-dropdown"

interface Props {
    data: any
}

export const Categories = ({ data }: Props) => {
    console.log(data, "test")
    return (
        <div>
            {data.map((category: Category) => (
                <div className="" key={category.id}>
                    <CategoryDropdown
                        category={category}
                        isActive={false}
                        isNavigateonHovered={false}
                    />
                </div>
            ))}
        </div>
    )
}

