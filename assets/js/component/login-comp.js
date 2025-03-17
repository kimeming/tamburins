// login.js

// 탬버린즈 PJ 회원가입 컴포넌트 - join.js

// 유효성검사 함수 불러오기
import valid_member from "../valid_member.js";
import validLogin from "../valid_login.js";
// 메모리상 로딩한 본 함수는 DOM에 작동할 것이므로
// 반드시 뷰 인스턴스 mounted 메서드에서 호출한다!
console.log(valid_member);

// Login 컴포넌트
const LoginComp =  Vue.component("login-comp",{
  template: `
  <main class="willbec">
                 <div class="inner-cont loginin">
        <h3 class="contents-tit">로그인</h3>
        <div class="login_scont">
           <form action="process.php" method="post">
               <!-- 아이디박스 -->
                <div class="box">
                  <div class="minput">
                      <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디(이메일)" />
                      <!-- name속성은 서버쪽 사용용도로 작성함(id명과 같은 이름 많이씀) -->
                  </div>
                  <div class="minput">
                      <!-- 비번박스 -->
                      <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호" />
                  </div>
                  <!-- 버튼박스 -->
                  <div class="btnbx">
                      <input type="submit" id="sbtn" value="로그인" />
                  </div>
                  <!-- 기타링크 -->
                  <div class="addbx">
                      <span>
                          아이디가 없으신가요?
                      </span>
                      <span>
                          <a href="#" @click="goPage">회원가입 하기</a>
                      </span>
                  </div>
                </div>
           </form>
        </div>
                 </div>
    </main>
    `,
    // 2. 리턴함수 데이터
    data(){
        return{};
    },
    // 3. 메서드
    methods: {
      goPage(){
        console.log('회원가입으로가~!!!');
        // 라우터로 페이지 이동하기
        // -> this.$router 전역 라우터객체변수를 호출함!
        // 라우터 이동 메서드인 push(라우터주소) 를 이용함!
        this.$router.push("/join");
      },
    },
    // 4. 데이터셋업파트
    created(){},
    // 5. DOM 셋업파트
    mounted(){
        // 로그인 기능함수 호출!!!
        validLogin();
    },
});

// 1. 회원가입 컴포넌트
const JoinComp = Vue.component("join-comp", {
  // 1-1. 템플릿코드설정 /////

  template: `
    <div class="inner-cont login">
      <!--**************** 여기부터 컨텐츠 시작 *****************************-->
      <!-- 2. 회원가입 영역 -->
      <div id="join-app">
        <div id="main-area">
          <main class="main-area ibx">
            <!-- 2-1. 회원가입 페이지 상단영역 -->
            <header class="ctop">
              <!-- 2-1-1. 서브타이틀 -->
              <h2 class="stit">회원가입</h2>
            </header>
            <!-- 2-2. 갤러리 페이지 컨텐츠 박스 -->
            <section class="scont">
              <form action="process.php" method="post" class="logF">
                <ul>
                  <!-- 아이디 -->
                  <li>
                    <label htmlFor="mid" class="itit"> </label>
                    <input
                      type="text"
                      name="mid"
                      id="mid"
                      maxlength="20"
                      placeholder=" 아이디"
                    />
                    <span class="msg"></span>
                  </li>
                  <!-- 비밀번호 -->
                  <li class="eyeli">
                    <label htmlFor="mpw" class="itit"> </label>
                    <input
                      type="password"
                      name="mpw"
                      id="mpw"
                      maxlength="15"
                      placeholder=" 비밀번호"
                    />
                    <b class="eye">👁</b>
                    <span class="msg"></span>
                  </li>
                  <!-- 비밀번호확인 -->
                  <li>
                    <label htmlFor="mpw2" class="itit"> </label>
                    <input
                      type="password"
                      name="mpw2"
                      id="mpw2"
                      maxlength="20"
                      placeholder=" 비밀번호 확인"
                    />
                    <span class="msg"></span>
                  </li>
                  <!-- 이름 -->
                  <li>
                    <label htmlFor="mnm" class="itit"> </label>
                    <input
                      type="text"
                      name="mnm"
                      id="mnm"
                      maxlength="20"
                      placeholder=" 이름"
                    />
                    <span class="msg"></span>
                  </li>
                  <!-- 성별 -->
                  <li>
                    <span class="itit">성별</span>
                    <label For="gen1">남성</label>
                    <input type="radio" name="gen" id="gen1" />
                    <label For="gen2">여성</label>
                    <input type="radio" name="gen" id="gen2" checked />
                    <!-- 라디오버튼의 name 속성을 
                                          같은 이름으로 쓰면 그룹핑되어
                                          하나만 선택된다! 
                
                                          checked 속성 - 기본체크설정 -->
                  </li>
                  <!-- 이메일 -->
                  <li>
                    <label htmlFor="email1" class="itit"> </label>
                    <input
                      type="text"
                      id="email1"
                      name="email1"
                      placeholder="이메일앞주소"
                    />
                    <span class="gol">@</span>
                    <select name="seleml" id="seleml">
                      <option value="init">선택해주세요</option>
                      <option value="naver.com">naver.com</option>
                      <option value="daum.net">daum.net</option>
                      <option value="hotmail.com">hotmail.com</option>
                      <option value="hanmail.net">hanmail.net</option>
                      <option value="gmail.com">gmail.com</option>
                      <option value="free">직접입력</option>
                    </select>
                    <label htmlFor="email2"></label>
                    <input
                      type="text"
                      name="email2"
                      id="email2"
                      placeholder="이메일뒷주소"
                    />
                    <span class="msg"></span>
                  </li>
                  <!-- 이메일 뒷주소 직접입력 -->
                  <li></li>
                  <!-- 서브밋버튼 -->
                  <li>
                    <span class="noneid">아이디가 없으신가요? </span>
                    <input type="submit" value="가입하기" id="btnj" />
                  </li>
                </ul>
              </form>
            </section>
            <!-- 2-3. 동의/비동의 박스 -->
            <section id="conf"></section>
          </main>
        </div>
      </div>
    </div>
    `,
  // 1-2. 데이터 셋업 리턴 메서드 /////
  data() {
    return {};
  },
  // 1-3. 컴포넌트 메서드 //////
  methods: {
    goPage(){
      console.log('이동해!!!');
      // 라우터로 페이지 이동하기 ///
      this.$router.push('/login');
    },
  },
  // 컴포넌트 라이프 사이클 메서드 구역 ///
  // mounted 메서드 : DOM로딩후 실행구역!
  // -> 일반 DOM코딩 JS는 여기서 호출한다!!!
  mounted() {
    // 유효성검사 함수호출!
    valid_member(this.goPage);
  }, /// mounted ///////
});



// 내보내기
export { JoinComp, LoginComp }