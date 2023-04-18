
import './css/hero.css'
import hero_image from '../image/Untitled design.png'
import DateRangePicker from './datepicker';

const Hero = () => {

    return (
        <>

            <div className='car_app_img_container'>
                <img src={hero_image} alt="" className='car_app_img' />
                <div className='info_hero'>
                    <DateRangePicker />
                </div>
            </div>


        </>

    );
}

export default Hero;
