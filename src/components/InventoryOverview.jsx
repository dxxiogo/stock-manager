import InventoryInsight from "./InventoryInsight"
import useInvetory from "../hooks/useInvetory";
import { useEffect } from "react";

export default function InventoryOverview () {
    const {itemsRunningOut, recentsItems, totalInvetory, diversityOfItems, updateData} = useInvetory();

    useEffect(() => {
        updateData();
    }, [])

    return (
        <div>
           <InventoryInsight title="Diversidade de Itens" amount={diversityOfItems}/>
           <InventoryInsight title="Inventário Total" amount={totalInvetory}/>
           <InventoryInsight title="Itens Recentes" amount={recentsItems.length}/>
           <InventoryInsight title="Itens acabando" amount={itemsRunningOut.length}/>  
        </div>
    )
}