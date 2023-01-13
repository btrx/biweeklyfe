export default function BtnComponents({ href, children, src }) {
    const addimgSrc = src ? `${src}` : '';

    return (
        <a href={href} className='flex p-[12px 48px] text-center text-white z-10'>
            <img src={addimgSrc} className='h-10' />
            <p className='m-10'>{children}</p>
        </a>
    )
}
