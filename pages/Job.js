import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Image from 'next/image';
import MyModal from '../components/myModal';
import {collection, query, getDocs} from 'firebase/firestore'
import { db} from '../firebase'

 function Job(){

    const [product, setProduct] = useState([])
    const fetchData = async()=>{
        const querySnapShots = await getDocs(collection(db, "Jobs"))
        const contactList = []
        querySnapShots.forEach((doc) => {
            contactList.push(doc.data())
            console.log(doc.data())
            
        });
        setProduct(contactList)

    }

    useEffect(()=>{
        fetchData()

    }, [])
    
       
    const [showModal, setShowModal] = useState(false)
    return(
        <Fragment>
        <div className="bg-adaingrey text-adainwhite py-10">
        <div className="container mx-auto px-10  md:justify-between md:items-center items-center">
         
          <div className="mx-8 px-10 flex flex-col space-y-4 mb-6 md:mb-0 text-center"> {/* This is the first div to wrapp the Getin Touch */}
            <p className='mx-8 font-bold text-4xl text-adainblack'>Job Openings</p>
            <div className="mx-8 text-adainyellow flex justify-center space-x-4">
                
        
                    
                   

                    

                
                
              
            </div>
            <div className='flex flex-col sm:flex-row p-4 justify-center gap-40'>

            <div className='sm:flex justify-center items-center flex-col mt-20'>
            <h1 className='text-adainblack text-2xl'> UI/UX Designer Interns to Elevate User Experiences</h1>
            <p className=' text-adainblack'>

           

            Are you passionate about creating intuitive, visually appealing, and user-centric digital experiences? Do you thrive in a creative and collaborative environment? If so, we invite you to join our team as a UI/UX Designer Intern. This unique opportunity offers aspiring designers the chance to learn, grow,
            and make a meaningful impact while working alongside seasoned professionals.
            </p>
            </div>

            
            <div className='sm:flex justify-center items-center flex-col'>

            <h1 className='text-adainblack text-2xl'> Join Our Team: Frontend Developer Internship Opportunity</h1>
            <p className='text-adainblack'>
            Are you a coding enthusiast with a passion for creating stunning, user-friendly web applications? Do you want to dive into the world of frontend development and gain hands-on experience? Look no further! [Company Name] is excited to announce openings for Frontend Developer 
            Interns who are eager to learn, collaborate, and contribute to innovative web projects.
            </p>
            

            </div>
            
            </div>

            <div className='flex justify-center'>
                        <button className='sm:relative top-10 text-adainwhite mx-8 bg-adainblack text-white px-4 py-2 rounded m-10' onClick={()=>{
                            setShowModal(true)
                        }}>Submit Resume</button>

                    </div>

            
          </div>

          
          <MyModal isVisible={showModal} onClose={()=>{setShowModal(false)}} />
         
          
      
          </div>
      </div>
      </Fragment>
    )

}

export default Job