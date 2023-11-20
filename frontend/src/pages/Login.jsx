import cardImage from "../assets/card-Image.png"

export default function Login() {
    return (
        <>
          <div className="fullScreenBoxes absolute overflow-hidden w-full  h-screen min-h-fit " style={{backgroundColor:"#171941"}}>
            <div className="box1  w-72 h-72 left-6 -top-16 absolute box opacity-50"></div>
            <div className="box2  w-96 h-96 -right-20 -top-12 absolute box opacity-40"></div>
            <div className="box3  w-52 h-52 -left-12 bottom-0 absolute box opacity-10"></div>
            <div className="box4  w-28 h-28 right-1/4 top-2/4 absolute box opacity-90"></div>
            <div className="box5  w-60 h-60 left-1/4 ml-24 bottom-1/3 absolute box opacity-10"></div>
            <div className="box6  w-20 h-20 left-40 top-44 absolute box opacity-80"></div>
          </div>
      
          <div className="flex items-center relative z-20 justify-center my-32 ">
          <form className=" font-poppins relative overflow-hidden rounded-lg " style={{width:'430px',height:'490px',backgroundColor: '#1f2251'}} >
            <div className="card-header  relative overflow-hidden w-full mb-1 h-56">
                <img className="card-img absolute -mt-32 -ml-12 max-w-full opacity-50" style={{width:'450px'}} src={cardImage}></img>
                <h4 className="card-title text-6xl text-white mt-5 relative mb-3 font-black font-poppins">Login</h4>

            </div>
            <div className="card-body mx-auto  flex flex-col items-center justify-center" style={{width:'93%'}}>
              <div className="input1 border-2 transition-all duration-3000 mb-2.5 focus-within:border-e14eca items-center h-10 rounded-lg text-xs border-gray-700 flex flex-row w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-4" width="20" height="20" viewBox="0 0 24 24"><path fill="gray" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"/></svg>
              <input type="text"className="ml-3 px-2  text-white w-full bg-transparent outline-none " placeholder="Username / Email ID"></input>
              </div>
              <div className="input2 border-2 transition-all duration-3000 mb-2.5 focus-within:border-e14eca items-center h-10 rounded-lg text-xs border-gray-700 flex flex-row w-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-4" width="20" height="20" viewBox="0 0 24 24"><path fill="gray" d="M18 8h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2V7a6 6 0 1 1 12 0v1ZM5 10v10h14V10H5Zm6 4h2v2h-2v-2Zm-4 0h2v2H7v-2Zm8 0h2v2h-2v-2Zm1-6V7a4 4 0 0 0-8 0v1h8Z"/></svg>
              <input type="text"className="ml-3 px-2  text-white w-full bg-transparent outline-none " placeholder="Password"></input>
              </div>
              
            </div>
            <div className=" mt-12 mx-auto text-center" style={{width:'93%',height:'49px'}}>
              <button className="getStartedBtn w-full bg-primary h-full rounded-full hover:shadow-xl transition duration-300">Get Started</button>
            </div>
            <div className="card-footer flex justify-between mt-6 text-xs leading-6 mb-4 text-primary bottom-0 ">
              <div className="ml-3 mb-3">
                <h6><a href="#">CREATE ACCOUNT</a></h6>
              </div>
              <div className="mr-3 mb-3 ">
                <h6><a href="#">NEED HELP?</a></h6>
              </div>
            </div>
          </form>

          </div>
        
          <style>
  {`
  
  @keyframes translateAnimation {
    0% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    100% {
      transform: translateX(-10px);
    }
  }

  .box{
    background: linear-gradient(to right, #ff6491, #ff8d72);
    border-radius : 20%;
  }

  .box1 {
    animation: translateAnimation 4s infinite;
  }
  .box2, .box5{
    animation: translateAnimation 6s infinite;
  }
  .box3{
    animation: translateAnimation 5s infinite;
  }
  .box4{
    animation: translateAnimation 10s infinite;
  }
  .box6{
    animation: translateAnimation 9s infinite;
  }
  `}
</style>

        </>
    )
}
