const PizzaCard = ({
    title = "Titre de la pizza",
    ingredients = "ingrédients...",
    price = "0€",
}) => {
    return (
        <div className="w-full h-[100px] bg-blue-200 rounded-xl p-2 flex items-center justify-center">
            <div className="w-[200px] text-center">{title}</div>
            <div className="h-full w-[1px] bg-black mx-3"></div>
            <div className="flex-1">{ingredients}</div>
            <div className="h-full w-[1px] bg-black mx-3"></div>
            <div className="w-[100px] text-center">{price}</div>
        </div>
    )
}

export default PizzaCard;