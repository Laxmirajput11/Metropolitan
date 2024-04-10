import React from 'react'

function Cards() {
  return (
    <div className='bg-white p-10 shadow-xl text-center' style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <h1 className='text-xl text-black'>Fencing Canada</h1>
    <h1 className='text-4xl mb-10 font-bold text-black'>Keep Your Family & Property Safe With Our Great Variety Of Options</h1>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2px' }}>
        <div className="card flex-1 bg-base-100 shadow-xl image-full mx-12" style={{ maxHeight: '250px' }}>
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="text-center">Shoes!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-center">
                   <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
               </div>
           </div>
        </div>
        <div className="card flex-1 bg-base-100 shadow-xl image-full mx-12" style={{ maxHeight: '250px' }}>
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="text-center">Shoes!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-center">
                   <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
               </div>
           </div>
        </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2px' }}>
        <div className="card flex-1 bg-base-100 shadow-xl image-full mx-12" style={{ maxHeight: '250px' }}>
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="text-center">Shoes!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-center">
                   <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
               </div>
           </div>
        </div>
        <div className="card flex-1 bg-base-100 shadow-xl image-full mx-12" style={{ maxHeight: '250px' }}>
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="text-center">Shoes!</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div className="card-actions justify-center">
                   <button className="btn btn-primary rounded-md" style={{ width: '280px', height: '10px' }}>Buy Now</button>
               </div>
           </div>
        </div>
    </div>
</div>

  )
}

export default Cards;