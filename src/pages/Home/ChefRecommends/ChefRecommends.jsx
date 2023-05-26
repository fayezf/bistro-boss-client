import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img from '../../../assets/home/slide1.jpg'

const ChefRecommends = () => {
    return (
        <section>
            <SectionTitle
                heading="Chef Recommends"
                subHeading="Should Try"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 ml-20'>
                <div className="card w-80 h-2/3 bg-base-200 shadow-xl">
                    <figure className="">
                        <img src={img} alt="" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-accent text-white">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-2/3 bg-base-200 shadow-xl">
                    <figure className="">
                        <img src={img} alt="" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-accent text-white">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card w-80 h-2/3 bg-base-200 shadow-xl">
                    <figure className="">
                        <img src={img} alt="" className="rounded-xl w-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caeser Salad</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions">
                            <button className="btn btn-accent text-white">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommends;