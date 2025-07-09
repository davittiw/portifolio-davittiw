import { Heart } from 'lucide-react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

function CardProfile () {
    const [value, setValue] = useState(3);
    return (
        <div className="min-h-screen flex items-center justify-center" id='home'>
            <div className='flex flex-row text-white bg-[var(--black-gray)] p-5 rounded-xl w-100 bg-[url(--primary-two)] items-center justify-center border border-gray-700 shadow-3xl'>
                <img
                    src="https://github.com/davittiw.png"
                    alt="davittiw"
                    className='rounded-3xl w-24 h-24'
                />
                <div className='flex flex-col p-4 justify-center text-left w-full gap-1.5'>
                    <div className='flex flex-row justify-between items-center'>
                        <h1 className='font-bold'>Davittiw</h1>
                        <a href="#"><Heart size={15} strokeWidth={0.5} /></a>
                    </div>
                    <h3 className='text-gray-500 text-xs'>Desenvolvedor Full-Stack</h3>
                    <Box sx={{ '& > legend': { mt: 2 } }} className="flex items-center gap-2">
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                        <span className="text-gray-300 text-xs">{value} / 5</span>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default CardProfile;