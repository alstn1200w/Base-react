import React, { Component } from 'react';

class Book extends Component {
  render() {
   // 데이터 선언
    const book = {
    	title: '해리포터',
        author: '조앤K롤링',
        summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
        genre: '판타지 소설',
        release: '2003년 9월 4일',
        ISBN: '1234567890'
    }
    // HTML 템플릿
    return (
    	<>
            <h1>도서 정보</h1>
            <h3>제목: {book.title} </h3>
            <h3>저자: {book.title}</h3>
            <h3>줄거리: {book.summary}</h3>
            <h3>장르: {book.genre}</h3>
            <h3>출판일: {book.release}</h3>
            <h3>ISBN: {book.ISBN}</h3>
        </>
    )
  }
}

export default Book;