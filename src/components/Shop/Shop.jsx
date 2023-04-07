import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Shop = () => {
// const phones = useLoaderData().data;

const phonesData = useLoaderData();
const phones = phonesData.data;
// console.log(phones)

    return (
        <div>
            <div className='grid grid-cols-4'>
                <div className='grid grid-cols-3 gap-4 col-span-3 m-5'>
                    {
                        phones.map((phone, index) => <Product
                        key={index}
                        phone={phone}
                        ></Product>)
                    }

                </div>
                <div>
                    

                </div>
            </div>
            
        </div>
    );
};

export default Shop;