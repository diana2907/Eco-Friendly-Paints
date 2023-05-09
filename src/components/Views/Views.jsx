import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        display: 'flex',
        // marginTop: '20px',
        // marginLeft: 'auto',
        // marginRight: '80px',
        border: '2px solid #52503B',
        borderRadius: '50%',
        fill: '#52503B',
        width: '60px',
        height: '60px',
      }}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        position: 'absolute',
        display: 'flex',
        // marginTop: '20px',
        // marginLeft: 'auto',
        // marginRight: '20px',
        border: '2px solid #52503B',
        borderRadius: '50%',
        fill: '#52503B',
        width: '60px',
        height: '60px',
      }}
    />
  );
}

export default function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    centerPadding: '20px',
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

// style={{
//     display: "flex",
//     // position: "absolute",
//     // top: "450px",
//     marginTop: "20px",
//     marginRight: "50px",
//     border: "2px solid #52503B",
//     borderRadius: "50%",
//     fill: "#52503B",
//     width: "60px",
//     height: "60px"
//   }}
