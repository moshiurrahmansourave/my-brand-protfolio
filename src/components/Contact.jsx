import { useEffect } from 'react';
import animationData from '../../public/animation/contactAnimation.json'; 
import lottie from 'lottie-web';
import { useRef } from 'react';
import "./contact.css"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjvnbqb");

  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    if (animationContainer.current) {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
      anim.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData, 
      });
    }
    return () => {
      if (anim.current) {
        anim.current.destroy();
        anim.current = null;
      }
    };
  }, []);

  
    return (
        <div className=''>   
      <div id="contact" className=" p-16">   
  <div className="flex flex-col lg:flex-row contact-us justify-between items-center ">
   
    <div className='flex flex-col'>
    <div>
      <h1 className='title'>Contact Us</h1>  
      <p className='sub-title'>Contact us for more information and Get notified when i publish something new</p>
      </div>  
      <form onSubmit={handleSubmit} className=''>

        <div className='mt-6 flex  lg:flex-row flex-col  items-center'>
        <label htmlFor="email">Email Address:</label>
        <input autoComplete='off' type="email" name='email' id='email' />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        </div>

        <div className='mt-6 flex lg:flex-row flex-col items-center'>
        <label htmlFor="message">Your message:</label>
        <textarea name="message" id="message"></textarea>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        </div>

        <button type="submit" disabled={state.submitting} className='submit flex justify-start'>{state.submitting ? "submitting.." : "Submit"}</button>
        {state.succeeded && (<h2>Your message has been sent successfully</h2>)}
      </form>
    </div>

    <div className='w-96'>
   <div ref={animationContainer} />
   </div>
  </div>
</div>
        </div>
    );
};

export default Contact;