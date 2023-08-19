import { Link } from "react-router-dom"
import "../../App.css"

export const NotFound = () => {
    return (
        <div className="container flex flex-col items-center mx-auto">
            <h1 className="w-full flex justify-center font-bold p-3 bg-gray-500">Página não encontrada...</h1>
            <Link className="p-3 bg-blue-700 text-white m-3 font-bold" to={'/'}>Voltar para Home</Link>

        </div>
    )
}