import $ from "./AboutMe.module.css";

const AboutMe = () => {
	return (
		<>
			<section className={$.about_section}>
				<div className="container">
					<div className={$.about}>
						<div className={$.about__Top}>
							<h2 className={$.about__title}>About.</h2>
							<p className={$.about__text}>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
								dicta nisi cum? Repellendus, numquam eum! Odio voluptas nihil
								voluptatem tempora voluptates sit quos labore ut architecto
								quis, cum, aperiam facilis?
							</p>
						</div>
						<ul className={$.about__list}>
							<li className={$.about__item}>
								<span>2017-2020</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
									quidem enim dolore unde vel ex placeat deleniti obcaecati in.
									Provident laboriosam explicabo voluptas aliquam esse totam
									cumque quasi, iusto magni molestias rem ullam libero.
								</p>
							</li>
							<li className={$.about__item}>
								<span>2020-Present</span>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
									quidem enim dolore unde vel ex placeat deleniti obcaecati in.
									Provident laboriosam explicabo voluptas aliquam esse totam
									cumque quasi, iusto magni molestias rem ullam libero.
								</p>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default AboutMe;
