import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.svg'
import location from '../public/map-pin (1).svg'
import phone from '../public/icon-phone.svg'
import email from '../public/icon-email.svg'
import linkedin from '../public/linkedin (2).svg'
import twitter from '../public/twitter (1).svg'
import instagram from '../public/instagram (1).svg'
const Footer = () => {
	return (
		<>
			<footer className='bg-footer '>
				<div className='contaier mx-auto'>
					<div className='img-footer'>
						<Image src={logo} alt='logo' />
					</div>
					<div className='footer-layout'>
						<div className='text-white flex'>
							<div>
								<Image src={location} alt='location' width={50} height={50} />
							</div>
							<div>
								<p className='footer-location '>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua
								</p>
							</div>
						</div>
						<div>
							<div className='text-white flex num-mail'>
								<div>
									<Image src={phone} alt='phone' className='footer-location' />
								</div>
								<div>
									<p className='footer-location'>+1-543-123-4567</p>
								</div>
							</div>

							<div className='text-white flex'>
								<div>
									<Image src={email} alt='email' className='footer-location' />
								</div>
								<div>
									<p className='footer-location'>+1-543-123-4567</p>
								</div>
							</div>
						</div>
						<div className='text-white'>
							<p>About Us</p>
							<p className='mt-4'>Jobs</p>
							<p className='mt-4'>Press</p>
							<p className='mt-4'>Blogs</p>
						</div>
						<div className='text-white'>
							<p className='mt-4'> Contact Us</p>
							<p className='mt-4'>Terms</p>
							<p className='mt-4'>Privacy</p>
						</div>
						<div className='text-white flex div'>
							<div className='socials'>
								<Link href='https://www.linkedin.com/in/ijeoma-igboagu/'>
									<a className='border-radius border-container'>
										{' '}
										<Image src={linkedin} alt='linkedin' />
									</a>
								</Link>
							</div>
							<div className='socials'>
								<Link href='https://twitter.com/ijaydimples'>
									<a className='border-radius border-container'>
										{' '}
										<Image src={twitter} alt='twitter' />
									</a>
								</Link>
							</div>
							<div className='socials'>
								<Link href='https://www.instagram.com/ij.ijay/'>
									<a className='border-radius border-container'>
										{' '}
										<Image src={instagram} alt='instagram' />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className='text-white mt-8'>
					Coded by
					<Link href='https://github.com/ijayhub'>
						<a> Ijay &copy; 2022</a>
					</Link>{' '}
				</div>
			</footer>
		</>
	);
};

export default Footer;
