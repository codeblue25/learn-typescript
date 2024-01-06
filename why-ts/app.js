var url = 'https://jsonplaceholder.typicode.com/users/1';

var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

var user = {};

/**
 * @typedef {object Address}
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object User}
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
  return axios.get(url)
}

function startApp() {
  fetchUser().then(function (response) {
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      username.innerText = user.name
      email.innerText = user.email
      address.innerText = user.address
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();

/**
 * 장점1. 브라우저에서 런타임 에러를 예방할 수 있다.
 * 동적타입 언어(Dynamically typed) JS와 다르게 정적타입 언어(Statically typed) TS는 컴파일 언어이기 때문에, 컴파일 단계(코드 상)에서 에러를 확인할 수 있다.
 */
