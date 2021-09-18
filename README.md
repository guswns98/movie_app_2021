# 강현준 201840203
## [09월15일]
### 1.props 컴포넌트 사용
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