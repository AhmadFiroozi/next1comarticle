import { useParams } from 'react-router-dom';
import MyNavbar from '../../components/Navbar/Navbar';
import './Course.css';
import { courseData } from '../../data';
import { Col, Container, Row } from 'react-bootstrap';
function Course(){
    const courseid=useParams().courseId
    const CourseInfo=courseData.find(course=> course.id == courseid )
return(
    <>
    <MyNavbar/>
    <Container>
        <Row className="align-items-center">
            <Col md={5}>
            <img className='img-fluid' src={CourseInfo.img} alt="" />
            </Col>
            <Col md={7} className='my-3'>
            <h1 style={{fontFamily:'Lalezar'}}>{CourseInfo.title}</h1>
            <p>نام مدرس:{CourseInfo.teacher} </p>
            <p><b>{CourseInfo.text}</b></p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
            </Col>

        </Row>
    </Container>
    </>
)
}
export default Course