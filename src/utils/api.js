class Api {
    constructor(url) {
      this._url = url;
      this._headers = {
        'Content-Type': 'application/json'
      }
    }
  
    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getData() {
      return fetch(`${this._url}/api/ingredients`, {
        headers: this._headers
      })
        .then(this._checkResponse);
    } 
  
  }

  const api = new Api('https://norma.nomoreparties.space');
  
  export default api;
  
  
  
  
  
  
  