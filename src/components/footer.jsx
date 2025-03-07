import Link from "next/link";
import Image from "next/image";

const navLinks = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги такси" },
    { href: "/tariffs", label: "Тарифы такси" },
    { href: "/contact", label: "Контакты" },
    { href: "/partners", label: "Партнерам" },
];

export default function Footer() {

    return (
        <footer className="mt-20 pb-5 w-full bg-white shadow-md lg:pl-20 lg:pr-20">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center px-6 py-4">
                <div className="flex-1 flex flex-col my-5 gap-5">
                    <div className="flex flex-col lg:flex-row justify-between w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <Link href="/" className="shrink-0 lg:pr-10">
                                <Image src="/logo.png" alt="Logo" width={150} height={100} />
                            </Link>
                        </div>
                        <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 gap-5 items-center">
                            <a href="mailto:europacarrent@yandex.ru" className="font-bold">europacarrent@yandex.ru</a>
                            <a href="tel:89632935520" className="font-bold">8-963-293-55-20</a>
                        </div>
                    </div>
                    <nav className="flex-col lg:flex-row flex justify-between w-full">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className="text-gray-600 text-sm font-semibold uppercase hover:text-[#FFCB00] transition">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="container mx-auto flex flex-col gap-5 lg:flex-row justify-between  items-center px-6 py-4">
                <div>
                    <a href="" className="text-[10px] lg:text-[12px]">Политика конфиденциальности</a>
                </div>
                <div>
                    <a className="lg:text-[12px] text-[10px] flex gap-2 items-center" href="https://xo-webstudio.ru/">
                        <Image src="/xo.png" alt="XO Studio" width={30} height={30} />
                        Разработано маркетинговым <br />
                        агенством XO-STUDIO
                    </a>
                </div>
            </div>
        </footer>
    );
}