/* eslint-disable react/prop-types */

const Button = ({children, type='button',className="",...props}) => {
    return (
    <button
    type={type}
    className={`${className} md:px-5 px-3 md:py-1 py-1  text-white md:text-lg text-sm rounded-xl bg-cyan-500/50 hover:bg-cyan-600/50`}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button