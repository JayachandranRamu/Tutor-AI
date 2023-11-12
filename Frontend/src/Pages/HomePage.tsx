import React from 'react'

const HomePage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      {/* <img
                        className='w-[5%]'
                        src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ho35tkb7ss6w1inf6di.png"
                        alt="Your Company"
                      /> */}
        <img className='w-[80%] m-auto sm:w-[50%] md:w-[40%] lg:w-[40%]' src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9gcxzhuj3nw51xef94rx.jpg" alt="" />
        {/* <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"> */}

{/* <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
    <img src="https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg" className=" w-[100%] " alt="" />

</div>

</div>
<div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">

    <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
</div> */}
        <section className="text-white dark:bg-gray-900">
    <div className=" px-4 mx-auto max-w-screen-xl text-center ">
        <h1 className="mb-4 text-4xl font-extrabold  leading-none  md:text-5xl lg:text-6xl dark:text-white">Decode Your Career <br /> Elevate with <span className='text-purple-500'>AI Interviews</span></h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Empower your journey to success by mastering interviews with precision on our <br /> AI-enhanced platform.</p>
        <div className="m-auto">
            <a href="/login" className="inline-flex  justify-center items-center w-[200px] py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                GET STARTED
                
            </a>
           
        </div>
    </div>
</section>



    </div>
  )
}

export default HomePage