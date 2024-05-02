// 초기 값으로 0을 설정합니다.
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  console.log(btn);

  btn.addEventListener('click', function (e) {
    // 클릭된 버튼의 클래스 목록을 가져옵니다.
    const styles = e.currentTarget.classList;
    console.log(e.target);
    console.log(e.currentTarget);

    // 클릭된 버튼이 "decrease" 클래스를 포함하면 count를 1 감소시킵니다.
    if (styles.contains('decrease')) {
      count--;

      // 클릭된 버튼이 "increase" 클래스를 포함하면 count를 1 증가시킵니다.
    } else if (styles.contains('increase')) {
      count++;
      // 그 외의 경우 (즉, "reset" 버튼이 클릭되면) count를 0으로 설정합니다.
    } else {
      count = 0;
    }
    // count 값에 따라 "value"의 텍스트 색상을 변경합니다.
    let img = document.querySelector('.wow > img');
    console.log('img : ', img);

    if (count > 5) {
      value.style.color = 'blue'; // count가 양수이면 녹색으로 변경

      img.src = '컴공와우.jpeg';
      img.width = '280';
      img.style.position = 'absolute';
      img.style.left = '260px';
      img.style.top = '195px';
    } else if (count > 0) {
      value.style.color = 'blue'; // count가 양수이면 녹색으로 변경

      img.src = '그냥와우2.png';
      img.width = '250';
      img.style.position = 'absolute';
      img.style.left = '275px';
      img.style.top = '217';
    }
    if (count < 0) {
      value.style.color = 'red'; // count가 음수이면 빨간색으로 변경

      img.src = '시험기간와우.png';
      img.width = '230';
      img.style.position = 'absolute';
      img.style.left = '280px';
      img.style.top = '205px';
    }
    if (count === 0) {
      value.style.color = '#222'; // count가 0이면 기본 색상(#222)으로 변경

      img.src = '새내기와우.png';
      img.width = '317';
      img.style.position = 'absolute'; // 고정 위치로 설정
      img.style.top = '230px';
      img.style.left = '250px';
    }

    // "value"의 텍스트를 현재 count 값으로 설정합니다.
    value.textContent = parseInt(count);
  });
});
