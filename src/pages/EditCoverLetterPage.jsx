import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { StyleSheetContext } from 'styled-components';
import axios from 'axios';

function EditCoverLetterPage() {

  const { coverLetterId } = useParams();
  const [text, setText] = useState('');
  

  const getCoverLetter = async () => {
    try {
      const getToken = localStorage.getItem('authToken');
      let response = await axios.get(`${process.env.REACT_APP_API_URL}/api/job/${coverLetterId}/cover-letter/edit`, {
        headers: {
          Authorization: `Bearer ${getToken}`,
        },
      });
      setText(response.data.text);
      console.log("we are at the cover letter page")
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  let handleText =(e) => setText(e.target.value);

  useEffect(() => {
    getCoverLetter();
  }, []);



  return (
    <div>

<form>
        <label for="name">Your Cover Letter:</label>
        <textarea
          type="textarea"
          name="text"
          id="text"
          value={text} // Prop: The name input data
          onChange={handleText} // Prop: Puts data into the state
          rows={10}
          cols={90}
        />
      </form>
    </div>

    
  )
}

export default EditCoverLetterPage