const express = require('express');
const axios = require('axios');
const router = express.Router();


const appID = '240050f8a85710c';
const apiKey = '18d853100a77e50aed9fb3d75b4940ef552a4f18';
const agentUID = 'admin'

// const url = 'https://api-us.cometchat.io/v2.0';

// const headers = {
//   'Content-Type': 'application/json',
//   appid: appID,
//   apikey: apiKey,
// };

let config = {
  method: 'get',
  url: 'https://api-us.cometchat.io/v2.0',
  headers: {
    'appId': '240050f8a85710c',
    'apiKey': '18d853100a77e50aed9fb3d75b4940ef552a4f18',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: ""
};

router.get('/user', (req, res) => {
  config.url += "/users";
  axios(config)
    .then(function (response) {
      res.json(response.data.data);
    })
    .catch(function (error) {
      console.log("error while getting chat from chatApi", error);
    });

  // axios
  //   .get(`${url}/users`, JSON.stringify(data), {
  //     headers,
  //   })
  //   .then(response => {
  //     requestAuthToken(response.data.data.uid)
  //       .then(token => {
  //         console.log('Success:' + JSON.stringify(token));
  //         res.json(token);
  //       })
  //       .catch(error => console.error('Error:', error));
  //   })
  //   .catch(error => console.error('Error:', error));
});

router.get('/api/auth', (req, res) => {
  const uid = req.query.uid;
  requestAuthToken(uid)
    .then(token => {
      console.log('Success:' + JSON.stringify(token));
      res.json(token);
    })
    .catch(error => console.error('Error:', error));
});

const requestAuthToken = uid => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}/users/${uid}/auth_tokens`, null, {
        headers,
      })
      .then(response => {
        console.log('New Auth Token:', response.data);
        resolve(response.data.data);
      })
      .catch(error => reject(error));
  });
};

router.get('/api/users', (req, res) => {
  axios
    .get(`${url}/users`, {
      headers,
    })
    .then(response => {
      const { data } = response.data;
      const filterAgentData = data.filter(data => {
        return data.uid !== agentUID;
      });
      res.json(filterAgentData);
    })
    .catch(error => console.error('Error:', error));
});

module.exports = router;