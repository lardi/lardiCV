import Image from 'next/image';
import appsLogos from '../api/apps-logos';

const LogoComponent = () => {
  return (
    <div className='grid grid-cols-3 lg:grid-cols-6 lg:gap-9 gap-6 my-9'>
      {appsLogos.map(app => (
        <div className='border
        border-zinc-400
        border-2
        lg:px-6 px-3 py-4 bg-zinc-800
        flex
        justify-center
        shadow-[8px_8px_0_0_rgb(95,95,95,0.6)]' key={app.name}>
          <div className='flex-col flex items-center'>
            <div className='flex-1 items-center flex'>
              <Image
                src={`/logos/${app.filename}`} // Adjust the path to your logos
                width={50}
                height={50}
                alt={app.name}
                className='filter grayscale hover:filter-none'
            />
            </div>

            <p className='text-center lg:text-sm text-xs text-zinc-500 mt-1'>{app.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LogoComponent;
