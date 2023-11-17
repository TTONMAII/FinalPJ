import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

export const InfoComponent = () => {
    return <div>
       {
           
       }

<Carousel showThumbs={false} autoPlay={true} stopOnHover={false} infiniteLoop={true} interval={3000}>
    { Array.from(Array(15).keys()).map((element,index)=>{
        return <div>
        <img src= {`./${index+1}.jpg`} alt="error" />
        { index === 0 &&<div className="item1">
            Warakorn Konsila <br />6304186
        </div>}
        
    </div>
    })               
    }
 </Carousel>

    </div>
}
