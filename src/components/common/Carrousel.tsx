'use client';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  slides: JSX.Element[];
}

export const Carrousel = ({ slides }: Props) => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider>
        { slides.map((slide, index) => (
          <Slide key={index} index={slide.index}>{ slide.content }</Slide>
        ))}
      </Slider>
    </CarouselProvider>
  )
}
