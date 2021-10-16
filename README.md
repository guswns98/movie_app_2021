# 강현준 201840203
## [10월13일]
### 1. Movie.prop-type 컴포넌트 만들기 

```jsx
import PropTypes from 'prop-types'

      function Movie({id,title,year,summary,poster}) {
          return (
              <h1>{title}</h1>
          ) 
      }
      
      Movie.propTypes = {
          id: PropTypes.number.isRequired, // 자료형 number, 반드시 있어야하는 id
          year: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired, // 자료형 string
          summary: PropTypes.string.isRequired,
          poster: PropTypes.string.isRequired
      }
      
      export default Movie;
```
### 2. 영화 데이터 정렬
```jsx
await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') 
```
+ sort_by 사용해 평점을 내림차순으로 정렬 


### 3. movies.map() 사용
```jsx
    render() {
        const { isLoading, movies } = this.state
        return (
            <section className="container">
                { isLoading ? (
                    <div className="loader">
                        <span className="loader-text">Loading...</span>
                    </div>
                    ) : (
                        <div className="movies">
                        {movies.map((movie) => (
                    <Movie 
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        title={movie.title}
                        summary={movie.summary}
                        poster={movie.medium_cover_image}
                        genres={movie.genres}
                    />
                ))}
                </div>
                )}
            </section>
        )
    }
```
+ this.state에 있는 movie를 얻어 App 컴포넌트에 movies.map()사용 


### 4. image를 string으로 작성하는 이유 
```jsx
 poster={movie.medium_cover_image}
```
+ url 주소 들어가기 때문에 movies.poster라고 작성하면 안됨


### 5. Movie 컴포넌트에 영화 이미지 추가 
```jsx
function Movie({title,year,summary,poster, genres}) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie-data">
                <h3 className="movie-title">{title}</h3>
                <h5 className="movie-year">{year}</h5>
                <p className="movie-summary">{summary}</p>
            </div>  
        </div>
    ) 
}
```



# 강현준 201840203
## [10월6일]
### 1. 로딩상태/로딩현상

```jsx
import React from "react"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    componentDidMount(){
      setTimeOut(()=>{
        this.setState({isLoading:false})
      },5000)
    }

    render() {
        const { isLoading } = this.state
        return (
            <div>
                { isLoading ? 'Loading...' : '영화 데이터 출력' }
            </div>
        )
    }
}
export default App
```

+ 삼항연산자 사용해 isLoading true이면 Loading 출력 아니면 false출력 
+ setTimeout() 함수를 이용해 5초후에 데이터 출력

### 2. axios 
+ axios 설치
  - npm install axios
+ axios import 추가 

```jsx
import axios from "axios"
```

+ axios로 API 호출

  - axios 동작확인
  ![12](https://user-images.githubusercontent.com/79896103/136647370-1c70ca02-184f-4c66-8b63-ece0270b0605.PNG)

### 3. async 
```jsx
 getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        console.log(movies)
    }
```
+ getMovies()에 async 붙임, axios.get()에 await 붙임
+ async는 js에게 getMovies() 함수가 비동기라고 알려줌
+ await는 getMovies()함수 내부의 axios.get()의 실행 완료를       기다렸다가 끝나고 진행하라고 알려줌








# 강현준 201840203
## [09월29일]
### 1. prop types
+ prop types 설치
  - npm install prop-types
+ prop types 사용
  - import PropTypes from 'prop-types'추가
+ 평점 추가 rating
  - number 타입 
### 2. State,클래스형 컴포넌트 
- State는 동적인 데이터 
- props는 정적인 데이터
- states는 클래스형에서 사용
- state 
  - class형 컴포넌트 안에 state 기입
  - state에 count 추가 
### 3. render 함수
+ 직접 실행하지 않아도 자동으로 실행되는 함수
+ 클래스형 컴포넌트는 render() 함수가 JSX를 반환
```jsx
class App extends Component {
    render() {
        return (
            <h1>Hi</h1>
        )
    }
}
```
### 4. constructor()함수
+ state 값을 초기화하거나 메서드를 바인딩할 때 사용
+ 생성자 내에서 외부 API 직접 호출 불가능 
  - componentDidMount() 사용하면 호출 가능

### 5. add,minus 함수

```jsx
    add = () => {
        this.setState(current => 
        ({count: current.count +1
        }))
    }

    minus = () => {
        this.setState(current => 
        ({count: current.count -1
        }))
    }
```






# 강현준 201840203
## [09월15일]
### 1. props 컴포넌트 사용
+ 컴포넌트에서 컴포넌트로 전달하는 데이터 (함수의 매개변수 역할)
+ props 사용시 컴포넌트 효율적 사용가능
```jsx
function App(){
    return(
        <div>
            <h1>Hello</h1>
            <Food fav ="kimchi" /> //props 이름은 fav , fav에 김치 값 넣어  푸드 컴포넌트에 전달
        </div>
    );
}
```
+ props에는 블린값,  숫자 , 배열 다양한 형태 데이터 사용가능
+ props 전달 데이터는 문자열 경우를 제외 모두 중괄호{}로 감싸야함
### 2.  점(.) 연산자 사용
+ 객체의 특정 값을 사용할 때 점 . 을 사용
```jsx
function Food(props){
    return <h1>I like{props.fav}</h1>
}
```

### 3. 여러개 컴포넌트에 props 사용
```jsx
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="a" />
      <Food fav="b" />
    </div>
  )
}

function Food(foo) {
  const { fav } = foo
  return <h1>I like {fav}</h1>
}
export default App
```
+ 위 방식은 비효율적 
### 4. Food 컴포넌트 음식 이미지 출력
```jsx 
function App() {
  return (
    <div>
      {
        foodLike.map(dish => (<Food name={dish.name} picture={dish.image} />))
      }
    </div>
  )
}

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
  </div>
  )
}
export default App
```
### 5. map 함수 사용
+ 딕셔너리 안 정보찾기 가능
```jsx
foodLike.map (원하는이름 =>( ))
```
