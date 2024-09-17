import ButtonZiva from './Button';
import InputZiva from './input';

async function handleSubmit(formData: FormData) {
  'use server';
  
  const phone_number = formData.get('phone_number');
  // پردازش در سرور
  console.log('phone_number:', phone_number);
}

const LoginForm: React.FC = () => {
  return (
    <form action={handleSubmit} className='grid gap-8'>
      <InputZiva 
        name="phone_number" 
        label="شماره موبایل" 
        type="text"
      />
      <ButtonZiva buttonText={"تایید و دریافت کد"} type={"submit"}/>
    </form>
  );
}

export default LoginForm;