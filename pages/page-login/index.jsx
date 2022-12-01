import React from 'react';
import Asideleft from '../layouts/nav/AsideLeft';
import Meta from '../../components/Meta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const Login = () => {
    const { t } = useTranslation(['common'])

    return (
        <section className="relative h-screen">
            <Meta title={"Login Page"} />
            <div className="login-main-page" style={{ backgroundImage: "url(" + 'images/bg-login.jpg' + ")" }}>
                <div className="login-wrapper">
                    <Asideleft t={t} />
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
