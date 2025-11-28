import { useNavigate } from "react-router-dom";

const BackButton = () => {

    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="bg-gray-400 p-2 rounded-lg hover:bg-gray-500 hover:cursor-pointer">
            Retour
        </button>
    )
}

export default BackButton;