import moment from 'moment';
import logo from '../../../../assets/logo.png'
const Header = () => {
    return (
        <div className='w-1/2 mx-auto mb-5 mt-5'>
         <img src={logo} alt="" />
         <h1 className=' md:ml-20 font-poppins font-thin'>Journalism Without Fear or Favour</h1>
         <p className=' md:ml-20 font-poppins font-bold'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;