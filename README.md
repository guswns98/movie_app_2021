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