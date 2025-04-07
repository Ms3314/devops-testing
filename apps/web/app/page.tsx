import axios from 'axios';
import React from 'react';

export  default async function Home() {
  const data = await axios.get("https://dog.ceo/api/breeds/image/random")
  return (
    <React.Fragment>
      <div>
        Hello everyone, I hope you are fine
        <img src={data.data.message} alt="random dog image" />
      </div>
    </React.Fragment>
  );
}
