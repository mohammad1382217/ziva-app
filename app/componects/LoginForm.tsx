import ButtonZiva from './Button';
import InputZiva from './Input';

async function handleSubmit(formData: FormData) {
  'use server';
  
  const phone_number = formData.get('phone_number');
  // پردازش در سرور
  console.log('phone_number:', phone_number);
}

const loginForm = () => {
  return (
    <form action={handleSubmit}>
      <InputZiva 
        name="phone_number" 
        label="شماره موبایل" 
        type="text"
      />
      <ButtonZiva buttonText={"تایید و دریافت کد"} type={"submit"}/>
    </form>
  );
}

export default loginForm;