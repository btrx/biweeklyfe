import BtnContainer from './button';
import Btn from './button';

export default function PrContainer({ src, alt, className }) {
    const addimgSrc = src ? `${src}` : 'placeholder.jpg';
    const addimgAlt = alt ? `${alt}` : 'Empty';
    const addclassName = className ? `${className}` : '';


    return (
        <section className={`${addclassName}`}>
            <div className="w-fit h-fit group">
                <div className="relative overflow-hidden">
                    <img className="h-[300px] w-full object-cover" src={addimgSrc} alt={addimgAlt} />
                    <div className="absolute h-full w-full bg-gray-500/90 flex items-center justify-around -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Btn src='eye.png' href='#'>Preview</Btn>
                        <Btn src='github.png' href='#'>Github</Btn>
                    </div>
                </div>
            </div>
        </section>
        // <div className={styles.container}>
        //     <img className={styles.image} src="https://images.unsplash.com/photo-1488628075628-e876f502d67a?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg=" alt="" />
        //     <p className={styles.title}>card title</p>
        //     <div className={styles.overlay}></div>
        //     <div class={styles.button}><a href="#"> BUTTON </a></div>
        // </div>
    )
}
