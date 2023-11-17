import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])
    return (
        

        
        <>
        <Helmet>
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                    EasyShop
                    </h1>
                <p>Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.
                   Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                  mod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                mod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.</p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2R1Y3QlMjBqcGVnfGVufDB8fDB8fHww' alt="Segun Adebayo"/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Segun Adebayo"/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How We Work?
                    </h1>
                <p>Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                   Id laborum nostrud aute id et voluptate. Deserunt nisi ex et elit officia ex ea. Consectetur magna aliqua mollit ea velit anim eiusmod ea exercitation sit ex dolore. Dolor velit proident veniam id quis labore nostrud amet tempor excepteur. Do eiusmod ut cupidatat ea laboris elit dolore proident mollit labore magna aliquip. Dolor et cupidatat minim qui ad sunt ea aute fugiat.
                   Est exercitation laboris Lorem sint Lorem id aute excepteur sint cupidatat. Et enim minim aliqua cillum sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.
                   Commodo est cillum laboris proident exercitation veniam excepteur do mollit aliquip irure. Consequat adipisicing commodo anim aliqua labore nisi reprehenderit dolore aliquip in eu est nulla. Ea sint adipisicing elit id ullamco nisi cupidatat nisi labore.
                  sint elit consectetur. Voluptate tempor et velit ullamco consequat enim ipsum cupidatat laboris sunt excepteur. Nostrud mollit nulla labore irure tempor eiusmod. Tempor ut voluptate amet elit quis do ex nostrud minim proident veniam nulla non esse.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
