
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const Addmovie = () => {

      const top100Countries = [
        { name: 'China' },
        { name: 'India' },
        { name: 'United States' },
        { name: 'Indonesia' },
        { name: 'Pakistan' },
        { name: 'Brazil' },
        { name: 'Nigeria' },
        { name: 'Bangladesh' },
        { name: 'Russia' },
        { name: 'Mexico' },
        { name: 'Japan' },
        { name: 'Ethiopia' },
        { name: 'Philippines' },
        { name: 'Egypt' },
        { name: 'Vietnam' },
        { name: 'DR Congo' },
        { name: 'Turkey' },
        { name: 'Iran' },
        { name: 'Germany' },
        { name: 'Thailand' },
        { name: 'United Kingdom' },
        { name: 'France' },
        { name: 'Italy' },
        { name: 'Tanzania' },
        { name: 'South Africa' }
    ];

  return (
    <div>
        <div>
          <h1 className='absolute top-1/4 left-1/3 ml-20 text-white text-4xl font-bold'>ADD MOVIE/SERIES</h1>
        </div>
        <div className='flex mt-20'>
        {/* First Column */}
        <div className='w-1/2'>
          {/* Content for the first column can go here */}
        </div>
        {/* Second Column */}
        <div className='w-1/2'>
          {/* Div for Form */}
          <form className='w-full max-w-md'>

            <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='movieName'>
                Movie/ Series Name
              </label>
              <input
                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                id='movieName'
                type='text'
                placeholder='Movie/ Series Name'
              />
            </div>

            <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='movieName'>
                Description
              </label>
              <textarea
                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                id='description'
                placeholder='Movie/ Series Description'
                rows='4'
                />
            </div>

           

           <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='coutry'>
                Country
              </label>
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={top100Countries && top100Countries.map((option) => option.name)}
                renderInput={(params) => <TextField {...params} label="Search Country" />}
            />
            </div>

            <div className='mb-4'>
              <label  className='block text-black-500 text-sm font-normal mb-2'
                style={{
                  fontSize: '15px',
                  fontWeight: '400',
                  lineHeight: '18.15px',
                  textAlign: 'left'
                }} 
                htmlFor='Year'>
                Year
              </label>
              <input
                className='w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border border-gray rounded'
                id='coutry'
                type='text'
                placeholder='2024 / 08 / 01'
              />
            </div>

            <div className='mb-4'>
                <div className='inline-flex items-center w-full'>
                    <div className='flex items-center mr-20'>
                        <input
                        className='mr-1 leading-tight'
                        type='radio'
                        id='movie'
                        name='type'
                        value='movie'
                        />
                        <label
                        className='text-gray-700'
                        htmlFor='movie'
                        >
                        Movie
                        </label>
                    </div>
                    <div className='flex items-center ml-20'>
                        <input
                        className='mr-1 leading-tight'
                        type='radio'
                        id='series'
                        name='type'
                        value='series'
                        />
                        <label
                        className='text-gray-700'
                        htmlFor='series'
                        >
                        Series
                        </label>
                    </div>
                </div>
           </div>

             <div className='mb-4'>
                <div className='w-full'>
                    <button
                      className='w-full py-2 px-6 bg-[#7379FF] text-white rounded-full'
                    >
                      Save
                    </button>
                </div>
            </div>
           
         </form>

         
        </div>
      </div>
    </div>
  )
}
