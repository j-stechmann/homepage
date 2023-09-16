import 'font-awesome/scss/font-awesome.scss';
import './style.css';
import {Swiper} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
    const swipers = document.querySelectorAll<HTMLDivElement>('div.swiper');
    for (const swiper of swipers) {
        new Swiper(swiper, {
            direction: 'vertical',
            autoHeight: true,
            resistance: true,
            resistanceRatio: 0,
            allowTouchMove: true,
            mousewheel: true,
            speed: 600,
        });
    }
});