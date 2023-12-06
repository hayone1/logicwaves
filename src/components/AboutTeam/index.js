// import clsx from 'clsx';
// import Heading from '@theme/Heading';
// import styles from './styles.module.css';
import Image from '@theme/IdealImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Teammates = [
    {
        name: 'Ronke Daini',
        title: 'program manager',
        imageUrl: '/img/about/ronke_daini.jpg',
        socials: {
            facebook: 'https://web.facebook.com/profile.php?id=100064439572542',
            twitter: 'https://twitter.com/ronkedaini',
            linkedin: 'https://www.linkedin.com/in/ronkedaini/?originalSubdomain=ng'
        },
        description: (
            <>
                This is a brief description of your expertise.
            </>
        ),
    },
    {
        name: 'Ronke Daini',
        title: 'program manager',
        imageUrl: '/img/about/ronke_daini.jpg',
        socials: {
            facebook: 'https://web.facebook.com/profile.php?id=100064439572542',
            twitter: 'https://twitter.com/ronkedaini',
            linkedin: 'https://www.linkedin.com/in/ronkedaini/?originalSubdomain=ng'
        },
        description: (
            <>
                This is a brief description of your expertise.
            </>
        ),
    },
    {
        name: 'Ronke Daini',
        title: 'program manager',
        imageUrl: '/img/about/ronke_daini.jpg',
        socials: {
            facebook: 'https://web.facebook.com/profile.php?id=100064439572542',
            twitter: 'https://twitter.com/ronkedaini',
            linkedin: 'https://www.linkedin.com/in/ronkedaini/?originalSubdomain=ng'
        },
        description: (
            <>
                This is a brief description of your expertise.
            </>
        ),
    },
];


function Team({ name, title, imageUrl, description, socials }) {
    return (

        <div className="col-xl-3 col-lg-4 col-md-6 col-12">

            {/* card */}
            <div className="card mb-4 card-hover">

                {/* img */}
                <div className="card-img-top">
                    <Image img={useBaseUrl(imageUrl)}
                        className="rounded-top-md img-fluid"
                        alt={name} />

                </div>
                {/* card body */}
                <div className="card-body main-background">
                    <h3 className="mb-0 fw-semibold">
                        {" "}
                        <a href="#" className="text-reset">
                            Oluronke Daini
                        </a>
                    </h3>
                    <p className="mb-3">Transformation Programs Manager|Service Management Professional</p>
                    <div class="lh-1  d-flex justify-content-between">
                        <div>
                            <span class="fs-6"><span>9,692</span> Students</span></div>
                        <div class="btn-group">
                            <a role="button" class="btn btn-outline-primary" aria-label="socialButton" href={socials.facebook}><i class="fa-brands fa-square-facebook" /></a>
                            <a role="button" class="btn btn-outline-primary" aria-label="socialButton" href={socials.twitter}><i class="fa-brands fa-square-x-twitter" /></a>
                            <a role="button" class="btn btn-outline-primary" aria-label="socialButton" href={socials.linkedin}><i class="fa-brands fa-linkedin" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AboutTeam() {
    return (
        <section id="AboutTeam" className='mt-5'>
            <div className="py-8 bg-light-gradient-top ">
                <div className="container">
                    <div className="row mb-8 justify-content-center">
                        {/* caption */}
                        <div className="col-lg-8 col-md-12 col-12 text-center">
                            <span className="card rounded-pill mb-3 d-block text-uppercase f-semibold"
                                style={{ backgroundColor: 'var(--ifm-background-color)' }}>
                                Meet Our Team
                            </span>

                            <h2 className="mb-2 display-4 fw-bold">
                                <u className="text-warning">
                                    <span className="text-primary">Industry Experts</span>
                                </u>
                                &nbsp;in Critical Fields
                            </h2>
                            <p className="lead">
                                Our Team consists of experts in the field of telcommunications, project management,
                                Systems Architecture and Software Engineering.
                            </p>
                        </div>
                    </div>
                    {/* row */}
                    <div className="row justify-content-center">
                        {Teammates.map((props, idx) => (
                            <Team key={idx} {...props} />
                        ))}
                        {/* btn */}
                        {/* <div className="col-md-12 mt-3 text-center">
                            <a href="#" className="btn btn-primary">
                                {" "}
                                See All Instructors{" "}
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>

        </section>
    );
}
