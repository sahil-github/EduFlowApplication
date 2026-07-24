function Button({ children, className }) {
    return (
        <button className={`w-[100px]  rounded-lg ${className}`}>
            {children}
        </button>
    )
}

export default Button