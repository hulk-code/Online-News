import moment from 'moment';
import logo from '../../../../assets/logo.png'
const Header = () => {
    return (
        <div className='mb-5 mt-5 text-center'>
         <img className='mx-auto' src={logo} alt="" />
         <h1 className=' font-poppins font-thin'>Journalism Without Fear or Favour</h1>
         <p className=' font-poppins font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;