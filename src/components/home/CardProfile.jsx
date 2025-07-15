import { useState } from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Tech from './Tech';
import Sobre from './Sobre';
import { useTranslation } from 'react-i18next';

function CardProfile () {
    const { t } = useTranslation();

    const [value, setValue] = useState(4);

    return (
            <div id="home" className="min-h-screen w-80 sm:w-90 md:w-120 lg:w-120 flex flex-col items-center justify-center">

                <div className='w-80 sm:w-90 md:w-120 lg:w-120 p-3 sm:p-4 md:p-4 lg:p-4 flex flex-row text-white bg-[var(--black-gray)] rounded-xl items-center justify-center border border-gray-700 shadow-3xl'>
                    <img
                        src="https://github.com/davittiw.png"
                        alt="davittiw"
                        className='rounded-3xl w-24 h-24 border border-gray-500 shadow-2xl'
                    />
                    <div className='flex flex-col p-4 justify-center text-left w-full gap-1.5'>
                        <div className='flex flex-row justify-between items-center'>
                            <h1 className='font-bold'>Luccas</h1>

                            <div className="flex flex-row gap-2 items-center">
                                <div className="bg-green-500 w-2 h-2 rounded-md animate-pulse"></div>
                                <a href="https://www.linkedin.com/in/davttiw/" target="_blank">
                                    <h3 className='text-gray-500 hover:text-white transition-colors duration-200'>{t('Info.hire')}</h3>
                                </a>
                            </div>
                        </div>

                            <h3 className='text-gray-500 text-sm'>{t('Info.dev')}</h3>

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
                    <Sobre></Sobre>
                    <Tech />
            </div>
    );
}

export default CardProfile;