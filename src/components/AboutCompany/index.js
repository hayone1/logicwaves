// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Image from '@theme/IdealImage';
const AboutList = [
    {
        title: 'Needs a title',
        icon_class: 'fa-solid fa-trophy accent-text',
        description: (
            <>
                Hello Edu, please give some content for us to put here. It can be technical and
                also highlight why people should choose you over other solution providers etc.
            </>
        ),
    },
    {
        title: 'Needs a title',
        icon_class: 'fa-solid fa-trophy accent-text',
        description: (
            <>
                Hello Edu, please give some content for us to put here. It could be
                why people should choose you over other solution providers etc.
            </>
        ),
    },
    {
        title: 'Needs a title',
        icon_class: 'fa-solid fa-trophy accent-text',
        description: (
            <>
                Hello Edu, please give some content for us to put here. It could be
                why people should choose you over other solution providers etc.
            </>
        ),
    },
];

function About({ icon_class, title, description }) {
    return (
        <div className="col">
            <div className="mb-4 mb-xl-6">
                <div className="mb-4">
                    <i className={icon_class} />
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>
                        {description}{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function AboutCompany() {
    return (
        <section id="AboutCompany" className="pb-lg-14 pb-6">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-md-12 col-12">
                        <div className="text-center mb-lg-10 mb-6">
                            <h2 className="h1 fw-bold">
                                We Ensure{" "}
                                <u className="text-warning">
                                    <span className="text-primary">Operational Success</span>
                                </u>
                            </h2>
                            <p className="lead mb-0">
                                Summary of what exactly it is that we do. This may be a bit
                                more technical in description.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" row align-items-center ">
                    <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                        <div className="mb-6 mb-lg-0">
                            <div className="mb-2">
                                <Image img={useBaseUrl('/img/about/techCoverage_woman_celebrating.jpg')} alt="about" className="img-fluid rounded w-100"/>
                            </div>
                            <div className="d-flex">
                                <span>
                                    <i className="fa-solid fa-circle-check"></i>
                                </span>
                                <span className="ms-2">
                                    Some caption to describe the image
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 offset-xl-1 col-lg-6 col-md-12 col-12">
                        <div className="row row-cols-2">
                            {AboutList.map((props, idx) => (
                                <About key={idx} {...props} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


