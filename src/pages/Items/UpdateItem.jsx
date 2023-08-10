import { useLoaderData, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import useStock from "../../hooks/useStock";


export default function UpdateItem () {
    
    const navigate = useNavigate();    
    const {updateItem} = useStock();
    const item = useLoaderData();

    function submitForm ({name, amount, price, category, description}) {
        const id = +item.id;
        updateItem({id, name, amount, price, category, description});
        return navigate('/StockItems/Items');
        
    }
    
    if(!item) {
        return <h2 className="mt-4">Ops! Item não encontrado</h2>
    }

    return (
        <>
            <h3 className="mt-8 text-2xl font-light">Atualizar - {item.name}</h3>
            <div className="p-12">
            <Form handleSubmit={submitForm} inicialValues={item}/> 
            </div>
        </>
    )
}