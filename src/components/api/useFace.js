import { useState, useEffect } from 'react';
import apiRequest from './apiRequest.js';


export default function useFace({ gender }) {
  // Properties ----------------------------------
  const API_URL = 'https://api.generated.photos/api/v1/faces?api_key=xLG_7so-LDyaWH6BEeI1tQ';
  const endpoint = API_URL + '& per_page=1 & age=young - adult & gender=' + gender;

  // Fetch State ---------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [face, setFace] = useState(undefined);

  // Methods -------------------------------------
  useEffect(() => {

    const fetchFace = async () => {
      const outcome = await apiRequest(endpoint);
      if (outcome.success) setFace(outcome.response);
      else setLoadingMessage(`Error ${outcome.response.status}: Data could not be found.`);
    };

    fetchFace();
    
  }, [endpoint]);

  // Return --------------------------------------
  return [face, loadingMessage ];
}
