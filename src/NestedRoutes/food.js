import React from 'react'

function Food() {
  return (
     <>
     
     <section id="SearchRestuarants">
            <h2>Legendary Food Places</h2>
            <div class="resturantContainer">

                <div class="resturantCard">
                    <img class="resturantImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCjBAkk2ItaxIRNTW5EhRxMoKRyZfsVWVw8yH53BSdgNYnFeYoQqnmeRHSSnWs7AVBaI&usqp=CAU" />
                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Mehfil</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches : Sr Nagar , Ameerpet , Punjagutta , Nizampet</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

                <div class="resturantCard">

                    <img class="resturantImage"
                        src="https://mir-s3-cdn-cf.behance.net/projects/404/15d1b4197702855.Y3JvcCwxNTAwLDExNzMsMCww.jpg" />

                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Bawarchi</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches : RTX Road</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

                <div class="resturantCard">

                    <img class="resturantImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2KJ8M3Emx48mN43WTcXpauBoRbibi-_ydA&s" />

                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Mehfil</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches : Charminar , Megdipatnam</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

                <div class="resturantCard">

                    <img class="resturantImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVtP6NCzh3m3GEdmlzQ740-xVcT4qEf1Rv2g&s" />

                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Bhar Biryani Cafe</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches :LB Nagar , Dhilshuk Nagart</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

                <div class="resturantCard">

                    <img class="resturantImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR30dIRnMSBO1Hhq3PyuGY2ZIhPp-9fbLOMOQ&s" />

                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Pista House</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches :LB Nagar , Dhilshuk Nagart , Sanath Nagar ect</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

                <div class="resturantCard">

                    <img class="resturantImage"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFkCf7lbwA7AZGYlbjCi7eori94HR63_z2bg&s" />

                    <div class="resturantCardContentDiv">
                        <b>Restuarant Name:Paradise Biryani</b>
                        <p><span class="Rating"><i class="fa-solid fa-star"></i></span> - 4.3</p>
                        <p>Branches :LB Nagar , Dhilshuk Nagart , Sanath Nagar ect</p>
                        <div style={{textAlign:"center"}}><button class="resturantButton">View Resturant</button></div>
                    </div>
                </div>

            </div>

        </section>


        <section id="dishes">
            <h2>Must-Try Dishes</h2>
            <div class="dishesContainer">

                <div class="dishCard">
                    <img class="dishImage" src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/biryani.jpg"
                        alt="Product 1"/>
                    <p>Dish Name : <b>Biryani</b></p>
                    <p class="price">Price : 200 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>
                <div class="dishCard">
                    <img class="dishImage" src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/haleem.jpg" />
                    <p>Dish Name : <b>Haleem</b></p>
                    <p class="price">Price : 300 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>
                <div class="dishCard">
                    <img class="dishImage" src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/kebab.jpg" />
                    <p>Dish Name : <b>Kebabs</b></p>
                    <p class="price">Price : 250 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>
                <div class="dishCard">
                    <img class="dishImage" src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/dosa.jpg" />
                    <p>Dish Name : <b>Dosa</b></p>
                    <p class="price">Price : 90 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>
                <div class="dishCard">
                    <img class="dishImage"
                        src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/irani-chai.jpg" />
                    <p>Dish Name : <b>Irani chai</b></p>
                    <p class="price">Price : 20 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>
                <div class="dishCard">
                    <img class="dishImage" src="https://www.bakingo.com/blog/wp-content/uploads/2023/01/paya.jpg" />
                    <p>Dish Name : <b>Paya</b></p>
                    <p class="price">Price : 150 <i class="fa-solid fa-indian-rupee-sign"></i></p>
                </div>


            </div>


        </section>
     </>
  )
}

export default Food