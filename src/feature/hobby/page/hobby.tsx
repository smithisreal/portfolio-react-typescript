import React, { Suspense } from 'react'
import Title from '../../../shared/components/animation/withAnimationHoveText'
import { FormatMessage } from '../../change_lang/change'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { dataList } from '../mock/dataMock';
import { gsap } from "gsap";
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
export default function hobby() {
    const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
        gsap.fromTo(currentTarget, {scale: 1.3},{scale: 1});
    };
    interface CardProps {
        id: number,
        url: string,
        title: string,
        detail: string,
        link: string,
        toolList: {
            id: number,
            img: string
        }[]
    }
    const renderCardProject = ({ url, title, detail, link, toolList }: CardProps) => {
        return (
            <Card key={title} className='max-w-sm'>
                <a href={link ? link : undefined} target="_blank">
                    <CardMedia
                        onMouseEnter={onEnter}
                        className=' object-cover h-52 bg-main'
                        component="img"
                        image={url}
                    />
                    <CardContent className='h-36'>
                        <h1 className='font-atma font-semibold'>
                            {title}
                        </h1>
                        <p className='font-atma font-light lg:truncate'>
                            {detail}
                        </p>
                    </CardContent>
                    <CardActions disableSpacing className='text-white font-atma border-t-2 bg-slate-200'>
                        <Grid item xs={12} className='flex flex-1 gap-2'>
                            {toolList.map((item, index) => {
                                return (
                                    <img key={index} src={item.img} className='h-10 w-10 rounded-md object-cover' />
                                )
                            })}
                        </Grid>
                    </CardActions>
                </a>
            </Card>
        )
    }
    const renderSwiperCard = ({ url, title, detail, link, toolList }: CardProps) => {
        return (
            <Card key={title} className='max-w-sm'>
                <a href={link ? link : undefined} target="_blank">
                    <CardMedia
                        onMouseEnter={onEnter}
                        className=' object-cover h-52 bg-main'
                        component="img"
                        image={url}
                    />
                    <CardContent className='h-36'>
                        <h1 className='font-atma font-semibold'>
                            {title}
                        </h1>
                        <p className='font-atma font-light '>
                            {detail}
                        </p>
                    </CardContent>
                    <CardActions disableSpacing className='text-white font-atma border-t-2 bg-orange-50'>
                        <Grid item xs={12} className='flex flex-1 gap-2'>
                            {toolList.map((item, index) => {
                                return (
                                    <img key={index} src={item.img} className='h-10 w-10 rounded-md object-cover' />
                                )
                            })}
                        </Grid>
                    </CardActions>
                </a>
            </Card>
        )
    }
    return (
        <Container maxWidth="xl" className="pb-20 bg-main">
            <Title noUseLeave={false} noUseEnter={true} text="H|o|b|b|y" />
            <Grid item xs={12} className='grid grid-cols-3 sm:grid-cols-2 ss:hidden gap-10 pl-6 ss:pl-0' >
                {dataList.map((items) => {
                    return renderCardProject(items)
                })}
            </Grid>
            <div className='xl:hidden lg:hidden md:hidden sm:hidden ss:flex'>
                <Swiper
                    autoplay
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    // pagination={true}
                    className="mySwiper max-w-full rounded-md"
                >
                    {dataList.map((items, index) => {
                        return (
                            <SwiperSlide className='flex justify-center' key={index}>
                                {renderSwiperCard(items)}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </Container>
    )
}
