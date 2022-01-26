import { Carousel } from 'react-bootstrap'

const Slideshow = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block"
            width="100%"
            height="350px"
            src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            width="100%"
            height="350px"
            className="d-block"
            src="https://nystudio107-ems2qegf7x6qiqq.netdna-ssl.com/img/blog/_1200x675_crop_center-center_82_line/image_optimzation.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            height="350px"
            className="d-block "
            src="https://cdn.pixabay.com/photo/2015/01/07/15/51/woman-591576__340.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default Slideshow;