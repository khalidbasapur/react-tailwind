import React from 'react';

import profilePic from '../_assets/_images/profile.jpg';

export default function MyBio() {
	return (
		<>
			<div className="sm:flex m-2">
				<div className="sm:flex-shrink-0">
					<div className="max-w-sm rounded overflow-hidden shadow-lg">
						<img className="w-full" src={profilePic} alt="Display" />
						<div className="px-6 py-4">
							<div className="font-bold text-purple-500 text-xl mb-2">Khalid Basapur</div>
							<div className="text-sm text-indigo-700 mb-2">khalid.basapur@gmail.com</div>
							<div className="text-sm text-indigo-700 mb-2">+971-56-815-3900 | +91 93807 92098</div>
							<p className="text-gray-700 text-base">
								Fascinated Full stack developer has passion to code on challenging technologies to
								meet software industry demand.
								<span></span>😜
							</p>
						</div>
						<div className="px-6 py-4">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								#Full Stack Developer
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								#UI Developer
							</span>
						</div>
						<hr />
						<div className="px-6 py-4">
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								<a href="https://github.com/khalidbasapur" target="_blank">
									GitHub
								</a>
							</span>
							<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
								<a href="https://www.linkedin.com/in/khalid-basapur-4a432a16/" target="_blank">
									LinkedIn
								</a>
							</span>
						</div>
					</div>
				</div>
				<div className="mt-4 md:mt-0 md:ml-6">
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">Goal</div>
						<p className="mt-2 text-gray-600">
							Full stack developer looking for a new challenge around the world. I like to be close
							of the software development but always looking for more challenging opportunities. My
							ideal position is where I can create a bridge between the technical and business team
							to help the development of the organization.
						</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							Education
						</div>
						<p className="mt-2 text-gray-600">
							AIIS & MANAGEMENT BACHELOR of COMPUTER APPLICATIONS 2006 | Dharwad, Karnataka, India
						</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							Programming Languages
						</div>
						<p className="mt-2 text-gray-600">Java • C • C++ • Javascript • Typescript</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							Frameworks
						</div>
						<p className="mt-2 text-gray-600">React • Angular • Node JS • Spring • JSF • JSF2</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							WEB TECHNOLOGIES
						</div>
						<p className="mt-2 text-gray-600">HTML5 • CSS3 • Bootstrap • Material UI </p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							WEB SERVICES
						</div>
						<p className="mt-2 text-gray-600">RESTful • SOAP • Mircroservices </p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							DATABASES
						</div>
						<p className="mt-2 text-gray-600">Oracle • MySQL • MongoDB • DynamoDB</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							IT – DEVOPS
						</div>
						<p className="mt-2 text-gray-600">
							Windows • Linux • Docker • Openshift • GIT SVN • Jenkins • Sonarqube
						</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							PROJECT MANAGEMENT
						</div>
						<p className="mt-2 text-gray-600">
							Code Review • Technical Design • Coding Best Practices • Scrum Team Management •
							Estimations Business meetings and demo • Release and build management
						</p>
					</div>
					<hr />
					<div className="mb-2">
						<div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
							Primary Reponsibilties
						</div>
						<ul>
							<li className="mt-2 text-gray-600">
								Full stack developer responsible to build end to end application features by using
								micro service architecture.
							</li>
							<li className="mt-2 text-gray-600">
								Requirement analysis and technical design to provide low level UI and server
								components
							</li>
							<li className="mt-2 text-gray-600">Code review, GIT branching and management.</li>
							<li className="mt-2 text-gray-600">
								Leading team to force the respect of the best practices (Continuous integration,
								code quality) and deployment (DevOps)
							</li>
							<li className="mt-2 text-gray-600">
								RESTful web services development and integration with UI components
							</li>
							<li className="mt-2 text-gray-600">
								Design workshops, iteration planning and product backlog management
							</li>
						</ul>
					</div>
					<hr />
				</div>
			</div>
		</>
	);
}
