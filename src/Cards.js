import React , {useState,useEffect} from 'react';
import {Bootstrap } from 'react-bootstrap';
import axios from 'axios';


const Cards= () => {
    const[data,setData]= useState();
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://api.themoviedb.org/3/movie/popular?api_key=bd52bece565973d8f22e9cee6a5f387f&language=en-US&page=1',);
     debugger
          setData(result.data);
          console.log(data)
        };
     debugger
        fetchData();
      }, []);
         
    return(

        
        <div> 
          
        {data && data.results.map(item => (
          <div class="card border-danger mb-50 " style={{width: "15rem" }}>
          <img src={"https://image.tmdb.org/t/p/w342/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg"} class="card-img-top" alt=""  />
          
   <div class="card-body text-danger ">
            <h5 class="card-text">
            Title:{item.title}
             </h5>
             
            id:<h5>{item.id}</h5>
            release_date:<h5>{item.release_date}</h5>
            vote_average:<h5>{item.vote_average}</h5>
            vote_count<h5>{item.vote_count}</h5> 
          
            <a href="www.movie Database.com">{item.Description}</a>
   </div>
   
</div>
        ))}
      
              <div className="container" style={{backgroundColor:"Teal"}}>
                 <h4 style={{alignItem:"center"}}>All Movies </h4>
                 List filtering:<input id="text" value="title search"/>
                 Genre<select>
                                 <option value="Action">Action</option>
                                   <option value="Comedy">Comedy</option>
                                   <option selected value="All">All</option>
                                   <option value="Adventure">Adventure</option>
                 </select>
                 Release Date<select>
                                 <option value="12.5.2020">12.5.2020</option>
                                   <option value="30.5.2000">30.5.2000</option>
                                   <option selected value="All">All</option>
                                   <option value="12.5.2005">20.5.2005</option>
                 </select>
                 Rating<select>
                                 <option value=""></option>
                                   <option value=""></option>
                                   <option selected value="All">All</option>
                                   <option value=""></option>
                 </select>
                 
                 </div>
               <div className="row">
                   <div className="col-sm-3">
               <div class="card border-danger mb-50 " style={{width: "15rem" }}>
                           <img src="mv.jpg.jpg"class="card-img-top" alt=""  />
                           
                    <div class="card-body text-danger ">
                             <h6 class="card-text">
                                 Title
                             </h6>
                             <h6>Date</h6>
                             <h6>rating</h6>
                             <a href="www.movie Database.com">Description</a>
                    </div>
                    
                </div>
                </div>
                <div className="col-sm-3">
               <div class="card border-danger mb-50" style={{width: "15rem"}}>
                           <img src="mv.jpg.jpg"class="card-img-top" alt=""  />
                    <div class="card-body text-danger">
                             <h6 class="card-text">
                                 Title
                             </h6>
                             <h6>Date</h6>
                             <h6>rating</h6>
                             <a href="www.movie Database.com">Description</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3">
               <div class="card border-danger mb-50 " style={{width: "15rem"}}>
                           <img src="mv.jpg.jpg"class="card-img-top" alt=""  />
                    <div class="card-body text-danger">
                             <h6 class="card-text">
                                 Title
                             </h6>
                             <h6>Date</h6>
                             <h6>rating</h6>
                             <a href="www.movie Database.com">Description</a>
                    </div>
                </div>
                </div>
                <div className="col-sm-3">
               <div class="card border-danger mb-50" style={{width: "15rem"}}>
                           <img src="mv.jpg.jpg"class="card-img-top" alt=""  />
                    <div class="card-body text-danger ">
                             <h6 class="card-text">
                                 Title
                             </h6>
                             <h6>Date</h6>
                             <h6>rating</h6>
                             <a href="www.movie Database.com">Description</a>
                    </div>
                </div>
                </div>
                </div>
        </div>
        
    
        
    )

}





export default Cards;