import Link from 'next/link';
import Image from 'next/image';

type NavLinkProps = {
    to: string,
    src: string,
    alt?: string,
    text: string
}

export default function NavLink({ to = '/', src, alt = 'icon', text }: NavLinkProps) {
    return (
        <>
            <Link href={to}>
                <div>
                    <Image src={src} width={24} height={24} layout='fixed' alt={alt} />
                    <span>{text}</span>
                </div>
            </Link>
        </>
    )
}