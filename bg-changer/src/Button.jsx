import App from "./App"
function Button(props) {
    return (
        <button
        className="text-black font-bold px-2 rounded-md mb-4"
        style={{ backgroundColor: props.color }}
        onClick={props.onClick}>
            {(props.color).toUpperCase()}</button>
    )
}
export default Button