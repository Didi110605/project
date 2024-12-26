import handsImg from '../images/offImg.png'
import styles from './OffForm.css';

function OffForm() {

    return (
      <div className="offForm">
        <h1>5% off on the first order</h1>
        <div className="discountForm">
          <img src={handsImg} />
          <form className='discountAutoForm'>
          <fieldset>
            <ul>
              <li>
              <input type="text" name="name" id="name_1" placeholder="Name" />
              </li>
              <li>
              <input type="tel" name="phone" id="phone_1" placeholder="Phone number" />
              </li>
              <li>
              <input type="email" name="email" id="email_1" placeholder="Email" />
              </li>
              <li>
                <input type="submit" name="submit" id="submitl_1" value="Get a discount"/>
              </li>
            </ul>
            </fieldset>
          </form>
          
        </div>
      </div>
    );
  }
  
  export default OffForm;
