import Title from './Title'
import { tours } from '../data'
import TourArticle from './TourArticle'


const Tours = () => {
  return (
    <section className="section" id="tours">
     
     <Title title="featured" subTitle="tours" />
      
    <div className="section-center featured-center">
        {tours.map((tour) => {
            return <TourArticle key={tour.id} 
                                image={tour.image} 
                                date={tour.date} 
                                title={tour.title} 
                                text={tour.text} 
                                country={tour.country} 
                                period={tour.period} 
                                price={tour.price} />;
          })}
        
      </div>
    </section>
  )
}

export default Tours
