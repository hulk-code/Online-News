
import { useLoaderData, useParams } from 'react-router-dom';
import Navber from '../../SharedItem/Navber/Navber';
import Header from '../../SharedItem/Header/Header';
import { useEffect, useState } from 'react';

const TodayNews = () => {
    
    const allNews=useLoaderData()
    
    const{id}=useParams()

    
    const idInt=parseInt(id)

    const news=allNews.find(News => News.category_id == id)
    const{details,title, author }=news

    console.log(allNews,idInt,news );
    return (
        <div>
            <Header></Header>
            <Navber></Navber>

            <div className='text-center m-5 font-poppins'>
            <p className='  text-2xl '>{author.name}</p>
            <p className='font-thin'>{author.published_date}</p>
            </div>
           <p className='font-bold text-center '>{title}</p>
           <hr />
           <p className='m-10 bg-slate-200 p-5'>{details}</p> 
         
        </div>
    );
};

export default TodayNews;