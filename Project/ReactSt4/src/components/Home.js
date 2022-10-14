import React from 'react'
import './Home.css'
import mainPhoto from "../WebsiteMaterial/images/img1.webp"
import housewire from "../WebsiteMaterial/images/housewire.jpg"
import dishcable1 from "../WebsiteMaterial/images/dishcable1.jpg"
import industrialwires from "../WebsiteMaterial/images/industrialwires.jpg"

import Navbar from './Navbar'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';



export default function Home() {
	return (
		<>
			<Navbar />
			
			<div >
				<img src={mainPhoto} id="main_photo" alt="..."/>
			</div>

			<div id="intro" >
			<h2 id="welcome">
						WELCOME 
					</h2>
					
				</div>

			<div id="wrapper">
				<div style={{ display: "flex" }}>
					<h1 id="wrapper_heading">Our Products</h1>
					<hr id="line_wrapper" />
				</div>
				<div className="wrapper">
					<Zoom>
						<Link to="/products" style={{ textDecoration: 'none' }}>
							<div className="card">
								<img src={housewire} alt="..." className='wires'/>
								<div className="info1">
								<Fade bottom>
									<h1 className='heading_para'>Gadgets</h1>
									<h6 className='paragraph_products'> 
									Electronic Items
									</h6>
								</Fade>
								</div>
							</div>
						</Link>
					</Zoom>
					<Zoom>
					<Link to="/products" style={{ textDecoration: 'none' }}>
						<div className="card">
							<img src={dishcable1} alt="..." />
							<div className="info1">
							<Fade bottom>
								<h1 className='heading_para'>Gadgets</h1>
								<h6 className='paragraph_products'> 
								Electronic Items
								</h6>
							</Fade>
							</div>

						</div>
					</Link>
					</Zoom>
					<Zoom>
						<Link to="/products" style={{ textDecoration: 'none' }}>
							<div className="card">
								<img src={industrialwires} alt="..." />
								<div className="info1">
								<Fade bottom>
									<h1 className='heading_para'>Gadgets</h1>
									<h6 className='paragraph_products'> 
									Electronic Items
									</h6>
								</Fade>
								</div>

							</div>
						</Link>
					</Zoom>
				</div>
			</div>

			<div id="container_home">
				<Slide right>
				<div className='content'>
					<h2 style={{"marginBottom":"25px"}}>Why choose Us?</h2>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Customer service.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						High performance electronic items.
						</p>
					</div>
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Wide range of products.
						</p>
					</div>
					
					<div className="content_in">
						<i className="fa-solid fa-clipboard-check" id="icon_clipboard"></i>
						<p className="content_points">
						Products designed to perform in all kinds of<br/>installations.
						</p>
					</div>
				</div>
				</Slide>
			</div>
			<h1 id="quality">
			     Quality Product Assured
			</h1>

			
			</>
	)
}