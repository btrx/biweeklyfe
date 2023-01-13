export default function Btn({ src, href, children }) {
    const addimgSrc = src ? `${src}` : '';

    return (
        <a href={href} className="text-black py-2 px-5 flex">
            <img src={addimgSrc} alt="" className="w-10" />
            <p className="m-2">{children}</p>
        </a>
    )
}