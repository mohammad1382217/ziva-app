import ButtonZiva from './Button';
import InputZiva from './input';

const LoginForm: React.FC = () => {
  const handleSubmit = async(formData: FormData) => {
    'use server';
    
    const phone_number = formData.get('phone_number');
    console.log('phone_number:', phone_number);
  }

  return (
    <form action={handleSubmit} className='w-[440px] max-w-[90%] h-full grid items-center justify-center gap-8 bg-gray-50'>
      <InputZiva 
        name="phone_number" 
        label="شماره موبایل" 
        type="text"
        classNames={{inputWrapper: "min-w-[116px]"}}
      />
      <div className="grid gap-4">
        <ButtonZiva buttonText={"تایید و دریافت کد"} type={"submit"}/>
        <span className='text-gray-500'>ورود شما به معنای پذیرش شرایط زیوا و قوانین حریم خصوصی است</span>
      </div>
    </form>
  );
}

export default LoginForm;