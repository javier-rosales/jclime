import IconLocation from "/location.svg"

export default function LocationDisplay({title}) {
    return (
        <div className="w-loc">
            <img
                src={IconLocation}
                className="w-loc__icon"
                alt="Location icon"
            />
            <h2 className="w-loc__title">
                {title}
            </h2>
        </div>
    )
}