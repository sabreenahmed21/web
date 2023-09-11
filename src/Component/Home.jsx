/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState ,  useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
//import imgs
import HeaderBack from "../images/headerback.png";
import wave from "../images/wave.svg";
import w from "../images/6232406724bd9b36622aed48_image 3 (Traced).svg";
import team from "../images/team.svg";
//import email.js
import emailjs from '@emailjs/browser';
//import axios
import axios from "axios";
// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
//import app.css
import "../StyledComponent/App.css";



function Home() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_zyina7e', 'template_z9p6tji', form.current, 'VIFtnOVIKWYpsFUaL')
      .then((result) => {
          console.log(result.text);
          alert('your msg send successfully');
      }, (error) => {
          console.log(error.text);
          alert("your msg wasn't received nsuccessfully");
      });
  };

  return (
    <>
      <section className="content_header">
        <Container>
          <Row>
            <Col sm={12} md={7} className="box_content">
              <p>
                WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span>
                SEO
              </p>
              <h1>We Are Shiloh .</h1>
              <h5>
                We build marketing websites that help you sell on autopilot.
              </h5>
              <HashLink to="/#contact">
                <button>Let's talk</button>
              </HashLink>
            </Col>
            <Col sm={12} md={5}>
              <div className="imgs">
                <img src={wave} alt="" className="waves" />
                <img src={HeaderBack} alt="" className="laptop" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="content_sec2" id="process">
        <Container>
          <Row>
            <Col sm={12} md={6} className="box_content-sec2">
              <div className="imgs_sec2">
                <img src={wave} alt="img" className="wave" />
                <img src={team} alt="img" className="team" />
              </div>
            </Col>
            <Col sm={12} md={6} className="box_content-sec2">
              <button>the dream</button>
              <p>
                Imagine having your sales team on the job 24/7, interacting with
                an endless stream of ready-to-buy visitors.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="content_sec3" id="latest">
        <Container>
          <div className="content_sec3-head">
            <h3>latest builds .</h3>
            <Link to="/projects" className="link_project">
              view projects
            </Link>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 100,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              520: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projects.slice(1, 6).map((project) => (
              <SwiperSlide key={project.id}>
                <Link to={project.link} target="_blank">
                  <img src={project.photo} alt="" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
      <section className="content_sec4" id="service">
        <Container>
          <h2>How it's done.</h2>
          <div className="sec4_boxes">
            <img src={wave} alt="" className="img" />
            <div className="sec4_box divRight">
              <img src={w} alt="" />
              <div>
                <h5>UX/UI Design</h5>
                <p>Where concepts turn into a strategic user-experience.</p>
              </div>
            </div>
            <div className="sec4_box">
              <img src={w} alt="" />
              <div>
                <h5>UX/UI Design</h5>
                <p>Where concepts turn into a strategic user-experience.</p>
              </div>
            </div>
            <div className="sec4_box divRight">
              <img src={w} alt="" />
              <div>
                <h5>UX/UI Design</h5>
                <p>Where concepts turn into a strategic user-experience.</p>
              </div>
            </div>
            <div className="sec4_box">
              <img src={w} alt="" />
              <div>
                <h5>UX/UI Design</h5>
                <p>Where concepts turn into a strategic user-experience.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="content_sec5" id="contact">
        <Container>
          <h3>Contact Us</h3>
          <Row className="sec5_row">
            <Col md={6} sm={12}>
              <div>
                <p>
                  <span>Email:</span> info@gmail.com
                </p>
                <p>
                  <span>Phone:</span> 0121133133131
                </p>
                <p>
                  <span>Address:</span> 23 street newyork
                </p>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <input type="text"  placeholder="Name" name="user_name"/>
                  <div className="d-flex">
                    <input type="emil" name="user_email" placeholder="Email" />
                    <input type="phone" name="phone" placeholder="Phone" />
                  </div>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Home;
