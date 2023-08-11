import React from 'react'

export default function Home() {
    return (
        <>

            <div className="container">
                <div className="product-info">

                    <div className='title'>
                        <h1>YOUR FEET DESERVE BEST</h1>
                    </div>

                    <div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa atque fugit, aspernatur ipsum velit necessitatibus facilis, incidunt ut obcaecati quas error, iusto at nulla. Aliquam blanditiis earum sequi non. Adipisci, ipsum. Tempore nobis officia ex! </p>
                    </div>

                    <div>
                        <button className='btn btn-danger mr-4'>Shop Now</button>
                        <button className='btn btn-success mx-4'>Category</button>
                    </div>

                    <div className='py-4'>
                        <i className="fa-brands fa-facebook fa-2x" alt='icon'></i>
                        <i className="fa-brands fa-square-instagram fa-2x mx-4"></i>
                    </div>

                </div>


                <div className="product-img">

                    <img src="/images/product.png" alt="" />

                </div>
            </div>

        </>
    )
}
