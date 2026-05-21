
import { RiseLoader } from 'react-spinners';

const LoadingPage = () => {
    return (
        <div className='flex justify-center mt-[30%]'>
            <div>
                <RiseLoader color="red" />
                <h1>Loading...</h1>
            </div>

        </div>
    );
};

export default LoadingPage;