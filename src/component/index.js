export const Button = ({
    children,
    className=''
}) => {
   return <button className={`bg-white px-4 py-2 fw-bold rounded-3 btn-visit ${className}`}>{children}</button>
}
