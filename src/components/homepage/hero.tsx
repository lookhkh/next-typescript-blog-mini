import classs from './hero.module.css'
import Image from 'next/image'

export default function Hero(){
    return(
        <>
            <section className={classs.hero}>
                <div className={classs.image}>
                    <Image src="/images/sites/h.jpeg" alt="An Image myself" width={400} height={200} />
                </div>
                <h1>
                    Hi, i`m max`
                </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo vero dicta, voluptatum et perferendis vel repellat alias sapiente aperiam laudantium quibusdam nihil similique beatae! Quis voluptatem doloribus cumque voluptatum temporibus!
                </p>
            </section>
        </>
    )
}