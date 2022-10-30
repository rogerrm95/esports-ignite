import { ButtonHTMLAttributes, ReactNode, useState } from "react";

interface ScrollToTopButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export function ScrollToTopButton({ children }: ScrollToTopButtonProps) {
    const [isButtonVisible, setIsButtonVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 600) {
            setIsButtonVisible(true)
        }
        else if (scrolled <= 600) {
            setIsButtonVisible(false)
        }
    };

    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);


    return (
        isButtonVisible ? (
            <button
                className='fixed bottom-4 right-2 flex items-center justify-center p-2 bg-violet-500 hover:bg-violet-600 opacity-25 hover:opacity-100 transition-all rounded-full'
                onClick={handleScrollToTop}>
                {
                    children
                }
            </button>
        ) : (null)
    )
}