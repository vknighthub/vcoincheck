import Image from 'next/image';
import Link from 'next/link';

const Asideleft = ({ t }) => {

    return (
        <div className="login-aside-left" style={{ backgroundImage: "url(" + 'images/bg-login2.png' + ")" }}>
            <Link href={"#"} className="login-logo">
                <Image src="/images/Logo450x450.svg" alt="" className="mr-2 img-fluid" width="450" height="450" />
            </Link>
            <div className="login-description">
                <div className="mt-5">
                    <Link href={"#"} className="text-secondary mr-4">{t('privacy')}</Link>
                    <Link href={"#"} className="text-secondary mr-4">{t('contact')}</Link>
                    <Link href={"https://www.vknight.io/"} className="text-secondary">© 2021 vKnightHub</Link>
                </div>
            </div>
        </div>
    );
}

export default Asideleft;

