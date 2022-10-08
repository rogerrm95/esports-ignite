import { useLocation, useNavigate } from "react-router-dom"
// Icons //
import { ArrowLeft } from "phosphor-react";
// Components //
import { Profile } from "../Profile";

export function Header() {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    function handleGoBack() {
        navigate("/")
    }

    return (
        <div className="w-[100%] flex p-2 items-center justify-between mb-8">
            {
                pathname === '/' ? (
                    <div></div>
                ) : (
                    <button onClick={handleGoBack}
                        className="flex items-center justify-center p-2 rounded bg-[#2a2634] hover:bg-[#2a263494] text-zinc-200 hover:text-violet-500">
                        <ArrowLeft size={24} />
                    </button>
                )
            }

            <Profile />
        </div>
    )
}