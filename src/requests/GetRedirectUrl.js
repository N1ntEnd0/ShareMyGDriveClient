import React, { useState } from 'react'
import axios from 'axios'

export const  GetRedirectUrl = () => {

  return axios({
    method: 'GET',
    // url:'https://share-my-gdrive.herokuapp.com/api/auth/social/o/google-oauth2',
    url:'http://localhost:8000/api/auth/social/o/google-oauth2',
    params: {
      redirect_uri: 'http://localhost:3000/'
    },
    withCredentials: true,
  })
    .then(resp => {
      return resp.data.authorization_url;
    });
};

