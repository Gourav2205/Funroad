import { Category } from "@/payload-types";

interface SubcategoryMenuProps {
    category: Category
    isOpen: boolean
    position: { top: number; left: number }
}

export const SubcategoryMenu = ({
    category, 
    isOpen,
    position
}: SubcategoryMenuProps) => {
    if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
        return null
    }
}
