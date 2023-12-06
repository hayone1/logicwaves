import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '@theme/IdealImage';
import AboutCompany from '@site/src/components/AboutCompany';
import AboutTeam from '@site/src/components/AboutTeam';
import Intro from '@site/src/components/Intro';
import Cta from '@site/src/components/Cta';


export default function MyReactPage() {
    return (
        <Layout>
            <Intro/>
            <main>
                <AboutCompany/>
                <AboutTeam/>
                <Cta/>
            </main>

        </Layout>

    );
}