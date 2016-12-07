
function requestData () {
  return {
    type: 'REQ_DATA'
  }
}

function receiveData (json) {
  return {
    type: 'RECV_DATA'
  }
}

function receiveError (json) {
  return {
    type: 'RECV_ERROR'
  }
}
