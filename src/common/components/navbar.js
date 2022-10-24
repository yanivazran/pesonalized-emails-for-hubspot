import Link from 'next/link'
import Image from 'next/image';
import Head from 'next/head';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Head>
				<meta
						name="navbar"
						content="use to navigate to site"
				/>
				<meta
						property="og:image"
						content="company logo"
				/>
			</Head>
			<div className="container-fluid">
				<Link href="/">
					<a className="nav-link" >
						<Image
								priority
								src="/images/logo.png"
								className=""
								height={60}
								width={70}
								alt=""
						/>
					</a>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
						<li className="nav-item px-2">
								<Link href="/">
										<a className="nav-link active" aria-current="page"
												href="/">Home
										</a>
								</Link>
						</li>
						<li className="nav-item px-2">
								<Link href="/user/user-page">
										<a className="nav-link" >About</a>
								</Link>
						</li>
						<li className="nav-item px-2 dropdown">
								<Link href="#">
										<a className="nav-link dropdown-toggle" id="navbarDropdown"
												role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Resources
										</a>
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
										<li><Link href="#">
												<a className="dropdown-item" >Action</a>
										</Link>
										</li>
										<li><Link href="#">
												<a className="dropdown-item" >Action</a>
										</Link>
										</li>
										<li><Link href="#">
												<a className="dropdown-item" >Action</a>
										</Link>
										</li>
								</ul>
						</li>
						<li className="nav-item">
								<a className="nav-link disabled" href="#" tabIndex="-1"
										aria-disabled="true">Login First
								</a>
						</li>
					</ul>
				</div>
			</div>
    </nav>
  );
}