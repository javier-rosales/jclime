import "./Loading.css"

export default function Loading({ size = "1rem" }) {
    return (
        <div
            className="loading"
            style={{
                fontSize: size
            }}
        >
            <div className="loading__dot one"></div>
            <div className="loading__dot two"></div>
            <div className="loading__dot three"></div>
        </div>
    )
}