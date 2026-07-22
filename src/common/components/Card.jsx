
const Card = ({ children, className = "" }) => {
    return (
        <div
            className={`
                bg-[#1c1f28]/80
                backdrop-blur-2xl
                rounded-[2rem] 
                border border-white/10
                shadow-2xl
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Card;