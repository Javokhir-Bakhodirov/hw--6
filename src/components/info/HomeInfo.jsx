import $ from "./HomeInfo.module.css";
import avatar from "../../img/avatar.png";

const HomeInfo = () => {
	return (
		<section className={$.info_section}>
			<div className="container">
				<div className={$.info}>
					<div className={$.info__content}>
						<p className={$.info__text}>
							Hello, I'm Javokhir,
							<br />
							<span>Web Developer</span> based in Uzbekistan.
						</p>
						<div className={$.btn_shadow}>
							<a href="#" className={$.info__btn}>
								Resume
							</a>
						</div>
					</div>
					<div className={$.info__imgBox}>
						<img src={avatar} alt="" width={500} height={500} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeInfo;
