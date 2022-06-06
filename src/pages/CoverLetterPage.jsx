import React, {useState, useEffect} from 'react'
import axios from 'axios';

function CoverLetterPage() {


  const [coverLetter, setCoverLetter] = useState(null);
  

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/job/cover-letter`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setCoverLetter(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getCoverLetter();
  }, []);



  return (
    <div>
      <h1>HERE IS YOUR COVER LETTER</h1>
      { coverLetter && ( <>
          <p> {coverLetter.text} </p>
        </>)}

    </div>

  )
}

export default CoverLetterPage