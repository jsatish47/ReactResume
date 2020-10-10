import React from 'react'
import './Resume.css'

function Resume() {
    return (
    <div className="wrapper">
		<div className="resume">
			<div className="left">
				<div className="img_holder">
					
				</div>
				<div className="contact_wrap pb">
					<div className="title">
						Contact
					</div>
					<div className="contact">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-mobile-alt" aria-hidden="true"></i></div>
									<div className="text">7659906934</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="far fa-envelope"></i></div>
									<div className="text">satishrajendra.jetty@gmail.com</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-weebly" aria-hidden="true"></i></div>
									<div className="text">https://github.com/jsatish47</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-map-signs" aria-hidden="true"></i></div>
									<div className="text">7-43/A,Main Bazar,Chagalamarri</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="skills_wrap pb">
					<div className="title">
						Skills
					</div>
					<div className="skills">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-html5"></i></div>
									<div className="text">HTML</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-css3-alt"></i></div>
									<div className="text">CSS</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-js"></i></div>
									<div className="text">Javascript</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fab fa-react"></i></div>
									<div className="text">React.JS</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="hobbies_wrap pb">
					<div className="title">
						hobbies
					</div>
					<div className="hobbies">
						<ul>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-book"></i></div>
									<div className="text">Reading</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-music"></i></div>
									<div className="text">Music</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-gamepad"></i></div>
									<div className="text">Gaming</div>
								</div>
							</li>
							<li>
								<div className="li_wrap">
									<div className="icon"><i className="fas fa-tree"></i></div>
									<div className="text">Gardening</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="header">
					<div className="name_role">
						<div className="name">
							J.Satish Rajendra
						</div>
						<div className="role">
							Software Engineer
						</div>
					</div>
                    <hr></hr>
					<div className="about">
						Striving hard by learning and unlearning things to get success
					</div>
				</div>
				<div className="right_inner">
					<div className="exp">
						<div className="title">
							Education
						</div>
						<div className="exp_wrap">
							<ul>
								<li>
									<div className="li_wrap">
										<div className="date">
											2021
										</div>
										<div className="info">
											<p className="info_title">
												Rajeev Gandhi Memorial College of Engineering and Technology
											</p>
											
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
											2017
										</div>
										<div className="info">
											<p className="info_title">
											    Narayana Junior College
											</p>
											
										</div>
									</div>
								</li>
								<li>
									<div className="li_wrap">
										<div className="date">
											2015
										</div>
										<div className="info">
											<p className="info_title">
												S.T.Annes E.M. High School
											</p>
											
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="education">
						<div className="title">
							Project
						</div>
						<div className="education_wrap">
							<ul>
								<li>
									<div className="li_wrap">
										<div className="date">
											14-09-2020 to 03-10-2020
										</div>
										<div className="info">
											<p className="info_title">
												Resume using React
											</p>
											<p className="info_cont">
												While doing this project I have learnt how to work with components,style modules,props,lifecycle methods,state.
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Resume
