import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar';
import { useState } from 'react'
import files from '../public/illustration-intro.png'
import Link from 'next/link'
import access from '../public/icon-access-anywhere.svg'
import security from '../public/icon-security.svg'
import collaboration from '../public/icon-collaboration.svg'
import anyFiles from '../public/icon-any-file.svg'
import productive from '../public/illustration-stay-productive.png'
import arrow from '../public/icon-arrow.svg'
import profile1 from '../public/profile-1.jpg'
import profile2 from '../public/profile-2.jpg';
import profile3 from '../public/profile-3.jpg';
import quote from '../public/bg-quotes.png'
import Footer from '../comps/Footer';


export default function Home() {
	const[email, setEmail]=useState()
	return (
		<>
			<Head>
				<title>Fylo landing page</title>
				<meta name=' Flyo Landing Page' content='front end mentor' />
				<meta
					name='description'
					content='Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends family, and co-workers.'
				/>
			</Head>
			<div>
				<Navbar />
			</div>
			<main>
				<section className='flex flex-col justify-center items-center text-white'>
					<Image src={files} alt='files' />
					<h2 className='text-center font-extrabold lg:text-5xl  mb-4 leading-loose'>
						All your files in one secure location,
						<br /> accessible anywhere.
					</h2>
					<p className='text-center lg:text-2xl tracking-wide'>
						Fylo stores all your most important files in one secure location.
						<br />
						Access them wherever you need, share and collaborate with
						<br /> friends family, and co-workers.
					</p>
					<div className='#Sign In mb-6 lg:mb-0'>
						<button className='btnCta p-3 rounded-full mt-6 btn-width'>
							{' '}
							Get Started
						</button>
					</div>
				</section>
				<section className='bg-cover' id='features'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-14'>
						<div className='text-white text-center '>
							<Image
								src={access}
								alt='access'
								width={70}
								height={70}
								className='text-center'
							/>
							<h3 className='my-3 font-extrabold text-lg'>
								{' '}
								Access your files, anywhere
							</h3>
							<p className='leading-5'>
								The ability to use a smartphone, tablet, or computer <br /> to
								access your account means your files follow you
								<br /> everywhere.
							</p>
						</div>
						<div className='text-white text-center '>
							<Image
								src={security}
								alt='security'
								width={70}
								height={70}
								className='text-center'
							/>
							<h3 className='my-3 font-extrabold text-lg'>
								{' '}
								Security you can trust
							</h3>
							<p className='leading-5'>
								2-factor authentication and user-controlled encryption are
								<br /> just a couple of the security features we allow to help
								<br /> secure your files.
							</p>
						</div>
						<div className='text-white text-center '>
							<Image
								src={collaboration}
								alt='collaboration'
								width={70}
								height={70}
								className='text-center'
							/>
							<h3 className='my-3 font-extrabold text-lg'>
								{' '}
								Real-time collaboration
							</h3>
							<p className='leading-5'>
								Securely share files and folders with friends, family and
								<br />
								colleagues for live collaboration. No email attachments
								<br /> required.
							</p>
						</div>
						<div className='text-white text-center '>
							<Image
								src={anyFiles}
								alt='anyFiles'
								width={70}
								height={70}
								className='text-center'
							/>
							<h3 className='my-3 font-extrabold text-lg'>
								{' '}
								Store any type of file
							</h3>
							<p className='leading-5'>
								Whether sharing holidays photos or work
								<br /> documents, Fylo has you covered allowing for all file
								<br /> types to be securely stored and shared.
							</p>
						</div>
					</div>
				</section>
				<section className='container mx-auto' id='team'>
					<div className='grid grid-cols-1 lg:grid-cols-2 text-white mt-11'>
						<div>
							<Image src={productive} alt='productive' />
						</div>
						<div className='mt-24'>
							<div>
								<h3 className=' heading-group font-extrabold lg:text-5xl tracking-wider leading-10'>
									{' '}
									Stay productive,
									<br /> wherever you are
								</h3>
								<div className='para-group mt-8 leading-loose text-lg tracking-wider'>
									<p>
										Never let location be an issue when accessing your files.
										<br />
										Fylo has you covered for all of your file storage needs.
									</p>
									<p className='mt-6'>
										Securely share files and folders with friends, family and
										colleagues for live <br /> collaboration. No email
										attachments required.
									</p>
								</div>
								<div className='flex items-center '>
									<Link href='#'>
										<a className='linkWork mr-2 text-lg tracking-widest arrow '>
											{' '}
											See how Fylo works
										</a>
									</Link>
									<Image src={arrow} alt='arrow' />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					className='container mx-auto  mt-8  overflow-hidden'
					id='testimonials'>
					<div className='quote'>
						<Image src={quote} alt='quote' width={40} height={40} />
					</div>
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '>
						<div className='card text-white bg-testimonial p-8 rounded-xl z-10 mx-1'>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
							<div className='flex mt-4 '>
								<div>
									<Image
										src={profile1}
										alt='profile1'
										width={30}
										height={30}
										className='rounded-full'
									/>
								</div>
								<div className='ml-2 testimonal-para'>
									<p className='testimonal-para font-extrabold'>Satish Patel</p>
									<p className='testimonal-para'>Founder & CEO, Huddle</p>
								</div>
							</div>
						</div>
						<div className='card text-white bg-testimonial p-8 rounded-xl mx-1 '>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
							<div className='flex mt-4 '>
								<div>
									<Image
										src={profile2}
										alt='profile2'
										width={30}
										height={30}
										className='rounded-full'
									/>
								</div>
								<div className='ml-2 testimonal-para'>
									<p className='testimonal-para font-extrabold'>
										Bruce McKenzie
									</p>
									<p className='testimonal-para'>Founder & CEO, Huddle</p>
								</div>
							</div>
						</div>
						<div className='card text-white bg-testimonial p-8 rounded-xl mx-1'>
							<p>
								Fylo has improved our team productivity by an order of
								magnitude. Since making the switch our team has become a
								well-oiled collaboration machine.
							</p>
							<div className='flex mt-4 '>
								<div>
									<Image
										src={profile3}
										alt='profile3'
										width={30}
										height={30}
										className='rounded-full'
									/>
								</div>
								<div className='ml-2 testimonal-para'>
									<p className='testimonal-para font-extrabold'> Iva Boyd</p>
									<p className='testimonal-para'>Founder & CEO, Huddle</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className=' container mx-auto bg-testimonial text-white mt-12 p-12  rounded-md access-card overflow-hidden access-container '>
					<div className='flex flex-col justify-center items-center'>
						<h3 className='font-extrabold text-2xl'>Get early access today</h3>
						<p className='mt-4 text-center text-base'>
							It only takes a minute to sign up and our free starter tier is
							extremely generous. If you have any questions, our support team
							would be happy to help you.
						</p>
						<div className='flex mt-5 input-div overflow-hidden'>
							<form action='https://fabform.io/f/HkXuu5z' method='post'>
								<input
									name='email'
									type='email'
									placeholder='email@example.com'
									className='rounded-full input p-2 mb-1 text-black'
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<button
									type='submit'
									className='btnCta p-2 rounded-full lg:ml-4 btn-input'>
									{' '}
									Get Started For Free
								</button>
							</form>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
}
