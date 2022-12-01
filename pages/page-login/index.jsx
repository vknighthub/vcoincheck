import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import Meta from '../../components/Meta';
import Asideleft from '../layouts/nav/AsideLeft';

const Login = () => {

    return (
        <section className="relative h-screen">
            <Meta title={"Login Page"} />
            <div className="login-main-page" style={{ backgroundImage: "url(" + 'images/bg-login.jpg' + ")" }}>
                <div className="login-wrapper">
                    <Asideleft />
                </div>
            </div>
        </section>
    );
}

export default Login;

export const getServerSideProps = async ({
    locale,
}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common'
        ])),
    },
})
