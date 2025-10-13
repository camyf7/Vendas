import { Link } from "react-router-dom";




export default function Page() {
    return (
        <div className="container">
        <h1>Home Page</h1>

        <Link to="/about">Sobre</Link>
        
        </div>
    )
}